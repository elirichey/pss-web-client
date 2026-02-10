import Head from "next/head";
import Header from "../layout/Header/Header";
import Footer from "../layout/Footer/Footer";
import Hero from "../layout/Hero/Hero";
import ListSuppliers from "../components/ListSuppliers/ListSuppliers";
import OurWork from "../components/OurWork/OurWork";
import CallToAction from "../components/CallToAction/CallToAction";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          PSS | Emergency & Fleet Vehicle Equipment | Sales, Service, & Installations
        </title>
        <meta
          name="description"
          content="PSS | Emergency & Fleet Vehicle Equipment | Sales, Service, & Installations"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header alt={false} />

        <section className="body body-column">
          <Hero
            id="home-hero"
            title="EMERGENCY VEHICLE EQUIPMENT SALES, SERVICE & INSTALLATIONS"
          />

          <div id="home-intro">
            <div className="container-md py-30 column">
              <h2>We Do It All</h2>
              <p className="intro-p">
                PSS is your one stop shop for your fleet and emergency serivce
                vehicle needs. Whether is it a repair part or a turn-key
                vehicle, we have what you need. We offer full-service
                installation services for both interior and exterior parts and
                accessories. For those who handle their own installations, we
                can provide you with all of the equipment you need to do it
                yourself too. We have been servicing fleet and emergency service
                vehicles of all shapes and sizes for the past 11 years in
                central Indiana and have continually delivered the highest
                quality results for each and every project.
              </p>
              <p className="mb-30">
                PSS actively solicits input from the end user to guarantee that
                our customers have the highest level of satisfaction with any
                given project.
              </p>

              {/*<Link href="/products" legacyBehavior>
                <a className="shop-btn">SHOP NOW</a>
              </Link>*/}
            </div>
          </div>

          <div id="home-suppliers">
            <ListSuppliers showTitle={true} />
          </div>

          <div id="home-our-work">
            <OurWork />
          </div>

          <CallToAction />
        </section>
      </main>

      <Footer />
    </>
  );
}
