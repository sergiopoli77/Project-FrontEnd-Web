const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer-inner">
          {/* Navigation and Copyright */}
          <div className="footer-bottom">
            <nav className="footer-nav">
              <ul>
                <li>
                  <a href="#">Tentang Kami</a>
                </li>
                <li>
                  <a href="#">Gallery</a>
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
              © 2024 Tomatik, Semua hak dilindungi.
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Footer Base */
        .site-footer {
          background-color: #2c3e50; /* Abu-abu gelap */
          padding: 40px 0;
          color: #fdf5e6; /* Krem lembut */
          font-family: "Arial", sans-serif;
        }

        .site-footer-inner {
          text-align: center;
        }

        /* Navigation */
        .footer-nav ul {
          list-style: none;
          display: flex;
          justify-content: center;
          gap: 25px;
          padding: 0;
          margin: 0;
        }

        .footer-nav a {
          color: #fdf5e6; /* Krem lembut */
          text-decoration: none;
          font-size: 1em;
          font-weight: 500;
          transition: color 0.3s ease;
        }

        .footer-nav a:hover {
          color: #27ae60; /* Hijau segar */
        }

        /* Footer Bottom */
        .footer-bottom {
          border-top: 1px solid #34495e; /* Garis abu-abu medium */
          padding-top: 20px;
          margin-top: 30px; /* Menurunkan navbar dengan margin-top */
        }

        .footer-copyright {
          font-size: 0.9em;
          color: #bdc3c7; /* Abu-abu terang */
        }
      `}</style>
    </footer>
  );
};

export default Footer;
