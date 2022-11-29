/* eslint-disable prettier/prettier */
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import HelpPage from "./pages/HelpPage";
import MentionsLegalesPage from "./pages/MentionsLegalesPage";
import ModalCreateAccount from "./components/ModalCreateAccount/ModalCreateAccount";
import FAQ from "./components/FAQ/FAQ";
import Captcha from "./components/NavbarBurger/ModalConnexion/Captcha";
import LikeDislikePage from "./pages/LikeDislikePage";
import ContactPage from "./components/Page_Contact/contactPage";
import MessageriePage from "./pages/MessageriePage";
import ProfilPerso from "./components/ProfilPerso/ProfilPerso";
import HeaderMessage from "./components/HeaderMessage/HeaderMessage";
import Aide from "./components/Aide/AideData";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/aide" element={<HelpPage />} />
          <Route path="/mentionslegales" element={<MentionsLegalesPage />} />
          <Route path="/message" element={<MessageriePage />} />
          <Route path="/aide" element={<Aide />} />
          <Route path="/messagerie" element={<HeaderMessage />} />
          <Route path="/creation" element={<ModalCreateAccount />} />
          <Route path="/FAQ" element={<FAQ />} />
          <Route path="/captcha" element={<Captcha />} />
          <Route path="/likedislike" element={<LikeDislikePage />} />
          <Route path="/contactpage" element={<ContactPage />} />
          <Route path="/profilperso" element={<ProfilPerso />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
