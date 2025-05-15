import React from 'react';
import { LoginForm } from '../components/LoginForm/LoginForm';
import { useNavigate } from 'react-router-dom';

export function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = (values: { email: string; password: string }) => {
    console.log('Login attempted with:', values);

    setTimeout(() => {
      navigate('/dashboard');
    }, 1000);
  };

  return <LoginForm onSubmit={handleLogin} />;
}
