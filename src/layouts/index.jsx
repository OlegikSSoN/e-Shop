import Header from "./header";
import Head from "next/head";
import Footer from "./footer";

const Layouts = ({ children, ...props }) => {
  return (
    <>
      <Head>
        <title>SHOP</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main style={{ width: "80%", margin: "0 auto"}} {...props}>{children}
      </main>
      <Footer />
    </>
  );
};

export default Layouts;
