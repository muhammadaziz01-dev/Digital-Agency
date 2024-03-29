import "./style.scss";
import Imgs from "@img/Rectangle.png";

function fourthSection() {
    return <>
    <section id="fourth-section">
        <div className="container">
            <div className="fourth-section-wrap">
                <div className="fourth-section-wrap-top">
                    <p>Neler <span>Yapıyoruz?</span></p>
                    <h1>Sizin için neler yapıyoruz?</h1>
                    <p>360° dijital marka danışmanlığı, web tasarım ve reklam ajansıdır. İşletmelerin ihtiyaçlarına uygun web tasarım ve web yazılım hizmetleri sunmaktayız.</p>
                </div>
                <div className="fourth-section-wrap-bottom">
                    <img src={Imgs} alt="imgs" />
                    <div className="fourth-section-wrap-bottom-text">
                        <h2>Sizin için neler yapabiliriz beraber bakalım.</h2>
                        <p>Tüm platformlarda sunduğumuz, web tasarım hizmetimiz ile ilgili bilgiler edinelim.</p>
                        <ul>
                            <li>
                                <h3>Web Tasarım</h3>
                                <p>Var olan veya yeni kurulan işletmenizin, modern bir kurumsal kimliğe sahip olması için web sitesi.</p>
                            </li>
                            <li>
                                <h3>Dijital Pazarlama</h3>
                                <p>Web sitenizin veya işletmenizin, daha popüler hale gelmesi için çeşitli hizmetler sunuyoruz.</p>
                            </li>
                            <li>
                                <h3>Prodüksiyon</h3>
                                <p>İşletmenizin tanıtımının daha güzel hale gelmesi için, fotoğraf çekimi ve prodüksiyon yapıyoruz.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
}

export default fourthSection;