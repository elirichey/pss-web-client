import Head from "next/head";
import Header from "../../layout/Header/Header";
import Footer from "../../layout/Footer/Footer";
import Hero from "../../layout/Hero/Hero";
import CallToAction from "../../components/CallToAction/CallToAction";
import ConsolesPage from "../../layout/Category/consoles";
import ProductsHttp from "../../utilities/http/products";

export default function Consoles({ products }) {
  return (
    <>
      <Head>
        <title>
          PSS | Emergency & Fleet Vehicle Equipment | Equipment Consoles
        </title>
        <meta
          name="description"
          content="PSS | Emergency & Fleet Vehicle Equipment | Equipment Consoles"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header alt={false} />

        <section className="body body-column">
          <Hero 
            id="category-hero"
            title="EQUIPMENT CONSOLES"
          />
          
          <ConsolesPage products={products} />

          <CallToAction />
        </section>
      </main>

      <Footer />
    </>
  );
}

export async function getServerSideProps() {
  const res = await ProductsHttp.getProducts('consoles');
  const products = res?.data ?? [];
  return { props: { products } };
} 