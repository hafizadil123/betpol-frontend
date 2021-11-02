import React, { useState } from 'react'
import logoImage from '../../assets/img/logo.png';
import CombinedShape from '../../assets/img/Combined-Shape.png';
import imgLock from '../../assets/img/lock.png'
import editImage from '../../assets/img/edit-menu.png';
import { yupResolver } from '@hookform/resolvers/yup';
import userHistory1  from '../../assets/img/user-history-1.png';
import userHistory2  from '../../assets/img/user-history-2.png';
import userHistory3  from '../../assets/img/user-history-3.png';
import userHistory4  from '../../assets/img/user-history-4.png';

import LogoutImage from '../../assets/img/exit-menu.png';
import * as yup from "yup";

import { useForm } from "react-hook-form";

import history from 'utils/history';
import { Link } from 'react-router-dom';
import { useApi } from '../../components/customHooks/useApi';

const SingUpschema = yup.object({
  email: yup.string().email().required('email is required'),
  password: yup.string().required('password is required'),
  confirmEmail: yup.string().email()
    .oneOf([yup.ref('email'), null], 'email must match')
}).required();


const loginSchema = yup.object({
  loginEmail: yup.string().email().required('email is required'),
  loginPassword: yup.string().required('password is required'),
}).required();

const getSchema = (action) => {

  if (action === 1) {
    return SingUpschema;
  }
  else if (action === 2) {
    return loginSchema;
  }
}
const Header = () => {
  const isLoggedIn = localStorage.getItem('token');
  const [action, setAction] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [passwordType, setPasswordType] = useState(false);
  const [, registerCb] = useApi('/user/register', {}, { method: 'POST' }, false);
  const [, loginCb] = useApi('/user/login', {}, { method: 'POST' }, false);
  const { register, handleSubmit, watch, formState: { errors } } = useForm({
    resolver: yupResolver(getSchema(action))
  });

  const togglePasswordType = () => {
    setPasswordType(!passwordType)
  }
  const onSubmit = async (data) => {
    if (action === 1) {
      setLoading(true);
      const requestObject = {
        email: data.email,
        password: data.password
      }
      const { responseData, hasError, errorMessage } = await registerCb(requestObject)
      if (!hasError) {
        setLoading(false);
        localStorage.setItem('token', responseData.token);
        localStorage.setItem('user', JSON.stringify(responseData.user));
        window.location.reload();
      } else {
        setLoading(false);
        setErrorMessage(`Email already exists or ${errorMessage}`);
      }

    }
    else if (action === 2) {
      setLoading(true);
      const requestObject = {
        loginEmail: data.loginEmail,
        loginPassword: data.loginPassword
      }
      const { responseData, hasError, errorMessage } = await loginCb(requestObject)
      console.log('calleddd', hasError, errorMessage, responseData)
      if (!hasError) {
        setLoading(false);
        localStorage.setItem('token', responseData.token);
        localStorage.setItem('user', JSON.stringify(responseData.user));
        window.location.reload();
      } else {
        setLoading(false);
        setErrorMessage('Email or password is incorrect' || errorMessage);
      }
    }
  };
  const resetError = (action) => {
    setErrorMessage('');
    setAction(action);
  }
  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.location.reload();
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
              {!isLoggedIn && <a className="nav-link px-3" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={(e) => resetError(2)}>Login</a>}
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
                        <form onSubmit={handleSubmit(onSubmit)}>
                          {errorMessage && <span style={{ color: 'red' }}>{errorMessage || ''}</span>}
                          <div className="row height d-flex justify-content-center align-items-center">
                            <div className="col">
                              <label htmlFor>Email</label>
                              <div className="form"> <img src={CombinedShape} alt /> <input type="text" className="form-control form-input" placeholder="John.12@gmail.com"  {...register('loginEmail')} /> <span className="left-pan"><i className="fa fa-check-circle" /></span>
                                <p style={{ color: 'red' }}>{errors && errors.loginEmail && errors.loginEmail.message}</p>
                              </div>
                              <label htmlFor>Password</label>
                              <div className="form"> <img src={imgLock} alt /> <input type={`${passwordType ? 'text' : 'password'}`} className="form-control form-input" placeholder="********" {...register('loginPassword')} /> <span className="left-pan"><i className="fa fa-eye-slash" onClick={togglePasswordType} /></span>
                                <p style={{ color: 'red' }}>{errors && errors.loginPassword && errors.loginPassword.message}</p>
                              </div>
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
                              {loading ? <button class="btn btn-primary login-btn" type="button" disabled>
                                <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                Loading...
                              </button> : <input className="btn btn-primary login-btn" type="submit" value="Login In" />}

                            </div>
                            <div className="strike mb-3">
                              <span>or</span>
                            </div>
                          </div>
                        </form>

                        {/* <div className="container">
                          <div className="row">
                            <div className="col-md-12">
                              <div className="social-media text-center mt-3">
                                <a href="#" className="btn-social btn-facebook mx-2"><i className="fa fa-facebook" /></a>
                                <a href="#" className="btn-social btn-twitter mx-2"><i className="fa fa-twitter" /></a>
                              </div>
                            </div>
                          </div>
                        </div> */}
                      </div>
                    </div>
                    <div className="link-career text-center mt-3">
                      <div className="col">
                        <p>Aun no tienes cuenta?<a href="#" data-bs-toggle="modal" data-bs-target="#exampleModal2" onClick={(e) => resetError(1)}> Crear cuenta</a></p>
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
                        <h5 style={{ fontSize: 15 }}>Crea una cuenta con tu correo electronico</h5>
                      </div>
                    </div>
                    <div className="modal-body">
                      <div className="container">


                        <form onSubmit={handleSubmit(onSubmit)}>
                          {errorMessage && <span style={{ color: 'red' }}>{errorMessage || ''}</span>}
                          <div className="row height d-flex justify-content-center align-items-center">
                            <div className="col">
                              <label htmlFor>Email</label>
                              <div className="form"> <img src={CombinedShape} alt />
                                <input type="text" className="form-control form-input" placeholder="John.12@gmail.com" {...register('email')} />
                                <span className="left-pan"><i className="fa fa-check-circle" /></span>
                                <p style={{ color: 'red' }}>{errors && errors.email && errors.email.message}</p>
                              </div>
                              <label htmlFor>Confirm Email</label>
                              <div className="form"> <img src={CombinedShape} alt /> <input type="text" className="form-control form-input" placeholder="John.12@gmail.com" {...register('confirmEmail')} /> <span className="left-pan"><i className="fa fa-check-circle" /></span>
                                <p style={{ color: 'red' }}>{errors && errors.confirmEmail && errors.confirmEmail.message}</p>
                              </div>
                              <label htmlFor>Password</label>
                              <div className="form"> <img src={imgLock} alt /> <input type={`${passwordType ? 'text' : 'password'}`} className="form-control form-input" placeholder="********" {...register('password')} /> <span className="left-pan"><i className="fa fa-eye-slash" onClick={togglePasswordType} /></span>
                                <p style={{ color: 'red' }}>{errors && errors.password && errors.password.message}</p>
                              </div>
                            </div>
                          </div>
                          <div className="row mt-5">
                            <div className="d-grid gap-2 col-12 mx-auto my-3">
                              {loading ? <button class="btn btn-primary login-btn" type="button" disabled>
                                <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                Loading...
                              </button> : <input className="btn btn-primary login-btn" type="submit" value="Crear Cuenta" />}

                            </div>

                            {/* <div className="strike mb-3">
                              <span>or</span>
                            </div> */}
                          </div>
                        </form>
                        {/* 
                        <div className="container">
                          <div className="row">
                            <div className="col-md-12">
                              <div className="social-media text-center mt-3">
                                <a href="#" className="btn-social btn-facebook mx-2"><i className="fa fa-facebook" /></a>
                                <a href="#" className="btn-social btn-twitter mx-2"><i className="fa fa-twitter" /></a>
                              </div>
                            </div>
                          </div>
                        </div> */}
                      </div>
                    </div>
                    {/* <div className="link-career text-center mt-3">
                      <div className="col">
                        <p>Aun no tienes cuenta?<a href="#"> Crear cuenta</a></p>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
              {/*modal 2 ends here*/}
              {!isLoggedIn && <a className="nav-link px-3" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal2" style={{ borderLeft: '2px solid rgba(255, 255, 255, 0.6)' }} onClick={(e) => setAction(1)}>Sign Up</a>}
              {/* <a class="nav-link px-3" href="#"><i class="bi bi-person"></i>&nbsp; Mi Cuenta</a> */}
              {isLoggedIn && JSON.parse(localStorage.getItem('user')) && JSON.parse(localStorage.getItem('user')).role === 'admin' && <div className="dropdown">
                <a className="dropdown-toggle nav-link px-3" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                  <i className="bi bi-person" /> {JSON.parse(localStorage.getItem('user')) && JSON.parse(localStorage.getItem('user')).email.split('@')[0] || 'Mi Cuenta'}
                </a>
                <ul className="dropdown-menu pe-5" aria-labelledby="dropdownMenu2">
                  <li><a className="dropdown-item text-bold" href="#"><i className="bi bi-person" /> Administrador</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><Link to={`/admin-history`} className="dropdown-item" type="button"><img src={editImage} alt className="menu-icon" /> Crear y Editar Apuestas</Link></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li onClick={logout}><Link to="#" className="dropdown-item mb-3" type="button" ><img src={LogoutImage} alt className="menu-icon custom-li" />  Cerrar Sesion</Link></li>
                </ul>
              </div>
              }
              {isLoggedIn && JSON.parse(localStorage.getItem('user')) && JSON.parse(localStorage.getItem('user')).role === 'user' && <div className="dropdown">
                <a className="dropdown-toggle nav-link px-3" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                  <i className="bi bi-person" /> {JSON.parse(localStorage.getItem('user')) && JSON.parse(localStorage.getItem('user')).email.split('@')[0] || 'Mi Cuenta'}
                </a>
                <ul className="dropdown-menu pe-5" aria-labelledby="dropdownMenu2">
                <li><a className="dropdown-item text-bold" href="#"> {JSON.parse(localStorage.getItem('user')) && JSON.parse(localStorage.getItem('user')).email.split('@')[0]}</a></li>
                  <li className="dropdown-item text-center">Saldo: s/ .100</li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><Link to={`/user-history`} className="dropdown-item" type="button"><img src={userHistory1} alt className="menu-icon" /> Crear y Editar Apuestas</Link></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><button className="dropdown-item mb-3" type="button"><img src={userHistory2} alt className="menu-icon" />Depositos a mi cuenta</button></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><button className="dropdown-item" type="button"><img src={userHistory3} alt className="menu-icon" />Retiro de mi cuenta</button></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li onClick={logout}><Link to="#" className="dropdown-item mb-3" type="button" ><img src={userHistory4} alt className="menu-icon custom-li" />  Cerrar Sesion</Link></li>
                </ul>
              </div>
              }
            </div>
          </div>
        </div>
      </nav>

    </>);
}

export default Header;