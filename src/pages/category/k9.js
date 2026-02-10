
import Head from "next/head";
import Header from "../../layout/Header/Header";
import Footer from "../../layout/Footer/Footer";
import Hero from "../../layout/Hero/Hero";
import CallToAction from "../../components/CallToAction/CallToAction";
import K9Page from "../../layout/Category/k9";
import ProductsHttp from "../../utilities/http/products";

export default function K9({ products }) {
  return (
    <>
      <Head>
        <title>
          PSS | Emergency & Fleet Vehicle Equipment | K9 Transport Inserts & Accessories
        </title>
        <meta
          name="description"
          content="PSS | Emergency & Fleet Vehicle Equipment | K9 Transport Inserts & Accessories"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header alt={false} />

        <section className="body body-column">
          <Hero
            id="category-hero"
            title="K9 TRANSPORT INSERTS & ACCESSORIES"
          />
          
          <K9Page products={products} />

          <CallToAction />
        </section>
      </main>

      <Footer />
    </>
  );
}

export async function getServerSideProps() {
  const res = await ProductsHttp.getProducts('canine');
  const products = res?.data ?? [];
  return { props: { products } };
}