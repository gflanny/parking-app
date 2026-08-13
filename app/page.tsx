import Header from './components/Header';
import Hero from './components/Hero';
import StepGuide from './components/StepGuide';
import TrustSection from './components/TrustSection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <StepGuide />
      <TrustSection />
      <Footer />
    </main>
  );
}
