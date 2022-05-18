import Layout from "../components/layout";
import Head from "next/head";
import Link from "next/link";

function Kayit() {
  return (
    <Layout>
      <Head>
        <title>Kaydol</title>
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
          <h1 className="fs-4 card-title fw-bold mb-4">Kaydol</h1>
          <form method="POST" className="needs-validation" noValidate autoComplete="off">
            <div className="mb-3">
              <label className="mb-2 text-muted" htmlFor="name">İsim</label>
              <input id="name" type="text" className="form-control" name="name" required autofocus />
            </div>
            <div className="mb-3">
              <label className="mb-2 text-muted" htmlFor="name">Soyisim</label>
              <input id="name" type="text" className="form-control" name="name" required autofocus />
            </div>
            <div className="mb-3">
              <label className="mb-2 text-muted" htmlFor="email">E-Mail</label>
              <input id="email" type="email" className="form-control" name="email" required />
            </div>
            <div className="mb-3">
              <label className="mb-2 text-muted" htmlFor="password">Şifre</label>
              <input id="password" type="password" className="form-control" name="password" required />
            </div>
            <div className="mb-3">
              <label className="mb-2 text-muted" htmlFor="password">Şifrenizi tekrar giriniz</label>
              <input id="password" type="password" className="form-control" name="password" required />
            </div>
            <p className="form-text text-muted mb-3">
              Kaydolarak şartlar ve koşullarımızı kabul etmiş olursunuz.
            </p>
            <div className="form-check">
              <input type="checkbox" name="remember" id="remember" className="form-check-input" />
              <label htmlFor="remember" className="form-check-label">Şartları ve koşulları kabul ediyorum.</label>
            </div>
            <div className="align-items-center d-flex">
              <button type="submit" className="btn ms-auto">
                Kaydol
              </button>
            </div>
          </form>
        </div>
        <div className="card-footer py-3 border-0">
          <div className="text-center">
            Zaten hesabınız var mı? <Link href="/giris"><a className="text-dark">Giriş Yap</a></Link>
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

export default Kayit;
