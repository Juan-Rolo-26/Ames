import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ServiciosPage from './pages/ServiciosPage';
import NosotrosPage from './pages/NosotrosPage';
import PadrinosPage from './pages/PadrinosPage';
import CasosPage from './pages/CasosPage';
import PreguntasFrecuentesPage from './pages/PreguntasFrecuentesPage';
import TerminosPage from './pages/TerminosPage';
import PrivacidadPage from './pages/PrivacidadPage';
import ScrollToTop from './components/ScrollToTop';
import RouteEffects from './components/RouteEffects';

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <ScrollToTop />
      <RouteEffects />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mutual-argentina" element={<Navigate to="/" replace />} />
            <Route path="/servicios" element={<ServiciosPage />} />
            <Route path="/nosotros" element={<NosotrosPage />} />
            <Route path="/padrinos" element={<PadrinosPage />} />
            <Route path="/casos" element={<CasosPage />} />
            <Route path="/preguntas-frecuentes" element={<PreguntasFrecuentesPage />} />
            <Route path="/terminos" element={<TerminosPage />} />
            <Route path="/privacidad" element={<PrivacidadPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
