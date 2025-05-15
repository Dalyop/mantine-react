import React from 'react';
import { SignUpForm } from '../components/SignUpForm/SignUpForm';
import { useNavigate } from 'react-router-dom';

export function SignUpPage() {
  const navigate = useNavigate();
  const handleSignUp = (values: { email: string; password: string }) => {
    console.log('Sign up attempt with', values);
  };

  return <SignUpForm onSubmit={handleSignUp} />;
};
