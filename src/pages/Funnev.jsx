import { Helmet } from "react-helmet-async";
import Hero from "../components/Product/Funnev/Hero";
import Footer from "../components/Footer";
import Map from "../components/Map";
import Navbar from "../components/Navbar";
import Whatsapp from "../components/Whatsapp";
import Product from "../components/Product/Funnev/Product";
import Ready from "../components/Home/Ready";
import About from "../components/Product/Funnev/About";
import Faq from "../components/Product/Funnev/Faq";

function Funnev() {
  return (
    <main>
      <Helmet>
        <html lang="id" />
        <title>Funnev x Sivinaries</title>

        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Sivinaries" />

        {/* Deskripsi & Kata Kunci SEO */}
        <meta
          name="description"
          content="Lihat bagaimana Sivinaries berkolaborasi dengan Funnev untuk membangun platform digital kreatif yang fun, modern, dan scalable. Kolaborasi dari Semarang untuk Indonesia."
        />
        <meta
          name="keywords"
          content="Funnev Indonesia, kolaborasi digital kreatif, software house Semarang, proyek teknologi Funnev, pengembangan aplikasi custom, solusi digital kreatif"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sivinaries.com/partner/funnev" />
        <meta property="og:title" content="Funnev x Sivinaries | Proyek Digital Kreatif dari Semarang" />
        <meta
          property="og:description"
          content="Kolaborasi digital antara Sivinaries dan Funnev menghasilkan platform yang inovatif dan menyenangkan. Dibangun dengan kualitas dan kecepatan oleh tim dari Semarang."
        />
        <meta property="og:image" content="https://sivinaries.com/logo.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Funnev x Sivinaries | Kolaborasi Kreatif Digital" />
        <meta
          name="twitter:description"
          content="Jelajahi kolaborasi Funnev dan Sivinaries — kami bangun solusi digital menyenangkan dan berperforma tinggi, sesuai visi brand Funnev."
        />
        <meta name="twitter:image" content="https://sivinaries.com/logo.png" />

        {/* Canonical */}
        <link rel="canonical" href="https://sivinaries.com/partner/funnev" />
      </Helmet>

      {/* Struktur Halaman */}
      <Navbar />
      <div>
        <Whatsapp />
        <Hero />
        <About />
        <Product />
        <Faq />
        <Ready />
      </div>
      <Map />
      <Footer />
    </main>
  );
}

export default Funnev;
