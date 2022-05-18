import Layout from "../components/layout";
import Head from "next/head";
import Link from "next/link";

function SifreUnutma() {
return (
  <Layout>
    <Head>
      <title>Şifremi Unuttum</title>
    </Head>
    <div>
  <section className="h-100">
    <div className="container h-100">
    <div className="row justify-content-sm-center h-100">
      <div className="col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-9">
        <div className="text-center my-5">
          <img src="logo1.png" alt="logo" width={200} />
        </div>
        <div className="card shadow-lg">
          <div className="card-body p-5">
            <h1 className="fs-4 card-title fw-bold mb-4">Şifrenizi mi unuttunuz?</h1>
            <form method="POST" className="needs-validation" noValidate autoComplete="off">
              <div className="mb-3">
                <label className="mb-2 text-muted" htmlFor="email">E-Mail</label>
                <input id="email" type="email" className="form-control" name="email" required autofocus />
              </div>
              <div className="d-flex align-items-center">
                <button type="submit" className="btn ms-auto">
                  Link Gönder
                </button>
              </div>
            </form>
          </div>
          <div className="card-footer py-3 border-0">
            <div className="text-center">
              Şifrenizi hatırlıyor musunuz? <Link href="/giris"><a className="text-dark">Giriş Yap</a></Link>
            </div>
          </div>
        </div>
        <div className="text-center mt-5 text-muted">
        </div>
      </div>
    </div>
  </div>
  </section>
    </div>
  </Layout>
);
}

export default SifreUnutma;
