import Head from "next/head";
import Header from "../layout/Header/Header";
import Footer from "../layout/Footer/Footer";
import Hero from "../layout/Hero/Hero";
import Link from "next/link";

export default function Contact() {
  return (
    <>
      <Head>
        <title>
          PSS | Emergency Vehicle Equipment | Sales, Service, & Installations
        </title>
        <meta
          name="description"
          content="PSS | Emergency Vehicle Equipment | Sales, Service, & Installations"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header alt={false} />

        <section id="home-intro" className="body body-column">
          <Hero id="contact-hero" title="Contact Us" />
        </section>
      </main>

      <Footer />
    </>
  );
}
