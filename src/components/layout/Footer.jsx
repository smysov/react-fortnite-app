const Footer = () => (
  <footer className='footer'>
    <div className='container'>
      <div className='footer__inner'>
        <p className='footer__description'>
          <span className='footer__year'>
            Copyright &copy; {new Date().getFullYear()}
          </span>
          <span className='footer__author'>smysov</span>
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
