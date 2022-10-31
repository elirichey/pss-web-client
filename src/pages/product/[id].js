import Head from "next/head";
import Header from "../../layout/Header/Header";
import Footer from "../../layout/Footer/Footer";
import Product from "../../layout/Product/Product";
import ProductsHttp from "../../utilities/http/products";

export default function ProductID(props) {
  const { product } = props;

  return (
    <>
      <Head>
        <title>PSS | Product Title | Emergency Vehicle Equipment</title>
        <meta
          name="description"
          content="PSS | Emergency Vehicle Equipment | Sales, Service, & Installations"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header alt={false} />

        <section id="product" className="body">
          <Product product={product} />
        </section>
      </main>

      <Footer />
    </>
  );
}

export const getStaticPaths = async () => {
  return {
    paths: [], //indicates that no page needs be created at build time
    fallback: "blocking", //indicates the type of fallback
  };
};

export async function getStaticProps({ params }) {
  const productId = params.id;

  try {
    const res = await ProductsHttp.getProductById(productId);
    if (res.status && res.status === 200) {
      return { props: { product: res.data } };
    } else return { props: { error: "Error" } };
  } catch (e) {
    return { props: { error: "Error" } };
  }
}
