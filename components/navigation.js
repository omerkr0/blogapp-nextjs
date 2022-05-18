import Link from "next/link"
function Navigation() {
  return ( 
<>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid ">
        <Link href="/">
          <a><img className='logo' src='logo1.png'></img></a>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link href="/">
                <a className="nav-link active link" aria-current="page">Anasayfa</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/icerik">
                <a className="nav-link link">Yazılar</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/yazi_ekle">
                <a className="nav-link link">Yazı Ekle</a>
              </Link>
            </li>
          </ul>
          <form className="d-flex">
            <Link href="/giris"><button className="btn outline-success mr buton link " type="submit">Giriş Yap</button></Link>
            <Link href="/kayit"><button className="btn outline-success mr buton link" type="submit">Kaydol</button></Link>
          </form>
          <Link href="/profil">
            <a><img src="https://img.icons8.com/ios-glyphs/60/000000/user-male-circle.png" /></a>
          </Link>
        </div>
      </div>
    </nav><script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"/></>
     
);
}

export default Navigation