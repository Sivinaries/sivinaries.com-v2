import { Helmet } from "react-helmet-async";
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Whatsapp from '../components/Whatsapp';
import Hero from '../components/Product/Hero';
import Our from '../components/Product/Our';
import Testi from '../components/Home/Testi';
import Faq from '../components/Home/Faq';
import Ready from '../components/Home/Ready';
import Map from '../components/Map';

function Product() {
  return (
    <main>
      <Helmet>
        <html lang="id" />
        <title>Sivinaries | Produk Kami</title>

        <meta name="charset" content="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Sivinaries" />

        {/* Meta Deskripsi & Kata Kunci */}
        <meta
          name="description"
          content="Bermitra dengan Sivinaries — software house terpercaya dari Semarang. Bangun solusi digital bersama kami untuk mendukung bisnis Anda di era teknologi."
        />
        <meta
          name="keywords"
          content="software house Semarang, mitra teknologi digital, kerja sama pengembangan aplikasi, kolaborasi software Indonesia, jasa website Semarang, aplikasi mobile custom"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sivinaries.com/product" />
        <meta property="og:title" content="Bermitra dengan Sivinaries | Software House di Semarang" />
        <meta
          property="og:description"
          content="Jalin kerja sama digital dengan Sivinaries — kami bantu membangun produk digital mulai dari website, aplikasi mobile, hingga sistem bisnis yang efisien."
        />
        <meta property="og:image" content="https://sivinaries.com/logo.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Product Teknologi Anda | Sivinaries Software House Semarang" />
        <meta
          name="twitter:description"
          content="Sivinaries membuka peluang kolaborasi dengan agensi, startup, maupun perusahaan untuk membangun solusi digital yang berdampak nyata."
        />
        <meta name="twitter:image" content="https://sivinaries.com/logo.png" />

        {/* Canonical */}
        <link rel="canonical" href="https://sivinaries.com/product" />
      </Helmet>

      {/* Struktur Halaman */}
      <Navbar />
      <div>
        <Whatsapp />
        <Hero />
        <Our />
        <Testi />
        <Faq />
        <Ready />
      </div>
      <Map />
      <Footer />
    </main>
  );
}

export default Product;
