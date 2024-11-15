const Header = () => {
  return (
    <header className="site-header reveal-from-bottom">
      <div className="container">
        <div className="site-header-inner">
          <div className="brand">
            <h1 className="m-0">
              <a href="index.html" className="brand-link">
                Tomatik
              </a>
            </h1>
          </div>

          <nav id="header-nav" className="header-nav">
            <div className="header-nav-inner">
              <ul className="list-reset text-xxs header-nav-right">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Manfaat</a>
                </li>
                <li>
                  <a href="#">Merawat</a>
                </li>
                <li>
                  <a href="#">Penyakit</a>
                </li>
                <li>
                  <a href="#">Hama</a>
                </li>
                <li>
                  <a className="button button-signup" href="#">
                    Sign up
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

