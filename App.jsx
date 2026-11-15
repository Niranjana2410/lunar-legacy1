import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar    from './components/Navbar';
import Home      from './pages/Home';
import Archive   from './pages/Archive';
import ArtifactDetail from './pages/ArtifactDetail';
import Timeline  from './pages/Timeline';
import Atlas     from './pages/Atlas';
import Compare   from './pages/Compare';
import './App.css';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function AppLayout() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/"                 element={<Home />} />
          <Route path="/archive"          element={<Archive />} />
          <Route path="/artifact/:id"     element={<ArtifactDetail />} />
          <Route path="/timeline"         element={<Timeline />} />
          <Route path="/atlas"            element={<Atlas />} />
          <Route path="/compare"          element={<Compare />} />
          <Route path="*" element={
            <div className="container" style={{ padding: '10rem 0', textAlign: 'center' }}>
              <h2>Page not found</h2>
              <a href="/" className="btn btn-outline" style={{ marginTop: '1.5rem', display: 'inline-flex' }}>← Go Home</a>
            </div>
          } />
        </Routes>
      </main>
      <footer className="site-footer">
        <div className="container site-footer__inner">
          <div className="site-footer__brand">
            <span style={{ color: 'var(--gold)' }}>◎</span>
            <span className="mono" style={{ fontSize: '0.8rem', letterSpacing: '0.15em' }}>LUNAR LEGACY</span>
          </div>
          <div className="site-footer__links">
            <a href="https://nssdc.gsfc.nasa.gov/" target="_blank" rel="noopener noreferrer">NASA NSSDCA</a>
            <a href="https://science.nasa.gov/" target="_blank" rel="noopener noreferrer">NASA Science</a>
            <a href="https://mars.nasa.gov/" target="_blank" rel="noopener noreferrer">NASA Mars</a>
          </div>
          <p className="site-footer__credit mono">
            NASA Space Apps Challenge 2026 · Data sourced from NASA NSSDCA public records
          </p>
        </div>
      </footer>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}
