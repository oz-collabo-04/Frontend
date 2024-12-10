import { ReactNode, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '@/api/axiosInstance';
import LoadingSpinner from '@/components/LoadingSpinner/LoadingSpinner';

interface AccessControlProps {
  children: ReactNode;
  userType: 'user' | 'expert';
}

const AccessControl = ({ children, userType }: AccessControlProps) => {
  const [isAuthorized, setIsAuthorized] = useState<boolean | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAccess = async () => {
      try {
        const endpoint = userType === 'user' ? '/estimations/' : '/experts/estimations/requests/';
        await auth.get(endpoint);
        setIsAuthorized(true);
      } catch (error) {
        console.error( error);
        setIsAuthorized(false);
      }
    };

    checkAccess();
  }, [navigate, userType]);

  if (isAuthorized === null) {
    return <LoadingSpinner className="accessControlLoading" />;
  }

  if (!isAuthorized) {
    navigate('/login');
    return null;
  }

  return <>{children}</>;
};

export default AccessControl