import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/header.jsx";
import Hero from "./components/hero.jsx";
import WhyChooseUs from "./components/whychooseus.jsx";
import FAQ from "./components/faq.jsx";
import AestheticsSection from "./components/aestheticssection.jsx";
import StayUpdated from "./components/stayupdated.jsx";
import OurCollaborators from "./components/ourcollaborators.jsx";
import ReviewSection from "./components/reviews.jsx";
import ContactUs from "./components/contactus.jsx";
import Footer from "./components/footer.jsx";

// New AboutUs Page
import AboutUs from "./pages/aboutus.jsx";
import WhatWeTeach from "./pages/whatweteach.jsx";
import PricingPage from "./pages/pricing.jsx";
import Enrollnow from "./pages/enrollnow.jsx";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <WhyChooseUs />
              <FAQ />
              <AestheticsSection />
              <StayUpdated />
              <OurCollaborators />
              <ReviewSection />
              <ContactUs />
            </>
          }
        />

        {/* About Us Page */}
        <Route path="/about" element={<AboutUs />} />
        <Route path="/whatweteach" element={<WhatWeTeach />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/enrollnow" element={<Enrollnow />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
