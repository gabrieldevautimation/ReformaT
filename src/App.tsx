import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { CheckoutPage } from './pages/CheckoutPage';
import { LegislationPage } from './pages/LegislationPage';
import { LoginPage } from './pages/LoginPage';
import { BrasilPage } from './pages/BrasilPage';
import { AcessoInformacaoPage } from './pages/AcessoInformacaoPage';
import { ParticipePage } from './pages/ParticipePage';
import { OrgaosPage } from './pages/OrgaosPage';
import { AssuntosPage } from './pages/AssuntosPage';
import { SuccessPage } from './pages/SuccessPage';
import { PixelTracker } from './components/PixelTracker';

function App() {
  return (
    <Router>
      <PixelTracker />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/sucesso" element={<SuccessPage />} />
        <Route path="/legislacao" element={<LegislationPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/brasil" element={<BrasilPage />} />
        <Route path="/acesso-informacao" element={<AcessoInformacaoPage />} />
        <Route path="/participe" element={<ParticipePage />} />
        <Route path="/orgaos" element={<OrgaosPage />} />
        <Route path="/assuntos" element={<AssuntosPage />} />
      </Routes>
    </Router>
  );
}

export default App;
