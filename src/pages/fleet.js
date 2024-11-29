import Head from "next/head";
import Header from "../layout/Header/Header";
import Footer from "../layout/Footer/Footer";
import Hero from "../layout/Hero/Hero";
import ContactPage from "../layout/Contact/Contact";

export default function Fleet() {
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
        <Header alt={true} />

        <section id="fleet" className="body body-column">
          <Hero id="fleet-hero" title="Fleet" />

          {/*<ContactPage />*/}
        </section>
      </main>

      <Footer />
    </>
  );
}
