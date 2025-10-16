import { Helmet } from "react-helmet-async";
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Whatsapp from '../components/Whatsapp';
import Hero from '../components/Service/Hero';
import Our from '../components/Service/Our';
import Testi from '../components/Home/Testi';
import Faq from '../components/Home/Faq';
import Ready from '../components/Home/Ready';
import Map from '../components/Map';

function Service() {
    return (
        <main>
            <Helmet>
                <html lang="id" />
                <title>Sivinaries | Layanan Kami</title>

                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1" />
                <meta name="robots" content="index, follow" />
                <meta name="author" content="Sivinaries" />

                {/* Deskripsi dan Kata Kunci SEO */}
                <meta
                    name="description"
                    content="Temukan berbagai layanan dari Sivinaries — software house Semarang terpercaya. Kami membuat website, aplikasi mobile, dan sistem digital sesuai kebutuhan bisnis Anda."
                />
                <meta
                    name="keywords"
                    content="software house Semarang, jasa pembuatan website, aplikasi mobile Semarang, pengembangan software custom, layanan IT Indonesia, jasa digitalisasi bisnis"
                />

                {/* Open Graph */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://sivinaries.com/service" />
                <meta property="og:title" content="Layanan Sivinaries | Software House di Semarang" />
                <meta
                    property="og:description"
                    content="Kami menyediakan layanan pembuatan website, aplikasi mobile, dan sistem digital yang bisa disesuaikan untuk pertumbuhan bisnis Anda."
                />
                <meta property="og:image" content="https://sivinaries.com/logo.png" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Layanan Kami | Sivinaries Software House Semarang" />
                <meta
                    name="twitter:description"
                    content="Lihat layanan lengkap dari Sivinaries, mulai dari website, aplikasi mobile, hingga software kustom untuk berbagai kebutuhan bisnis."
                />
                <meta name="twitter:image" content="https://sivinaries.com/logo.png" />

                {/* Canonical */}
                <link rel="canonical" href="https://sivinaries.com/service" />
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

export default Service;
