
import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation, Outlet } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import ShipMarketplacePage from './pages/ShipMarketplacePage';
import ShipDetailPage from './pages/ShipDetailPage';
import AllServicesPage from './pages/AllServicesPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import NewsPage from './pages/NewsPage';
import AuthPage from './pages/AuthPage';
import QuotePage from './pages/QuotePage';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const MainLayout = () => (
  <div className="flex flex-col min-h-screen">
    <Header />
    <main className="flex-grow">
      <Outlet />
    </main>
    <Footer />
  </div>
);

const SiteLayout: React.FC<{children: React.ReactNode}> = ({ children }) => (
    <div className="bg-white">{children}</div>
);


function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<SiteLayout><AllServicesPage /></SiteLayout>} />
          <Route path="/services/:slug" element={<SiteLayout><ServiceDetailPage /></SiteLayout>} />
          <Route path="/ship-marketplace" element={<SiteLayout><ShipMarketplacePage /></SiteLayout>} />
          <Route path="/ship-marketplace/:id" element={<SiteLayout><ShipDetailPage /></SiteLayout>} />
          <Route path="/about" element={<SiteLayout><AboutPage /></SiteLayout>} />
          <Route path="/news" element={<SiteLayout><NewsPage /></SiteLayout>} />
          <Route path="/contact" element={<SiteLayout><ContactPage /></SiteLayout>} />
          <Route path="/quote" element={<SiteLayout><QuotePage /></SiteLayout>} />
        </Route>
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;