const Footer = () => {
  return (
    <footer className="site-footer center-content-mobile">
      <div className="container">
        <div className="site-footer-inner">
          <div className="footer-top space-between text-xxs">
            <div className="footer-social"></div>
          </div>
          <div className="footer-bottom space-between text-xxs">
            <nav className="footer-nav">
              <ul className="list-reset">
                <li>
                  <a href="#">Contact</a>
                </li>
                <li>
                  <a href="#">About us</a>
                </li>
                <li>
                  <a href="#">FAQ's</a>
                </li>
                <li>
                  <a href="#">Support</a>
                </li>
              </ul>
            </nav>
            <div className="footer-copyright">
              © Tomatik, all rights reserved
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
