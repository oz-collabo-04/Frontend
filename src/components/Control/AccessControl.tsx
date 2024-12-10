import React, { ReactNode, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface AccessControlProps {
  userType: 'user' | 'expert' ;
  children: ReactNode;
}

const AccessControl: React.FC<AccessControlProps> = ({ userType, children }) => {
  const navigate = useNavigate();
  const [hasAccess, setHasAccess] = useState(false);

  useEffect(() => {
    const userState = sessionStorage.getItem('state');
    if (userState) {
      const stateObj = JSON.parse(userState);
      if (stateObj.mode === userType) {
        setHasAccess(true);
      } else {
        navigate('/');
      }
    } else {
      navigate('/');
    }
  }, [userType, navigate]);

  return hasAccess ? <>{children}</> : null;
};

export default AccessControl