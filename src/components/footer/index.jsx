import "./style.scss";
function footer() {
    return <>
        <footer>
            <div className="container footer-wrap">

                <ul className="footer--list">
                    <li><a href="#">Ana Sayfa</a></li>
                    <li><a href="#">Kurumsal</a></li>
                    <li><a href="#">Neler Yapıyoruz?</a></li>
                    <li><a href="#">Blog</a></li>
                </ul>
                <p>© {new Date().getFullYear()} Can Çevik. All rights reserved</p>
            </div>
        </footer>
    </>
}

export default footer;