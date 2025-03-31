'use client';

import { BriefcaseIcon, MapPinIcon, CalendarIcon } from '@heroicons/react/24/outline';

interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  description: string;
  status: 'new' | 'applied' | 'rejected';
  relevance: number;
  datePosted: string;
}

interface JobCardProps {
  job: Job;
}

export function JobCard({ job }: JobCardProps) {
  const getStatusColor = (status: Job['status']) => {
    switch (status) {
      case 'new':
        return 'bg-green-100 text-green-800';
      case 'applied':
        return 'bg-blue-100 text-blue-800';
      case 'rejected':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{job.title}</h3>
          <div className="mt-1 flex items-center text-sm text-gray-500">
            <BriefcaseIcon className="h-4 w-4 mr-1" />
            {job.company}
          </div>
        </div>
        <span
          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(
            job.status
          )}`}
        >
          {job.status.charAt(0).toUpperCase() + job.status.slice(1)}
        </span>
      </div>

      <div className="mt-4 flex items-center text-sm text-gray-500 space-x-4">
        <div className="flex items-center">
          <MapPinIcon className="h-4 w-4 mr-1" />
          {job.location}
        </div>
        <div className="flex items-center">
          <CalendarIcon className="h-4 w-4 mr-1" />
          {new Date(job.datePosted).toLocaleDateString()}
        </div>
      </div>

      <div className="mt-4">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-500">Relevance</span>
          <span className="font-medium text-gray-900">
            {Math.round(job.relevance * 100)}%
          </span>
        </div>
        <div className="mt-1 w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-blue-600 h-2 rounded-full"
            style={{ width: `${job.relevance * 100}%` }}
          />
        </div>
      </div>

      <div className="mt-4">
        <p className="text-sm text-gray-600 line-clamp-2">{job.description}</p>
      </div>

      <div className="mt-6 flex space-x-3">
        <button className="flex-1 bg-gray-900 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-800">
          View Details
        </button>
        <button className="flex-1 bg-white text-gray-700 px-4 py-2 rounded-md text-sm font-medium border border-gray-300 hover:bg-gray-50">
          Apply
        </button>
      </div>
    </div>
  );
} 