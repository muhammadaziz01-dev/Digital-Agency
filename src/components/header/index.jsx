import "./style.scss"

function header() {
    return <>
     <header>
        <div className="container">
            <nav className="nav">
               <div className="nav--left">
                <span></span>
                <a href="#">Digital <strong>Agency</strong></a>
               </div>
               <ul className="nav--list">
                <li><a href="#">Ana Sayfa</a></li>
                <li><a href="#">Kurumsal</a></li>
                <li><a href="#">Neler Yapıyoruz?</a></li>
                <li><a href="#">Blog</a></li>
               </ul>
               <div className="nav--right">
                <button>EN</button>
                <button>Müşteri Girişi</button>
                <button>
                    <i className="bi bi-list"></i>
                </button>
               </div>
            </nav>
        </div>
     </header>
    </>
}

export default header;