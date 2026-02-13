import Head from "next/head";
import Header from "../../layout/Header/Header";
import Footer from "../../layout/Footer/Footer";
import Hero from "../../layout/Hero/Hero";
import CallToAction from "../../components/CallToAction/CallToAction";
import CategoryItems from "../../layout/Category/CategoryItems";
import ProductsHttp from "../../utilities/http/products";

export default function Speed({ products }) {
  return (
    <>
      <Head>
        <title>
          PSS | Emergency & Fleet Vehicle Equipment | Speed Measurement
        </title>
        <meta
          name="description"
          content="PSS | Emergency & Fleet Vehicle Equipment | Speed Measurement"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header alt={false} />

        <section className="body body-column">
          <Hero
            id="category-hero"
            title="RADAR & SPEED MEASUREMENT"
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
  const res = await ProductsHttp.getProducts('speed');
  const products = res?.data ?? [];
  return { props: { products } };
}