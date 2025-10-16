import { Helmet } from "react-helmet-async";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Whatsapp from '../components/Whatsapp';
import Hero from '../components/Home/Hero';
import Service from '../components/Home/Service';
import Why from '../components/Home/Why';
import Tech from '../components/Home/Tech';
import Running from '../components/Home/Running';
import Ready from '../components/Home/Ready';
import About from '../components/Home/About';
import Quote from '../components/Home/Quote';
import Testi from '../components/Home/Testi';
import Partner from '../components/Home/Partner';
import Faq from '../components/Home/Faq';
import Product from '../components/Home/Product';
import Map from '../components/Map';

function Home() {
  return (
    <main className="flex flex-col">
      <Helmet>
        <html lang="id" />
        <title>Sivinaries | Jasa Website & Aplikasi Mobile</title>

        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Sivinaries" />

        {/* Deskripsi dan Keyword SEO */}
        <meta
          name="description"
          content="Sivinaries adalah software house profesional di Semarang. Kami menyediakan jasa pembuatan website, aplikasi mobile, dan sistem digital sesuai kebutuhan bisnis Anda."
        />
        <meta
          name="keywords"
          content="software house Semarang, jasa buat website, pembuatan aplikasi mobile, pengembang software custom, digitalisasi bisnis Indonesia, Sivinaries"
        />

        {/* Open Graph (Facebook, LinkedIn, dll) */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sivinaries.com/" />
        <meta property="og:title" content="Sivinaries — Jasa Website & Aplikasi Mobile di Semarang" />
        <meta
          property="og:description"
          content="Percayakan kebutuhan digital bisnis Anda kepada Sivinaries. Kami membangun solusi digital yang modern, cepat, dan efisien."
        />
        <meta property="og:image" content="https://sivinaries.com/logo.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://sivinaries.com/" />
        <meta name="twitter:title" content="Sivinaries — Software House di Semarang" />
        <meta
          name="twitter:description"
          content="Bangun website dan aplikasi mobile profesional bersama Sivinaries. Solusi digital yang disesuaikan dengan kebutuhan bisnis Anda."
        />
        <meta name="twitter:image" content="https://sivinaries.com/logo.png" />

        {/* Canonical */}
        <link rel="canonical" href="https://sivinaries.com/" />
      </Helmet>

      {/* Struktur Halaman */}
      <Navbar />
      <div className="w-full mx-auto">
        <Whatsapp />
        <Hero />
        <Running />
        <About />
        <Service />
        <Partner />
        <Product />
        <Quote />
        <Why />
        <Tech />
        <Testi />
        <Faq />
        <Ready />
      </div>
      <Map />
      <Footer />
    </main>
  );
}

export default Home;
