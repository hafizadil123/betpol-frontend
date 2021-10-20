import React from 'react'
import logoImage from '../../assets/img/logo.png';
const Footer = () => {
    return ( 
    <>
        <footer className="fixed-bottom">
  <nav className="navbar navbar-expand-lg navbar-light nav-bottom">
    <div className="container">
      <div className="row w-100">
        <div className="col-md-5">
          <div className="brand">
            <a className="navbar-brand" href="#"><img src={logoImage} width="15%" alt /></a>
            <div className="container-fluid">
              <div className="row bottom-links">
                <div className="col-md-4">
                  <a href>Terminos y Condiciones</a>
                </div>
                <div className="col-md-4">
                  <a href>Politica de Privacidad</a>
                </div>
                <div className="col-md-4">
                  <a href>Soporte</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-7">
          <div className="collapse navbar-collapse mt-3" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              <a className="nav-link bot-nav-link" aria-current="page" href="#">Login</a>
              <a className="nav-link bot-nav-link" href="#">Sign up</a>
              <a className="nav-link bot-nav-link" href="#">Mi Cuenta</a>
              <a className="nav-link bot-nav-link" href="#">Siguenos</a>
              <a className="p-2" href="#"><i className="bi bi-facebook" /></a>
              <a className="p-2" href="#"><i className="bi bi-instagram" /></a>
              <a className="p-2" href="#"><i className="bi bi-twitter" /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</footer>

    </> );
}
 
export default Footer;