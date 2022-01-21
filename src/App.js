import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./Pages/ScrollToTop";
import Home from "./Pages/Home";
import LegalConsultant from "./Pages/LegalConsultant";
import LegalTeaching from "./Pages/LegalTeaching";
import AdvocateEngagement from "./Pages/AdvocateEngagement";
import PetitionFiling from "./Pages/PetitionFiling";
import NoPage from "./Pages/NoPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop>
          <Routes>
            <Route index element={<Home />} />
            <Route path="legal-consultant" element={<LegalConsultant />} />
            <Route path="legal-teaching" element={<LegalTeaching />} />
            <Route
              path="advocate-engagement"
              element={<AdvocateEngagement />}
            />
            <Route path="petition-filing" element={<PetitionFiling />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
}

export default App;
