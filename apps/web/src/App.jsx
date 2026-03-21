import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import ScrollToTop from './components/ScrollToTop.jsx';
import Analytics from './components/Analytics.jsx';
import HomePage from './pages/HomePage.jsx';
import FiturPage from './pages/FiturPage.jsx';
import HargaPage from './pages/HargaPage.jsx';
import DemoKontakPage from './pages/DemoKontakPage.jsx';
import BlogPage from './pages/BlogPage.jsx';
import BlogDetailPage from './pages/BlogDetailPage.jsx';

function App() {
  return (
    <Router>
      <Analytics />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/fitur" element={<FiturPage />} />
        <Route path="/harga" element={<HargaPage />} />
        <Route path="/demo-kontak" element={<DemoKontakPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogDetailPage />} />
        <Route path="*" element={
          <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-4">404 - Halaman Tidak Ditemukan</h1>
              <p className="text-muted-foreground mb-8">Halaman yang Anda cari tidak tersedia.</p>
              <a href="/" className="text-primary hover:underline">Kembali ke Home</a>
            </div>
          </div>
        } />
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;