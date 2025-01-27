import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Dashboard: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/login');
    }
  }, [router]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold">Bem-vindo ao Dashboard!</h1>
    </div>
  );
};

export default Dashboard;
