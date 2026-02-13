import Head from "next/head";
import Header from "../../layout/Header/Header";
import Footer from "../../layout/Footer/Footer";
import Hero from "../../layout/Hero/Hero";
import CallToAction from "../../components/CallToAction/CallToAction";
import CategoryItems from "../../layout/Category/CategoryItems";
import ProductsHttp from "../../utilities/http/products";

export default function PrisonerTransport({ products }) {
  return (
    <>
      <Head>
        <title>
          PSS | Emergency & Fleet Vehicle Equipment | Prisoner Transport
        </title>
        <meta
          name="description"
          content="PSS | Emergency & Fleet Vehicle Equipment | Prisoner Transport"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header alt={false} />

        <section className="body body-column">
          <Hero
            id="category-hero"
            title="PRISONER TRANSPORT"
          />
          
          <CategoryItems products={products} />

          <CallToAction />
        </section>
      </main>

      <Footer />
    </>
  );
}

export async function getServerSideProps() {
  const res = await ProductsHttp.getProducts('prisonerTransport');
  const products = res?.data ?? [];
  return { props: { products } };
}

