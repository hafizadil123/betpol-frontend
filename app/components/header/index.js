import React from 'react'
import logoImage from '../../assets/img/logo.png';
import CombinedShape from '../../assets/img/Combined-Shape.png';
import imgLock from '../../assets/img/lock.png'
import editImage from '../../assets/img/edit-menu.png';
import LogoutImage from '../../assets/img/exit-menu.png';
import history from 'utils/history';
import { Link } from 'react-router-dom';

const Header = () => {
  const isLoggedIn = localStorage.getItem('accessToken');
  const logout = () => {
    localStorage.removeItem('accessToken');
    history.push('/')
  }
    return ( 
    <>
       <nav className="navbar navbar-expand-lg navbar-light nav-1">
  <div className="container">
    <Link className="navbar-brand" to="/"><img src={logoImage} alt /></Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
      <div className="navbar-nav ms-auto">
        {!isLoggedIn && <a className="nav-link px-3" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal">Login</a>}
        {/*modal 1 starts*/}
        <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-heading p-3">
                <button type="button" className="btn-close float-end btn-warning" data-bs-dismiss="modal" aria-label="Close" /> 
                <div className="modal-title text-center mt-3">
                  <h3 id="exampleModalLabel">Log In</h3>
                  <h5>Accede tu cuenta</h5>
                </div>
              </div>
              <div className="modal-body">
                <div className="container">
                  <div className="row height d-flex justify-content-center align-items-center">
                    <div className="col">
                      <label htmlFor>Email</label>
                      <div className="form"> <img src={CombinedShape}alt /> <input type="text" className="form-control form-input" placeholder="John.12@gmail.com" /> <span className="left-pan"><i className="fa fa-check-circle" /></span> </div>
                      <label htmlFor>Password</label>
                      <div className="form"> <img src={imgLock} alt /> <input type="password" className="form-control form-input" placeholder="********" /> <span className="left-pan"><i className="fa fa-eye-slash" /></span></div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <p className="ms-start"><input type="checkbox" name="checkbox" id /> Recuerdame</p>
                    </div>
                    <div className="col">
                      <p className="float-end check-link"><a href> Olvide mi contrasena</a></p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="d-grid gap-2 col-12 mx-auto my-3">
                      <button className="btn btn-primary login-btn" type="button">Log In</button>
                    </div>
                    <div className="strike mb-3">
                      <span>or</span>
                    </div>
                  </div>
                  <div className="container">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="social-media text-center mt-3">
                          <a href="#" className="btn-social btn-facebook mx-2"><i className="fa fa-facebook" /></a>
                          <a href="#" className="btn-social btn-twitter mx-2"><i className="fa fa-twitter" /></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="link-career text-center mt-3">
                <div className="col">
                  <p>Aun no tienes cuenta?<a href="#"> Crear cuenta</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>          
        {/*modal 1 ends*/}
        {/*modal 2 starts*/}
        <div className="modal fade" id="exampleModal2" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-heading p-3">
                <button type="button" className="btn-close float-end btn-warning" data-bs-dismiss="modal" aria-label="Close" /> 
                <div className="modal-title text-center mt-3">
                  <h4 id="exampleModalLabel">Crear Cuenta</h4>
                  <h5 style={{fontSize: 15}}>Crea una cuenta con tu correo electronico</h5>
                </div>
              </div>
              <div className="modal-body">
                <div className="container">
                  <div className="row height d-flex justify-content-center align-items-center">
                    <div className="col">
                      <label htmlFor>Email</label>
                      <div className="form"> <img src={CombinedShape} alt /> <input type="text" className="form-control form-input" placeholder="John.12@gmail.com" /> <span className="left-pan"><i className="fa fa-check-circle" /></span> </div>
                      <label htmlFor>Confirm Email</label>
                      <div className="form"> <img src={CombinedShape} alt /> <input type="text" className="form-control form-input" placeholder="John.12@gmail.com" /> <span className="left-pan"><i className="fa fa-check-circle" /></span> </div>
                      <label htmlFor>Password</label>
                      <div className="form"> <img src={imgLock} alt /> <input type="password" className="form-control form-input" placeholder="********" /> <span className="left-pan"><i className="fa fa-eye-slash" /></span></div>
                    </div>
                  </div>
                  <div className="row mt-5">
                    <div className="d-grid gap-2 col-12 mx-auto my-3">
                      <button className="btn btn-primary login-btn" type="button">Crear Cuenta</button>
                    </div>
                    <div className="strike mb-3">
                      <span>or</span>
                    </div>
                  </div>
                  <div className="container">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="social-media text-center mt-3">
                          <a href="#" className="btn-social btn-facebook mx-2"><i className="fa fa-facebook" /></a>
                          <a href="#" className="btn-social btn-twitter mx-2"><i className="fa fa-twitter" /></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="link-career text-center mt-3">
                <div className="col">
                  <p>Aun no tienes cuenta?<a href="#"> Crear cuenta</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*modal 2 ends here*/}
        {!isLoggedIn && <a className="nav-link px-3" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal2" style={{borderLeft: '2px solid rgba(255, 255, 255, 0.6)'}}>Sign Up</a>}
        {/* <a class="nav-link px-3" href="#"><i class="bi bi-person"></i>&nbsp; Mi Cuenta</a> */}
        {isLoggedIn && <div className="dropdown">
          <a className="dropdown-toggle nav-link px-3" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
            <i className="bi bi-person" /> Mi Cuenta
          </a>
          <ul className="dropdown-menu pe-5" aria-labelledby="dropdownMenu2">
            <li><a className="dropdown-item text-bold" href="#"><i className="bi bi-person" /> Administrador</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><Link to="/user-history" className="dropdown-item" type="button"><img src={editImage} alt className="menu-icon" /> Crear y Editar Apuestas</Link></li>
            <li><hr className="dropdown-divider" /></li>
            <li onClick={logout}><Link to="#" className="dropdown-item mb-3" type="button" ><img src={LogoutImage} alt className="menu-icon custom-li" />  Cerrar Sesion</Link></li>
          </ul>
        </div>
}
      </div>
    </div>
  </div>
</nav>

    </> );
}
 
export default Header;