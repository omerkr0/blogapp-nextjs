import Head from "next/head";
import Layout from "../components/layout";
import background from "../public/background.png";
import Image from "next/image";
function Anasayfa() {
  return (
  <Layout>
    <Head>
      <title>Anasayfa</title>
    </Head>
    <div>
      <Image src={background} width={1920} height={1080} />
    </div>
  </Layout>
  );
}

export default Anasayfa;
