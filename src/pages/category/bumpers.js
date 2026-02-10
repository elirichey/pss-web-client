import Head from "next/head";
import Header from "../../layout/Header/Header";
import Footer from "../../layout/Footer/Footer";
import Hero from "../../layout/Hero/Hero";
import CallToAction from "../../components/CallToAction/CallToAction";
import BumpersPage from "../../layout/Category/bumpers";
import ProductsHttp from "../../utilities/http/products";

export default function Bumpers({ products }) {
  return (
    <>
      <Head>
        <title>
          PSS | Emergency & Fleet Vehicle Equipment | Push Bumpers
        </title>
        <meta
          name="description"
          content="PSS | Emergency & Fleet Vehicle Equipment | Push Bumpers"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header alt={false} />

        <section className="body body-column">
          <Hero
            id="category-hero"
            title="PUSH BUMPERS"
          />
          
          <BumpersPage products={products} />

          <CallToAction />
        </section>
      </main>

      <Footer />
    </>
  );
}

export async function getServerSideProps() {
  const res = await ProductsHttp.getProducts('bumpers');
  const products = res?.data ?? [];
  return { props: { products } };
}

