import { Helmet } from "react-helmet-async";
import Hero from "../components/Product/Beil/Hero";
import Footer from "../components/Footer";
import Map from "../components/Map";
import Navbar from "../components/Navbar";
import Whatsapp from "../components/Whatsapp";
import Product from "../components/Product/Beil/Product";
import Faq from "../components/Product/Beil/Faq";
import Ready from "../components/Home/Ready";
import About from "../components/Product/Beil/About";

function Beil() {
  return (
    <main>
      <Helmet>
        <html lang="id" />
        <title>Beil x Sivinaries</title>

        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Sivinaries" />

        {/* Deskripsi dan Kata Kunci SEO */}
        <meta
          name="description"
          content="Temukan bagaimana Sivinaries membantu Beil membangun solusi digital sesuai visi brand mereka. Kolaborasi sukses antara brand lokal dan software house Semarang."
        />
        <meta
          name="keywords"
          content="Beil Indonesia, kolaborasi digital, software house Semarang, mitra teknologi Beil, aplikasi custom, pengembangan sistem Beil, partner Sivinaries"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sivinaries.com/partner/beil" />
        <meta property="og:title" content="Beil x Sivinaries | Solusi Digital yang Dibangun Bersama" />
        <meta
          property="og:description"
          content="Sivinaries bekerja sama dengan Beil untuk menciptakan solusi digital yang scalable dan sesuai kebutuhan bisnis mereka. Lihat hasil kerja samanya."
        />
        <meta property="og:image" content="https://sivinaries.com/logo.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Beil x Sivinaries | Kolaborasi Teknologi dari Semarang" />
        <meta
          name="twitter:description"
          content="Jelajahi kolaborasi Beil dan Sivinaries dalam membangun produk digital yang disesuaikan dan berdampak. Dari ide hingga eksekusi."
        />
        <meta name="twitter:image" content="https://sivinaries.com/logo.png" />

        {/* Canonical */}
        <link rel="canonical" href="https://sivinaries.com/partner/beil" />
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

export default Beil;
