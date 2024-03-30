import "./stele.scss";
import CaruselImg1 from "@img/carusel-img1.png";
import CaruselImg2 from "@img/carusel-img2.png";
import CaruselImg3 from "@img/carusel-img3.png";
import CaruselImg4 from "@img/carusel-img4.png";


function caruselSection() {
    return <>
        <section id="carusel-section">
            <div className="container carusel-section">
                <div className="carusel-section-titil">
                    <p>Neler <span>Yapıyoruz?</span></p>
                    <h1>Öğreniyoruz, sizinle paylaşıyoruz.</h1>
                    <p>Alanında uzman yazar arkadaşlarımızın, bilgi paylaşımı yaptıkları yazıları inceleyelim.</p>
                </div>
                <div className="carusel-section-buttons">
                    <button className="activ">Hepsini Gör</button>
                    <button>Web Tasarım</button>
                    <button>Kurumsal Kimlik Tasarımı</button>
                    <button>SEO</button>
                    <button>Dijital Pazarlama</button>
                </div>
                <div className="carusel-section-carusel">
                    <div className="carusel-section-carusel-wrap">
                        <div className="carusel-section-carusel-wrap-card">
                            <div className="carusel-section-carusel-wrap-card-img">
                                <img src={CaruselImg1} alt="carusel-img-1" />
                            </div>
                            <div className="carusel-section-carusel-wrap-card-text">
                                <p>Dijital Pazarlama</p>
                                <h3>Dijital PR Nedir? Dijital PR Neden Gereklidir?</h3>
                                <p>Sosyal CRM, işletmelerin müşteri ilişkileri yönetimi (CRM) stratejilerini sosyal...</p>
                            </div>
                            <div className="carusel-section-carusel-wrap-card-btn">
                                <button>
                                    Devamını Oku    
                                    <i className="bi bi-chevron-double-right"></i>
                                </button>
                            </div>
                        </div>
                        <div className="carusel-section-carusel-wrap-card">
                            <div className="carusel-section-carusel-wrap-card-img">
                                <img src={CaruselImg2} alt="carusel-img-1" />
                            </div>
                            <div className="carusel-section-carusel-wrap-card-text">
                                <p>Dijital Pazarlama</p>
                                <h3>Dijital PR Nedir? Dijital PR Neden Gereklidir?</h3>
                                <p>Sosyal CRM, işletmelerin müşteri ilişkileri yönetimi (CRM) stratejilerini sosyal...</p>
                            </div>
                            <div className="carusel-section-carusel-wrap-card-btn">
                                <button>
                                    Devamını Oku    
                                    <i className="bi bi-chevron-double-right"></i>
                                </button>
                            </div>
                        </div>
                        <div className="carusel-section-carusel-wrap-card">
                            <div className="carusel-section-carusel-wrap-card-img">
                                <img src={CaruselImg3} alt="carusel-img-1" />
                            </div>
                            <div className="carusel-section-carusel-wrap-card-text">
                                <p>Dijital Pazarlama</p>
                                <h3>Dijital PR Nedir? Dijital PR Neden Gereklidir?</h3>
                                <p>Sosyal CRM, işletmelerin müşteri ilişkileri yönetimi (CRM) stratejilerini sosyal...</p>
                            </div>
                            <div className="carusel-section-carusel-wrap-card-btn">
                                <button>
                                    Devamını Oku    
                                    <i className="bi bi-chevron-double-right"></i>
                                </button>
                            </div>
                        </div>
                        <div className="carusel-section-carusel-wrap-card">
                            <div className="carusel-section-carusel-wrap-card-img">
                                <img src={CaruselImg4} alt="carusel-img-1" />
                            </div>
                            <div className="carusel-section-carusel-wrap-card-text">
                                <p>Dijital Pazarlama</p>
                                <h3>Dijital PR Nedir? Dijital PR Neden Gereklidir?</h3>
                                <p>Sosyal CRM, işletmelerin müşteri ilişkileri yönetimi (CRM) stratejilerini sosyal...</p>
                            </div>
                            <div className="carusel-section-carusel-wrap-card-btn">
                                <button>
                                    Devamını Oku    
                                    <i className="bi bi-chevron-double-right"></i>
                                </button>
                            </div>
                        </div>
                        <div className="carusel-section-carusel-wrap-card">
                            <div className="carusel-section-carusel-wrap-card-img">
                                <img src={CaruselImg1} alt="carusel-img-1" />
                            </div>
                            <div className="carusel-section-carusel-wrap-card-text">
                                <p>Dijital Pazarlama</p>
                                <h3>Dijital PR Nedir? Dijital PR Neden Gereklidir?</h3>
                                <p>Sosyal CRM, işletmelerin müşteri ilişkileri yönetimi (CRM) stratejilerini sosyal...</p>
                            </div>
                            <div className="carusel-section-carusel-wrap-card-btn">
                                <button>
                                    Devamını Oku    
                                    <i className="bi bi-chevron-double-right"></i>
                                </button>
                            </div>
                        </div>
                        <div className="carusel-section-carusel-wrap-card">
                            <div className="carusel-section-carusel-wrap-card-img">
                                <img src={CaruselImg2} alt="carusel-img-1" />
                            </div>
                            <div className="carusel-section-carusel-wrap-card-text">
                                <p>Dijital Pazarlama</p>
                                <h3>Dijital PR Nedir? Dijital PR Neden Gereklidir?</h3>
                                <p>Sosyal CRM, işletmelerin müşteri ilişkileri yönetimi (CRM) stratejilerini sosyal...</p>
                            </div>
                            <div className="carusel-section-carusel-wrap-card-btn">
                                <button>
                                    Devamını Oku    
                                    <i className="bi bi-chevron-double-right"></i>
                                </button>
                            </div>
                        </div>
                        <div className="carusel-section-carusel-wrap-card">
                            <div className="carusel-section-carusel-wrap-card-img">
                                <img src={CaruselImg3} alt="carusel-img-1" />
                            </div>
                            <div className="carusel-section-carusel-wrap-card-text">
                                <p>Dijital Pazarlama</p>
                                <h3>Dijital PR Nedir? Dijital PR Neden Gereklidir?</h3>
                                <p>Sosyal CRM, işletmelerin müşteri ilişkileri yönetimi (CRM) stratejilerini sosyal...</p>
                            </div>
                            <div className="carusel-section-carusel-wrap-card-btn">
                                <button>
                                    Devamını Oku    
                                    <i className="bi bi-chevron-double-right"></i>
                                </button>
                            </div>
                        </div>
                        <div className="carusel-section-carusel-wrap-card">
                            <div className="carusel-section-carusel-wrap-card-img">
                                <img src={CaruselImg4} alt="carusel-img-1" />
                            </div>
                            <div className="carusel-section-carusel-wrap-card-text">
                                <p>Dijital Pazarlama</p>
                                <h3>Dijital PR Nedir? Dijital PR Neden Gereklidir?</h3>
                                <p>Sosyal CRM, işletmelerin müşteri ilişkileri yönetimi (CRM) stratejilerini sosyal...</p>
                            </div>
                            <div className="carusel-section-carusel-wrap-card-btn">
                                <button>
                                    Devamını Oku    
                                    <i className="bi bi-chevron-double-right"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <button className="caruselbtn"><i className="bi bi-chevron-left"></i></button>
                    <button className="caruselbtn"><i className="bi bi-chevron-right"></i></button>
                </div>
            </div>
        </section>
    </>
}

export default caruselSection;