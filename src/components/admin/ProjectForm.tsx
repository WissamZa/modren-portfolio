import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { X, Upload, Link as LinkIcon, Github, ExternalLink } from 'lucide-react';
import toast from 'react-hot-toast';
import { Project } from '../../types';
import Input from '../ui/Input';
import Button from '../ui/Button';
import Card from '../ui/Card';

const schema = yup.object().shape({
  title: yup.string().required('Title is required').min(3, 'Title must be at least 3 characters'),
  description: yup.string().required('Description is required').min(10, 'Description must be at least 10 characters'),
  content: yup.string(),
  image_url: yup.string().url('Must be a valid URL'),
  demo_url: yup.string().url('Must be a valid URL'),
  github_url: yup.string().url('Must be a valid URL'),
  category: yup.string().required('Category is required'),
  technologies: yup.string().required('At least one technology is required'),
  featured: yup.boolean()
});

interface ProjectFormData {
  title: string;
  description: string;
  content: string;
  image_url: string;
  demo_url: string;
  github_url: string;
  category: string;
  technologies: string;
  featured: boolean;
}

interface ProjectFormProps {
  project?: Project;
  onSubmit: (data: Omit<Project, 'id' | 'created_at' | 'updated_at'>) => Promise<void>;
  onCancel: () => void;
  isSubmitting: boolean;
}

const ProjectForm: React.FC<ProjectFormProps> = ({
  project,
  onSubmit,
  onCancel,
  isSubmitting
}) => {
  const [imagePreview, setImagePreview] = useState<string>('');

  const { register, handleSubmit, formState: { errors }, watch, setValue } = useForm<ProjectFormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      title: project?.title || '',
      description: project?.description || '',
      content: project?.content || '',
      image_url: project?.image_url || '',
      demo_url: project?.demo_url || '',
      github_url: project?.github_url || '',
      category: project?.category || 'web',
      technologies: project?.technologies?.join(', ') || '',
      featured: project?.featured || false
    }
  });

  const watchImageUrl = watch('image_url');

  useEffect(() => {
    if (watchImageUrl) {
      setImagePreview(watchImageUrl);
    }
  }, [watchImageUrl]);

  const handleFormSubmit = async (data: ProjectFormData) => {
    try {
      const projectData = {
        ...data,
        technologies: data.technologies.split(',').map(tech => tech.trim()).filter(Boolean),
        content: data.content || null,
        image_url: data.image_url || null,
        demo_url: data.demo_url || null,
        github_url: data.github_url || null
      };

      await onSubmit(projectData);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const categories = [
    { value: 'web', label: 'Web Development' },
    { value: 'mobile', label: 'Mobile App' },
    { value: 'desktop', label: 'Desktop App' },
    { value: 'api', label: 'API/Backend' },
    { value: 'design', label: 'Design' },
    { value: 'other', label: 'Other' }
  ];

  const suggestedImages = [
    'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800'
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="w-full max-w-4xl max-h-[90vh] overflow-y-auto"
      >
        <Card className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              {project ? 'Edit Project' : 'Add New Project'}
            </h2>
            <Button variant="ghost" size="sm" onClick={onCancel}>
              <X className="w-5 h-5" />
            </Button>
          </div>

          <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Left Column */}
              <div className="space-y-4">
                <Input
                  label="Project Title"
                  placeholder="My Awesome Project"
                  error={errors.title?.message}
                  {...register('title')}
                />

                <div className="space-y-1">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Category
                  </label>
                  <select
                    className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
                    {...register('category')}
                  >
                    {categories.map(({ value, label }) => (
                      <option key={value} value={value}>
                        {label}
                      </option>
                    ))}
                  </select>
                  {errors.category && (
                    <p className="text-sm text-red-600 dark:text-red-400">
                      {errors.category.message}
                    </p>
                  )}
                </div>

                <Input
                  label="Technologies (comma-separated)"
                  placeholder="React, TypeScript, Tailwind CSS"
                  error={errors.technologies?.message}
                  {...register('technologies')}
                />

                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="featured"
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    {...register('featured')}
                  />
                  <label htmlFor="featured" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Featured Project
                  </label>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-4">
                <Input
                  label="Demo URL (optional)"
                  placeholder="https://myproject.com"
                  leftIcon={<ExternalLink className="w-5 h-5 text-gray-400" />}
                  error={errors.demo_url?.message}
                  {...register('demo_url')}
                />

                <Input
                  label="GitHub URL (optional)"
                  placeholder="https://github.com/username/repo"
                  leftIcon={<Github className="w-5 h-5 text-gray-400" />}
                  error={errors.github_url?.message}
                  {...register('github_url')}
                />

                <Input
                  label="Image URL (optional)"
                  placeholder="https://example.com/image.jpg"
                  leftIcon={<LinkIcon className="w-5 h-5 text-gray-400" />}
                  error={errors.image_url?.message}
                  {...register('image_url')}
                />

                {/* Image Preview */}
                {imagePreview && (
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Image Preview
                    </label>
                    <div className="relative">
                      <img
                        src={imagePreview}
                        alt="Preview"
                        className="w-full h-32 object-cover rounded-lg"
                        onError={() => setImagePreview('')}
                      />
                    </div>
                  </div>
                )}

                {/* Suggested Images */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Suggested Images
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {suggestedImages.map((url, index) => (
                      <button
                        key={index}
                        type="button"
                        onClick={() => setValue('image_url', url)}
                        className="relative group"
                      >
                        <img
                          src={url}
                          alt={`Suggestion ${index + 1}`}
                          className="w-full h-20 object-cover rounded-lg group-hover:opacity-75 transition-opacity"
                        />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <Upload className="w-6 h-6 text-white" />
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Short Description
              </label>
              <textarea
                rows={3}
                placeholder="Brief description of your project..."
                className={`
                  block w-full rounded-lg border-gray-300 shadow-sm
                  focus:border-blue-500 focus:ring-blue-500
                  dark:bg-gray-800 dark:border-gray-600 dark:text-white
                  ${errors.description ? 'border-red-500' : ''}
                `}
                {...register('description')}
              />
              {errors.description && (
                <p className="text-sm text-red-600 dark:text-red-400">
                  {errors.description.message}
                </p>
              )}
            </div>

            {/* Content */}
            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Detailed Content (optional)
              </label>
              <textarea
                rows={6}
                placeholder="Detailed description, features, technical details..."
                className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
                {...register('content')}
              />
            </div>

            {/* Actions */}
            <div className="flex justify-end space-x-4 pt-6 border-t border-gray-200 dark:border-gray-700">
              <Button variant="ghost" onClick={onCancel} disabled={isSubmitting}>
                Cancel
              </Button>
              <Button type="submit" loading={isSubmitting}>
                {project ? 'Update Project' : 'Create Project'}
              </Button>
            </div>
          </form>
        </Card>
      </motion.div>
    </motion.div>
  );
};

export default ProjectForm;