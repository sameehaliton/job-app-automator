'use client';

import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { JobCard } from './JobCard';

// Temporary mock data until we connect to the backend
const mockJobs = [
  {
    id: '1',
    title: 'Senior Software Engineer',
    company: 'Tech Corp',
    location: 'Remote',
    description: 'Looking for an experienced software engineer...',
    status: 'new',
    relevance: 0.85,
    datePosted: '2024-03-31',
  },
  // Add more mock jobs as needed
];

export function JobList() {
  const [filter, setFilter] = useState('all');

  // TODO: Replace with actual API call
  const { data: jobs = mockJobs, isLoading } = useQuery({
    queryKey: ['jobs', filter],
    queryFn: async () => {
      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return mockJobs;
    },
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div className="flex space-x-4">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-md ${
              filter === 'all'
                ? 'bg-gray-900 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            All Jobs
          </button>
          <button
            onClick={() => setFilter('new')}
            className={`px-4 py-2 rounded-md ${
              filter === 'new'
                ? 'bg-gray-900 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            New
          </button>
          <button
            onClick={() => setFilter('applied')}
            className={`px-4 py-2 rounded-md ${
              filter === 'applied'
                ? 'bg-gray-900 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            Applied
          </button>
        </div>
        <div className="text-sm text-gray-500">
          {jobs.length} jobs found
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
} 