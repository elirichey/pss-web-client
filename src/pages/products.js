import Head from "next/head";
import Header from "../layout/Header/Header";
import Footer from "../layout/Footer/Footer";
import Products from "../layout/Products/Products";

export default function ProductsPage() {
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

        <section id="procucts" className="body">
          <Products />
        </section>
      </main>

      <Footer />
    </>
  );
}
