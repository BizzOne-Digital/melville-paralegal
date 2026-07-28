import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop';
import CookieNotice from './components/CookieNotice';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import ParalegalStudents from './pages/ParalegalStudents';
import Contact from './pages/Contact';
import Testimonials from './pages/Testimonials';
import FAQ from './pages/FAQ';
import Pricing from './pages/Pricing';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Disclaimer from './pages/Disclaimer';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';

import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/Admin/ProtectedRoute';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <ScrollToTop />
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<><Navbar /><Home /><Footer /></>} />
            <Route path="/about" element={<><Navbar /><About /><Footer /></>} />
            <Route path="/services" element={<><Navbar /><Services /><Footer /></>} />
            <Route path="/services/:slug" element={<><Navbar /><ServiceDetail /><Footer /></>} />
            <Route path="/paralegal-students" element={<><Navbar /><ParalegalStudents /><Footer /></>} />
            <Route path="/contact" element={<><Navbar /><Contact /><Footer /></>} />
            <Route path="/testimonials" element={<><Navbar /><Testimonials /><Footer /></>} />
            <Route path="/faq" element={<><Navbar /><FAQ /><Footer /></>} />
            <Route path="/fees" element={<><Navbar /><Pricing /><Footer /></>} />
            <Route path="/resources" element={<><Navbar /><Blog /><Footer /></>} />
            <Route path="/resources/:slug" element={<><Navbar /><BlogPost /><Footer /></>} />
            <Route path="/privacy-policy" element={<><Navbar /><PrivacyPolicy /><Footer /></>} />
            <Route path="/disclaimer" element={<><Navbar /><Disclaimer /><Footer /></>} />
            {/* Admin */}
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin/*" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} />
          </Routes>
          <CookieNotice />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
