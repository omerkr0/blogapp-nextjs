import Layout from "../components/layout";
import Head from "next/head";
import Link from "next/link";

function Giris() {
return (
<Layout>
<Head>
  <title>Giriş Yap</title>
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
      <h1 className="fs-4 card-title fw-bold mb-4">Giriş Yap</h1>
      <form method="POST" className="needs-validation" noValidate autoComplete="off">
        <div className="mb-3">
          <label className="mb-2 text-muted" htmlFor="email">E-Mail</label>
          <input id="email" type="email" className="form-control" name="email" required autofocus />
        </div>
        <div className="mb-3">
          <div className="mb-2 w-100">
            <label className="text-muted" htmlFor="password">Şifre</label>
            <Link href="/sifre_unutma"><a className="float-end">
              Şifremi Unuttum
            </a></Link>
          </div>
          <input id="password" type="password" className="form-control" name="password" required />
        </div>
        <div className="d-flex align-items-center">
          <div className="form-check">
            <input type="checkbox" name="remember" id="remember" className="form-check-input" />
            <label htmlFor="remember" className="form-check-label">Beni Hatırla</label>
          </div>
          <button type="submit" className="btn ms-auto">
            Giriş Yap
          </button>
        </div>
      </form>
    </div>
    <div className="card-footer py-3 border-0">
      <div className="text-center">
        Hesabınız yok mu? <Link href="/kayit"><a className="text-dark">Kaydol</a></Link>
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

export default Giris;
