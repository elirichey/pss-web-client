
import Head from "next/head";
import Header from "../layout/Header/Header";
import Footer from "../layout/Footer/Footer";
import Hero from "../layout/Hero/Hero";
import CallToAction from "../components/CallToAction/CallToAction";

export default function About() {
  return (
    <>
      <Head>
        <title>
          PSS | Emergency & Fleet Vehicle Equipment | About Us
        </title>
        <meta
          name="description"
          content="PSS | Emergency & Fleet Vehicle Equipment | About Us"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header alt={false} />

        <section className="body body-column">
          <Hero
            id="category-hero"
            title="ABOUT US"
          />
          
          <div className="container row">
            <div className="col-12">
              <h2>About Us</h2>
            </div>
          </div>

          <CallToAction />
        </section>
      </main>

      <Footer />
    </>
  );
}
