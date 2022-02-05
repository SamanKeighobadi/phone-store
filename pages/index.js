import Head from "next/head";
import Slider from "../components/hero/Slider";
import Products from "./products";

export default function Home() {
  return (
    <div className={""}>
      <Head>
        <title>Phone Store</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Slider />
      <Products />
    </div>
  );
}
