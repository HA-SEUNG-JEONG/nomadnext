import Head from "next/head";

export default function Seo({ title }) {
  return (
    // html의 head 안에 보여짐
    <Head>
      <title>{title} | Next Movies</title>
    </Head>
  );
}
