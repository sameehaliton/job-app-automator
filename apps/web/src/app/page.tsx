import { JobList } from '@/components/jobs/JobList';
import { Sidebar } from '@/components/layout/Sidebar';

export default function Home() {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1 overflow-y-auto p-8">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-3xl font-bold text-gray-900">Job Applications</h1>
          <div className="mt-6">
            <JobList />
          </div>
        </div>
      </main>
    </div>
  );
}
