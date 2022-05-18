import Layout from "../components/layout";
import Head from "next/head";

function Kayit() {
return (
<Layout>
  <Head>
    <title>Gönderi Ekle</title>
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
        <h1 className="fs-4 card-title fw-bold mb-4">Gönderi Ekle</h1>
        <form method="POST" className="needs-validation" noValidate autoComplete="off">
          <div className="mb-3">
            <label className="mb-2 text-muted" htmlFor="name">Başlık</label>
            <input id="title" type="text" className="form-control" name="title" required autofocus />
          </div>
          <div className="mb-3">
            <label className="mb-2 text-muted" htmlFor="text">Yazı</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows={6} />
          </div>
          <select class="form-select" aria-label="Default select example">
            <option selected>Kategori Seç</option>
            <option value="1">Yazılım</option>
            <option value="2">Tasarım</option>
            <option value="3">Pazarlama</option>
          </select>
          <div className="text-center mt-3 text-muted">
          </div>
          <div className="mb-3">
            <label htmlFor="formFileSm" className="form-label text-muted">Resim Ekle</label>
            <input className="form-control form-control-sm" id="formFileSm" type="file" />
          </div>
          <div className="align-items-center d-flex">
            <button type="submit" className="btn ms-auto">
              Gönderi Paylaş
            </button>
          </div>
        </form>
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
