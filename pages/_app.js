import Defaultlayout from "../components/Layouts/DefaultLayout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Defaultlayout>
      <Component {...pageProps} />
    </Defaultlayout>
  );
}

export default MyApp;
