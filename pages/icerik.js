import Layout from "../components/layout"
import Head from "next/head";
import Link from "next/link"

function İcerik() {
return <Layout>
<Head>
  <title>Yazılar</title>
</Head>

<div>
<div className="main-wrapper ">

<section className="section blog-wrap bg-gray">
<div className="container">
  <div className="row">
    <div className="col-lg-6 col-md-6 mb-5">
      <div className="blog-item">
        <img src="1.jpg" alt className="img-fluid rounded" />
        <div className="blog-item-content bg-white p-5">
          <div className="blog-item-meta bg-gray py-1 px-2">
            <span className="text-muted text-capitalize mr-3"><i className="ti-pencil-alt mr-2" />Yaratıcılık</span>
            <span className="text-muted text-capitalize mr-3"><i className="ti-comment mr-2" />5 Yorum</span>
            <span className="text-black text-capitalize mr-3"><i className="ti-time mr-1" /> 28 Mart</span>
          </div> 
          <h3 className="mt-3 mb-3"><a href="blog-single.html">Tipografi nedir?</a></h3>
          <p className="mb-4">Non illo quas blanditiis repellendus laboriosam minima animi. Consectetur accusantium pariatur repudiandae!</p>
          <Link href="/icerik_detay"><a className="butn btn-small btn-main btn-round-full">DAHA FAZLA BİLGİ EDİNİN</a></Link>
        </div>
      </div>
    </div>
    <div className="col-lg-6 col-md-6 mb-5">
      <div className="blog-item">
        <img src="2.jpg" alt className="img-fluid rounded" />
        <div className="blog-item-content bg-white p-5">
          <div className="blog-item-meta bg-gray py-1 px-2">
            <span className="text-muted text-capitalize mr-3"><i className="ti-pencil-alt mr-2" />Tasarım</span>
            <span className="text-muted text-capitalize mr-3"><i className="ti-comment mr-2" />5 Yorum</span>
            <span className="text-black text-capitalize mr-3"><i className="ti-time mr-1" /> 28 Mart</span>
          </div>   
          <h3 className="mt-3 mb-3"><a href="blog-single.html">Tasarım kuralları</a></h3>
          <p className="mb-4">Non illo quas blanditiis repellendus laboriosam minima animi. Consectetur accusantium pariatur repudiandae!</p>
          <Link href="/icerik_detay"><a className="butn btn-small btn-main btn-round-full">DAHA FAZLA BİLGİ EDİNİN</a></Link>
        </div>
      </div>
    </div>
    <div className="col-lg-6 col-md-6 mb-5">
      <div className="blog-item">
        <img src="3.jpg" alt className="img-fluid rounded" />
        <div className="blog-item-content bg-white p-5">
          <div className="blog-item-meta bg-gray py-1 px-2">
            <span className="text-muted text-capitalize mr-3"><i className="ti-pencil-alt mr-2" />Toplum</span>
            <span className="text-muted text-capitalize mr-3"><i className="ti-comment mr-2" />5 Yorum</span>
            <span className="text-black text-capitalize mr-3"><i className="ti-time mr-1" /> 28 Mart</span>
          </div>  
          <h3 className="mt-3 mb-3"><a href="blog-single.html">Daha fazla etki yaratmak için Pazarlama Stratejisi</a></h3>
          <p className="mb-4">Non illo quas blanditiis repellendus laboriosam minima animi. Consectetur accusantium pariatur repudiandae!</p>
          <Link href="/icerik_detay"><a className="butn btn-small btn-main btn-round-full">DAHA FAZLA BİLGİ EDİNİN</a></Link>
        </div>
      </div>
    </div>
    <div className="col-lg-6 col-md-6 mb-5">
      <div className="blog-item">
        <img src="4.jpg" alt className="img-fluid rounded" />
        <div className="blog-item-content bg-white p-5">
          <div className="blog-item-meta bg-gray py-1 px-2">
            <span className="text-muted text-capitalize mr-3"><i className="ti-pencil-alt mr-2" />Pazarlama</span>
            <span className="text-muted text-capitalize mr-3"><i className="ti-comment mr-2" />5 Yorum</span>
            <span className="text-black text-capitalize mr-3"><i className="ti-time mr-1" /> 28 Mart</span>
          </div>  
          <h3 className="mt-3 mb-3"><a href="blog-single.html">Daha fazla etki yaratmak için Pazarlama Stratejisi</a></h3>
          <p className="mb-4">Non illo quas blanditiis repellendus laboriosam minima animi. Consectetur accusantium pariatur repudiandae!</p>
          <Link href="/icerik_detay"><a className="butn btn-small btn-main btn-round-full">DAHA FAZLA BİLGİ EDİNİN </a></Link>
        </div>
      </div>
    </div>
  </div>
</div>
</section>
</div>
</div>

</Layout>
}

export default İcerik