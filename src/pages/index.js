import Head from "next/head";

export default function Home() {
  return (
    <div>
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
        <div className="body">
          <div className="container mx-auto">Body</div>
        </div>
      </main>

      <footer></footer>
    </div>
  );
}
