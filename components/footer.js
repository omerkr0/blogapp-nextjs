function Footer() {
  return (
      <>
      <div className="footer-dark foot">
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-md-3 item">
                <h3>İletişim</h3>
                <ul>
                  <li>
                    <a href="#">+90 45456 465465 4</a>
                  </li>
                  <li>
                    <a href="#">omerkaraman@gmail.com</a>
                  </li>
                </ul>
              </div>
              <div className="col-sm-6 col-md-3 item">
                <h3>Menü</h3>
                <ul>
                  <li>
                    <a href="#">Anasayfa</a>
                  </li>
                  <li>
                    <a href="#">Yazılar</a>
                  </li>
                  <li>
                    <a href="#">Yazı Ekle</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-6 item text">
                <h3>Hakkımızda</h3>
                <p>
                  Praesent sed lobortis mi. Suspendisse vel placerat ligula.
                  Vivamus ac sem lacus. Ut vehicula rhoncus elementum. Etiam
                  quis tristique lectus. Aliquam in arcu eget velit pulvinar
                  dictum vel in justo.
                </p>
              </div>
              <div className="col item social">
                <a href="#">
                  <i className="icon ion-social-facebook" />
                </a>
                <a href="#">
                  <i className="icon ion-social-twitter" />
                </a>
                <a href="#">
                  <i className="icon ion-social-snapchat" />
                </a>
                <a href="#">
                  <i className="icon ion-social-instagram" />
                </a>
              </div>
            </div>
            <p className="copyright">© 2022 Ömer Karaman</p>
          </div>
        </footer>
      </div>
    </>
  
  );
}

export default Footer;
