import React from 'react';
import { motion } from 'framer-motion';
import { X, ExternalLink, Github, Calendar, Tag, Star } from 'lucide-react';
import { Project } from '../../types/index';
import Button from '../ui/Button';
import Card from '../ui/Card';

interface ProjectViewProps {
  project: Project;
  onClose: () => void;
  onEdit: () => void;
}

const ProjectView: React.FC<ProjectViewProps> = ({ project, onClose, onEdit }) => {
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
          {/* Header */}
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center space-x-3">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                {project.title}
              </h2>
              {project.featured && (
                <Star className="w-6 h-6 text-yellow-500 fill-current" />
              )}
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="sm" onClick={onEdit}>
                Edit
              </Button>
              <Button variant="ghost" size="sm" onClick={onClose}>
                <X className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Project Image */}
          {project.image_url && (
            <div className="mb-6">
              <img
                src={project.image_url}
                alt={project.title}
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          )}

          {/* Project Info Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            {/* Category */}
            <div className="flex items-center space-x-2">
              <Tag className="w-5 h-5 text-gray-400" />
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Category</p>
                <p className="font-medium text-gray-900 dark:text-white capitalize">
                  {project.category}
                </p>
              </div>
            </div>

            {/* Created Date */}
            <div className="flex items-center space-x-2">
              <Calendar className="w-5 h-5 text-gray-400" />
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Created</p>
                <p className="font-medium text-gray-900 dark:text-white">
                  {new Date(project.created_at).toLocaleDateString()}
                </p>
              </div>
            </div>

            {/* Updated Date */}
            <div className="flex items-center space-x-2">
              <Calendar className="w-5 h-5 text-gray-400" />
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Updated</p>
                <p className="font-medium text-gray-900 dark:text-white">
                  {new Date(project.updated_at).toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Description
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Content */}
          {project.content && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Detailed Content
              </h3>
              <div className="prose dark:prose-invert max-w-none">
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed whitespace-pre-wrap">
                  {project.content}
                </p>
              </div>
            </div>
          )}

          {/* Technologies */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          {(project.demo_url || project.github_url) && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Project Links
              </h3>
              <div className="flex flex-wrap gap-3">
                {project.demo_url && (
                  <Button
                    onClick={() => window.open(project.demo_url, '_blank')}
                    className="flex items-center space-x-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>View Demo</span>
                  </Button>
                )}
                {project.github_url && (
                  <Button
                    variant="secondary"
                    onClick={() => window.open(project.github_url, '_blank')}
                    className="flex items-center space-x-2"
                  >
                    <Github className="w-4 h-4" />
                    <span>View Code</span>
                  </Button>
                )}
              </div>
            </div>
          )}

          {/* Status */}
          <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  project.featured 
                    ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300'
                    : 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300'
                }`}>
                  {project.featured ? 'Featured' : 'Regular'}
                </span>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                ID: {project.id}
              </p>
            </div>
          </div>
        </Card>
      </motion.div>
    </motion.div>
  );
};

export default ProjectView;