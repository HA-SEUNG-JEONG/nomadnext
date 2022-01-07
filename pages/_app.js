import Layout from "../components/Layout";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      {/* children props */}
      <Component {...pageProps} />
      <footer></footer>
    </Layout>
  );
}
