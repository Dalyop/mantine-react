import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LoginPage } from './pages/Login.page';
import { SignUpPage } from './pages/Signup.page';
import { DashboardPage } from './pages/Dashboard.page';
import AuthLayout from './layouts/AuthLayout'; 
import RootLayout from './layouts/RootLayout';
import { HomePage } from './pages/Home.page';
import { ForgotPasswordPage } from './pages/ForgotPassword.page';

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        </Route>

        <Route element={<RootLayout />}>
          <Route path="/dashboard" element={<DashboardPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}