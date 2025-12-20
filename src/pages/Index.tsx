import { Helmet } from "react-helmet-async";
import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import About from "@/components/landing/About";
import Testimonials from "@/components/landing/Testimonials";
import FAQ from "@/components/landing/FAQ";
import PressKit from "@/components/landing/PressKit";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>AppName - Your Life, Simplified | Mobile Productivity App</title>
        <meta 
          name="description" 
          content="Experience seamless productivity with AppName. Organize, track, and achieve your goals effortlessly. Download free on iOS and Android." 
        />
        <meta name="keywords" content="productivity app, task management, mobile app, iOS, Android, organization" />
        <link rel="canonical" href="https://appname.com" />
        
        {/* Open Graph */}
        <meta property="og:title" content="AppName - Your Life, Simplified" />
        <meta property="og:description" content="Experience seamless productivity with our intuitive mobile app." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://appname.com" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AppName - Your Life, Simplified" />
        <meta name="twitter:description" content="Experience seamless productivity with our intuitive mobile app." />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <Features />
          <About />
          <Testimonials />
          <FAQ />
          <PressKit />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
