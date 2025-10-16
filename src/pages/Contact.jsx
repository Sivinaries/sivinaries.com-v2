import { Helmet } from "react-helmet-async";
import Us from "../components/Contact/Us";
import Footer from "../components/Footer";
import Map from "../components/Map";
import Navbar from "../components/Navbar";
import Whatsapp from "../components/Whatsapp";

function Contact() {
  return (
    <main>
      <Helmet>
        <html lang="id" />
        <title>Sivinaries | Hubungi Kami</title>

        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Sivinaries" />

        {/* Deskripsi & Kata Kunci SEO */}
        <meta
          name="description"
          content="Hubungi tim Sivinaries — software house terpercaya dari Semarang. Konsultasikan kebutuhan digital Anda untuk website, aplikasi mobile, atau sistem bisnis."
        />
        <meta
          name="keywords"
          content="kontak software house Semarang, hubungi pengembang website, jasa aplikasi mobile Indonesia, konsultasi software custom, tim Sivinaries, digital agency Semarang"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sivinaries.com/contact" />
        <meta property="og:title" content="Hubungi Sivinaries | Software House di Semarang" />
        <meta
          property="og:description"
          content="Mulai proyek digital Anda bersama Sivinaries. Kami siap membantu bisnis Anda berkembang melalui solusi software yang tepat dan profesional."
        />
        <meta property="og:image" content="https://sivinaries.com/logo.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hubungi Sivinaries | Software House Semarang" />
        <meta
          name="twitter:description"
          content="Terhubung dengan Sivinaries — software house profesional di Semarang. Ayo diskusikan kebutuhan website, aplikasi, atau sistem digital Anda."
        />
        <meta name="twitter:image" content="https://sivinaries.com/logo.png" />

        {/* Canonical */}
        <link rel="canonical" href="https://sivinaries.com/contact" />
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

export default Contact;
