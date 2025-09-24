import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Eye, EyeOff, Mail, Lock, LogIn } from 'lucide-react';
import toast from 'react-hot-toast';
import { useAuth } from '../../contexts/auth-utils';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';

const schema = yup.object().shape({
  email: yup.string().required('Email is required').email('Invalid email address'),
  password: yup.string().required('Password is required').min(6, 'Password must be at least 6 characters')
});

interface LoginFormData {
  email: string;
  password: string;
}

const LoginPage: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { signIn } = useAuth();
  const navigate = useNavigate();
  
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<LoginFormData>({
    resolver: yupResolver(schema)
  });

  const onSubmit = async (data: LoginFormData) => {
    try {
      await signIn(data.email, data.password);
      toast.success('Welcome back!');
      navigate('/');
    } catch (err) {
      // 👇 Safe, typed, no 'any' — handles all possible error shapes
      const errorMessage = err instanceof Error 
        ? err.message 
        : typeof err === 'string' 
          ? err 
          : 'Failed to sign in';
  
      toast.error(errorMessage);
    }
  };

  return (
    <div className="min-h-screen pb-5 pt-8 bg-linear-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-purple-900">
      <div className="max-w-md mx-auto px-4">
        <span></span>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          {/* Header */}
          <div className="text-center space-y-4">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="w-16 h-16 bg-linear-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto"
            >
              <LogIn className="w-8 h-8 text-white" />
            </motion.div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Welcome Back
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Sign in to access your admin panel
            </p>
          </div>

          {/* Login Form */}
          <Card className="p-8">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <Input
                label="Email Address"
                type="email"
                placeholder="admin@example.com"
                leftIcon={<Mail className="w-5 h-5 text-gray-400" />}
                error={errors.email?.message}
                {...register('email')}
              />

              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Password
                </label>
                <div className="relative">
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter your password"
                    leftIcon={<Lock className="w-5 h-5 text-gray-400" />}
                    rightIcon={
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                      >
                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    }
                    error={errors.password?.message}
                    {...register('password')}
                  />
                </div>
              </div>

              <Button
                type="submit"
                size="lg"
                loading={isSubmitting}
                className="w-full"
              >
                Sign In
              </Button>
            </form>
          </Card>

          {/* Demo Credentials */}
          <Card className="p-6 bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800">
            <div className="text-center space-y-2">
              <h3 className="font-semibold text-blue-900 dark:text-blue-100">
                Demo Credentials
              </h3>
              <p className="text-sm text-blue-700 dark:text-blue-300">
                Email: admin@example.com<br />
                Password: admin123
              </p>
              <p className="text-xs text-blue-600 dark:text-blue-400">
                Use these credentials to test the admin panel
              </p>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default LoginPage;