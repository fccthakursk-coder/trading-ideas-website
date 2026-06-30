import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Features from "../components/Features";
import FreeServices from "../components/FreeServices";
import PremiumServices from "../components/PremiumServices";
import Footer from "../components/Footer";
import LatestTrades from "../components/LatestTrades";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import ContactCTA from "../components/ContactCTA";

export default function Home() {
  return (
    <>
      <Navbar />
<Hero />
<Stats />
<Features />
<FreeServices />
<PremiumServices />
<LatestTrades/>
{/* <Testimonials /> */}
{/* <FAQ /> */}
{/* <ContactCTA /> */}

<Footer />
    </>
  );
}