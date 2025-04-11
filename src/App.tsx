import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Projects } from './pages/Projects';
import { Pricing } from './pages/Pricing';
import { Teams } from './pages/Teams';
import { Mentorship } from './pages/Mentorship';
import { SignIn } from './pages/SignIn';
import { SignUp } from './pages/SignUp';
import { ForgotPassword } from './pages/ForgotPassword';
import { ResetPassword } from './pages/resetpass';
import { SuccessConfirmation } from './pages/SuccessConfirmation';
import { Dashboard } from './pages/Dashboard';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/mentorship" element={<Mentorship />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/confirmation" element={<SuccessConfirmation />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Layout>
  );
}

export default App;