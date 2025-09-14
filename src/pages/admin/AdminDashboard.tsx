import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';
import { 
  BarChart3, 
  Users, 
  FolderOpen, 
  MessageSquare, 
  Settings,
  Plus,
} from 'lucide-react';
import { useProjects } from '../../hooks/useProjects';
import { Project } from '../../types';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';
import ProjectForm from '../../components/admin/ProjectForm';
import ProjectList from '../../components/admin/ProjectList';
import ProjectView from '../../components/admin/ProjectView';

const AdminDashboard: React.FC = () => {
  const { projects, loading, createProject, updateProject, deleteProject } = useProjects();
  const [activeTab, setActiveTab] = useState('overview');
  const [showProjectForm, setShowProjectForm] = useState(false);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [viewingProject, setViewingProject] = useState<Project | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const stats = [
    { icon: FolderOpen, label: 'Total Projects', value: projects.length, color: 'blue' },
    { icon: MessageSquare, label: 'Messages', value: '12', color: 'green' },
    { icon: Users, label: 'Visitors', value: '1.2k', color: 'purple' },
    { icon: BarChart3, label: 'Page Views', value: '5.4k', color: 'orange' }
  ];

  const tabs = [
    { id: 'overview', label: 'Overview', icon: BarChart3 },
    { id: 'projects', label: 'Projects', icon: FolderOpen },
    { id: 'messages', label: 'Messages', icon: MessageSquare },
    { id: 'settings', label: 'Settings', icon: Settings }
  ];

  

  const handleCreateProject = () => {
    setEditingProject(null);
    setShowProjectForm(true);
  };

  const handleEditProject = (project: Project) => {
    setEditingProject(project);
    setShowProjectForm(true);
    setViewingProject(null);
  };

  const handleViewProject = (project: Project) => {
    setViewingProject(project);
  };

  const handleDeleteProject = async (id: string) => {
    try {
      await deleteProject(id);
    } catch (error) {
      console.error('Error deleting project:', error);
    }
  };

  const handleProjectSubmit = async (data: Omit<Project, 'id' | 'created_at' | 'updated_at'>) => {
    setIsSubmitting(true);
    try {
      if (editingProject) {
        await updateProject(editingProject.id, data);
      } else {
        await createProject(data);
      }
      setShowProjectForm(false);
      setEditingProject(null);
    } catch (error) {
      console.error('Error saving project:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFormCancel = () => {
    setShowProjectForm(false);
    setEditingProject(null);
  };

  return (
    <div className="min-h-screen pt-6 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Admin Dashboard
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Manage your portfolio content and monitor site performance
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <div className="border-b border-gray-200 dark:border-gray-700">
            <nav className="-mb-px flex space-x-8">
              {tabs.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => setActiveTab(id)}
                  className={`
                    flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm
                    ${activeTab === id
                      ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
                    }
                  `}
                >
                  <Icon className="w-5 h-5" />
                  <span>{label}</span>
                </button>
              ))}
            </nav>
          </div>
        </motion.div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map(({ icon: Icon, label, value, color }) => (
                <motion.div
                  key={label}
                  whileHover={{ scale: 1.02 }}
                  className="group"
                >
                  <Card className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                          {label}
                        </p>
                        <p className="text-2xl font-bold text-gray-900 dark:text-white">
                          {value}
                        </p>
                      </div>
                      <div className={`w-12 h-12 bg-${color}-100 dark:bg-${color}-900/30 rounded-lg flex items-center justify-center`}>
                        <Icon className={`w-6 h-6 text-${color}-600 dark:text-${color}-400`} />
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Recent Projects */}
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                  Recent Projects
                </h2>
              </div>

              <ProjectList
              projects={projects.slice(-3)}
              loading={loading}
              onEdit={handleEditProject}
              onDelete={handleDeleteProject}
              onView={handleViewProject}
            />
            </Card>
          </motion.div>
        )}

        {/* Projects Tab */}
        {activeTab === 'projects' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Manage Projects
              </h2>
              <Button onClick={handleCreateProject}>
                <Plus className="w-4 h-4 mr-2" />
                Add New Project
              </Button>
            </div>

            <ProjectList
              projects={projects}
              loading={loading}
              onEdit={handleEditProject}
              onDelete={handleDeleteProject}
              onView={handleViewProject}
            />
          </motion.div>
        )}

        {/* Messages Tab */}
        {activeTab === 'messages' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Contact Messages
            </h2>

            <Card className="p-6">
              <p className="text-gray-600 dark:text-gray-400">
                Message management interface will be implemented here.
              </p>
            </Card>
          </motion.div>
        )}

        {/* Settings Tab */}
        {activeTab === 'settings' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Site Settings
            </h2>

            <Card className="p-6">
              <p className="text-gray-600 dark:text-gray-400">
                Site settings interface will be implemented here.
              </p>
            </Card>
          </motion.div>
        )}
      </div>

      {/* Project Form Modal */}
      <AnimatePresence>
        {showProjectForm && (
          <ProjectForm
            project={editingProject || undefined}
            onSubmit={handleProjectSubmit}
            onCancel={handleFormCancel}
            isSubmitting={isSubmitting}
          />
        )}
      </AnimatePresence>

      {/* Project View Modal */}
      <AnimatePresence>
        {viewingProject && (
          <ProjectView
            project={viewingProject}
            onClose={() => setViewingProject(null)}
            onEdit={() => handleEditProject(viewingProject)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default AdminDashboard;