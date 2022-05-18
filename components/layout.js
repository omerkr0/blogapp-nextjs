import Head from "next/head";
import Navigation from "../components/navigation"
import Footer from "../components/footer"
function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Blogcunuz</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css" />
     </Head> 
      <Navigation />
      <main>{children}</main>
      <Footer />
      </>
    
    
  );
}

export default Layout;
