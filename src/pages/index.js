import Head from "next/head";
import Header from "../layout/Header/Header";
import Footer from "../layout/Footer/Footer";
// import ListSuppliers from "../components/ListSuppliers/ListSuppliers";

export default function Home() {
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

        <section id="home" className="body">
          {/* <ListSuppliers /> */}
        </section>
      </main>

      <Footer />
    </>
  );
}
