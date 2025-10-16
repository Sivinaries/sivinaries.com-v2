import { Helmet } from "react-helmet-async";
import Footer from "../components/Footer";
import Map from "../components/Map";
import Navbar from "../components/Navbar";
import Whatsapp from "../components/Whatsapp";
import Us from "../components/Work/Us";

function Work() {
  return (
    <main>
      <Helmet>
        <html lang="id" />
        <title>Sivinaries | Karya Kami</title>

        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Sivinaries" />

        {/* Deskripsi & Keyword SEO */}
        <meta
          name="description"
          content="Lihat hasil karya kami — dari website custom hingga aplikasi mobile — yang dikembangkan oleh tim Sivinaries, software house asal Semarang untuk solusi digital bisnis Anda."
        />
        <meta
          name="keywords"
          content="software house Semarang, portofolio proyek, contoh aplikasi, pengembangan website, aplikasi mobile Indonesia, karya Sivinaries, proyek software bisnis"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sivinaries.com/work" />
        <meta property="og:title" content="Portofolio Proyek | Karya Terbaik dari Sivinaries" />
        <meta
          property="og:description"
          content="Telusuri portofolio proyek kami — website, aplikasi, dan solusi digital yang kami kembangkan untuk klien dari berbagai sektor bisnis di Indonesia."
        />
        <meta property="og:image" content="https://sivinaries.com/logo.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Karya Kami | Software House Semarang - Sivinaries" />
        <meta
          name="twitter:description"
          content="Lihat proyek terbaru dari Sivinaries — solusi digital yang disesuaikan untuk kebutuhan bisnis, mulai dari website, aplikasi mobile, hingga sistem backend."
        />
        <meta name="twitter:image" content="https://sivinaries.com/logo.png" />

        {/* Canonical */}
        <link rel="canonical" href="https://sivinaries.com/work" />
      </Helmet>

      {/* Struktur Halaman */}
      <Navbar />
      <div>
        <Whatsapp />
        <Us />
      </div>
      <Map />
      <Footer />
    </main>
  );
}

export default Work;
