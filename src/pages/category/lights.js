import Head from "next/head";
import Header from "../../layout/Header/Header";
import Footer from "../../layout/Footer/Footer";
import Hero from "../../layout/Hero/Hero";
import CallToAction from "../../components/CallToAction/CallToAction";
import CategoryItems from "../../layout/Category/CategoryItems";
import ProductsHttp from "../../utilities/http/products";

export default function Lights({ products }) {
  return (
    <>
      <Head>
        <title>
          PSS | Emergency & Fleet Vehicle Equipment | Emergency Warning Lights
        </title>
        <meta
          name="description"
          content="PSS | Emergency & Fleet Vehicle Equipment | Emergency Warning Lights"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header alt={false} />

        <section className="body body-column">
          <Hero
            id="category-hero"
            title="EMERGENCY WARNING LIGHTS"
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
  const res = await ProductsHttp.getProducts('lights');
  const products = res?.data ?? [];
  return { props: { products } };
}

