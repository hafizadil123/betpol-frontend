/**
 *
 * AdminHistory
 *
 */

import React from 'react';
import cardImage from '../../assets/img/card-1.png';
import calImaage from '../../assets/img/cal.png';
import paperImage from '../../assets/img/Paper.png';
import phoneImage from '../../assets/img/phone.png';
import minusImage from '../../assets/img/minus.png';
import coinImage from '../../assets/img/coin.png';
import groupImage from '../../assets/img/Group 175967.png'
import cameraImage from '../../assets/img/camera.png';
import tickImage from '../../assets/img/tick.png';
import closeImage from '../../assets/img/close.png';

export default function AdminHistory() {
  return (
    <>
 <div>
  <div className="container">
    <div className="row mt-4 mb-4">
      <div className="col col-lg-6">
        <div className="heading-top text-start">
          <h4>Apuestas activas</h4>
        </div>
      </div>
      <div className="col col-lg-6 text-end">
        <button className="btn btn-primary top-right-admin" data-bs-toggle="modal" data-bs-target="#ModalNewBet">Crear apuesta</button>
      </div>
      {/* modal new bet starts here*/}
      <div className="modal fade" id="ModalNewBet" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-heading p-2">
              <button type="button" className="btn-close float-end btn-warning" data-bs-dismiss="modal" aria-label="Close" /> 
              <div className="modal-title text-center mt-3">
                <h3 id="exampleModalLabel">Crear nueva apuesta</h3>
              </div>
            </div>
            <div className="modal-body">
              <div className="card pt-3">
                <div className="container">
                  <div className="row height d-flex justify-content-center align-items-center">
                    <div className="col-12">
                      <label htmlFor>Nombre</label>
                      <div className="form"> <img src={calImaage} alt /> <input type="text" className="form-control form-input" placeholder /> </div>
                    </div>
                    <div className="col-12">
                      <label htmlFor>Explicación</label>
                      <div className="form"> <img src={paperImage} alt /> <input type="text" className="form-control form-input" placeholder /> </div>
                    </div>
                    <div className="col-12">
                      <label htmlFor>Reglas</label>
                      <div className="form"> <img src={phoneImage} alt /> <input type="text" className="form-control form-input" placeholder /> </div>
                    </div>
                    <div className="col-12">
                      <label htmlFor>Tipo de apuesta</label>
                      <div className="form"> <img src={coinImage} style={{top: 5, left: 6}} alt /> <select className="form-select" aria-label="Default select example">
                          <option selected />
                          <option value={1}>One</option>
                          <option value={2}>Two</option>
                          <option value={3}>Three</option>
                        </select> </div>
                    </div>
                    <div className="col-6">
                      <label htmlFor className="text-start">Fecha de cierre</label>
                      <div className="form"> <img src={phoneImage} alt /> <input type="text" className="form-control form-input" placeholder /> </div>
                    </div>
                    <div className="col-6">
                      <label htmlFor className="text-start" style={{fontSize: 17}}>Numero de opciones</label>
                      <div className="form"> <img src={minusImage} className="img-minus" alt /> <input type="text" className="form-control form-input" placeholder /> <span className="left-pan"><img src={groupImage} className="img-plus" alt /></span> </div>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="d-flex justify-content-between">
                      <div>
                        <h6>Opciones</h6>
                      </div>
                      <div>
                        <i className="bi bi-plus-circle" />
                      </div>
                    </div>
                  </div>
                  <div className="row admin-label">
                    <div className="col-4">
                      <label htmlFor>Nombre opción</label>
                      <div className="form"><input type="text" className="form-control form-input" placeholder /> </div>
                    </div>
                    <div className="col-4">
                      <label htmlFor>Probabilidad</label>
                      <div className="form"><input type="text" className="form-control form-input" placeholder /> </div>
                    </div>
                    <div className="col-4">
                      <label htmlFor>Odd</label>
                      <div className="form"> <input type="text" className="form-control form-input" placeholder /> </div>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <label htmlFor>Foto</label>
                    <div className="col-12 d-flex justify-content-center">
                      <div className="container" style={{padding: '3px 9px'}}>
                        <div className="row">
                          <div className="col-12 text-center upload-cam p-5">
                            <img src={cameraImage} alt /><br />
                            <p>Presiona para seleccionar una foto</p>
                          </div>
                        </div>
                      </div> 
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="d-flex justify-content-between">
                      <div>
                        <h6>Noticias</h6>
                      </div>
                      <div>
                        <i className="bi bi-plus-circle" />
                      </div>
                    </div>
                  </div>
                  <div className="row admin-label">
                    <div className="col-4">
                      <label htmlFor>Nombre noticia</label>
                      <div className="form"><input type="text" className="form-control form-input" placeholder /> </div>
                    </div>
                    <div className="col-3 gx-0">
                      <label htmlFor>Link</label>
                      <div className="form"><input type="text" className="form-control form-input" placeholder="www." /> </div>
                    </div>
                    <div className="col-3">
                      <label htmlFor>Fecha</label>
                      <div className="form"> <input type="text" className="form-control form-input" placeholder="MM/DD/YY" /> </div>
                    </div>
                    <div className="col-2 m-auto">
                      <label htmlFor />
                      <img src={cameraImage} className="img-cam" alt />
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="d-flex justify-content-between">
                      <div>
                        <h6>Noticias</h6>
                      </div>
                      <div>
                        <i className="bi bi-plus-circle" />
                      </div>
                    </div>
                  </div>
                  <div className="row admin-label">
                    <div className="col-6">
                      <label htmlFor>Análisis</label>
                      <div className="form"><input type="text" className="form-control form-input" placeholder /> </div>
                    </div>
                    <div className="col-6 gs-0">
                      <label htmlFor>Link</label>
                      <div className="form"><input type="text" className="form-control form-input" placeholder /> </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="d-grid gap-2 col-12 my-3">
                    <button className="btn btn-primary login-btn" type="button">Crear</button>
                  </div>
                </div>
                {/* <div class="col-5">
                  <div class="d-grid gap-2 col-12 mx-auto my-3">
                    <button class="btn btn-primary login-btn-admin" type="button">Cerrar apuesta</button>
                  </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> 
    {/* modal new bet ends here */}
  </div>
  <div className="container">
  <div className="row">
    {[0,1,2,3,4,5].map(item => 
     
      <div className="col col-lg-6 col-md-3 col-sm-12">
        <div className="card mb-3 pb-3 p-2">
          <div className="row g-0">
            <div className="col-md-7">
              <div className="card-body">
                <p><i className="bi bi-calendar2-plus" />&nbsp; 01/09/2021</p>
                <h6 className="card-title"> Será vacado el Gabinete Bellido en el 2021?</h6>
                <a href="#" className="link-admin"><i className="bi bi-link-45deg" />&nbsp; www.noticiasdehoy.com</a>
              </div>
            </div>
            <div className="col-md-5">
              <div className="card-body text-end p-2">
                <img src={cardImage} className="img-fluid rounded-start" alt="..." />
              </div>  
            </div>
          </div>
          <div className="row text-center">
            <div className="col col-lg-3 col-md-3 col-sm-12 ms-3">
              <p className="heading-admin">Apuestas</p>
              <span className="badge rounded-pill badge-admin bg-light text-dark p-2 mt-3 count">24k</span>
            </div>
            <div className="col col-lg-3 col-md-3 col-sm-12 side-si">
              <p className="heading-admin">Opciones</p>
              <span className="badge rounded-pill badge-admin bg-light text-dark p-2 mt-3 si-admin">Si</span>
            </div>
            <div className="col col-lg-3 col-md-3 col-sm-12">
              <div><p /></div>
              <span className="badge rounded-pill badge-admin bg-light text-dark p-2 mt-3 no-admin">No</span>
            </div>
            <div className="col col-lg-2 col-md-3 col-sm-12 p-0 text-end">
              <br />
              <button className="btn btn-primary edit-admin ml-5" data-bs-toggle="modal" data-bs-target="#ModalEdit"><i className="bi bi-pencil-square" /></button>
            </div>
            {/* modal-Edit starts here*/}
            <div className="modal fade" id="ModalEdit" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-heading p-3">
                    <button type="button" className="btn-close float-end btn-warning" data-bs-dismiss="modal" aria-label="Close" /> 
                    <div className="modal-title text-center mt-3">
                      <h3 id="exampleModalLabel">Modificar apuesta</h3>
                    </div>
                  </div>
                  <div className="modal-body">
                    <h5 className="text-start top-heading-admin"> Será vacado el Gabinete Bellido en el 2021?</h5>
                    <div className="card pt-4">
                      <div className="container">
                        <div className="row height d-flex justify-content-center align-items-center">
                          <h6 className="text-start">Odds de cada opción</h6>
                          <div className="col-6">
                            <div className="form"> <img src={tickImage} alt /> <input type="text" className="form-control form-input" placeholder="Si" /> </div>
                          </div>
                          <div className="col-3">
                            <div className="form"><input type="text" className="form-control form-input" placeholder="0.7" /> </div>
                          </div>
                          <div className="col-3">
                            <div className="form"> <input type="text" className="form-control form-input" placeholder="1.3" /> </div>
                          </div>
                        </div>
                        <div className="row height d-flex justify-content-center align-items-center">
                          <div className="col-6">
                            <div className="form"> <img src={closeImage} alt /> <input type="text" className="form-control form-input" placeholder="Si" /> </div>
                          </div>
                          <div className="col-3">
                            <div className="form"><input type="text" className="form-control form-input" placeholder="0.7" /> </div>
                          </div>
                          <div className="col-3">
                            <div className="form"> <input type="text" className="form-control form-input" placeholder="1.3" /> </div>
                          </div>
                        </div>
                        <hr />
                        <div className="row">
                          <div className="d-flex justify-content-between">
                            <div>
                              <h6>Noticias</h6>
                            </div>
                            <div>
                              <i className="bi bi-plus-circle" />
                            </div>
                          </div>
                        </div>
                        <div className="row admin-label">
                          <div className="col-4">
                            <label htmlFor>Nombre noticia</label>
                            <div className="form"><input type="text" className="form-control form-input" placeholder="Si" /> </div>
                          </div>
                          <div className="col-3 gx-0">
                            <label htmlFor>Link</label>
                            <div className="form"><input type="text" className="form-control form-input" placeholder="0.7" /> </div>
                          </div>
                          <div className="col-3">
                            <label htmlFor>Fecha</label>
                            <div className="form"> <input type="text" className="form-control form-input" placeholder="1.3" /> </div>
                          </div>
                          <div className="col-2 m-auto">
                            <label htmlFor />
                            <img src={cameraImage} className="img-cam" alt />
                          </div>
                        </div>
                        <hr />
                        <div className="row">
                          <div className="d-flex justify-content-between">
                            <div>
                              <h6>Noticias</h6>
                            </div>
                            <div>
                              <i className="bi bi-plus-circle" />
                            </div>
                          </div>
                        </div>
                        <div className="row admin-label">
                          <div className="col-6">
                            <label htmlFor>Nombre análisis</label>
                            <div className="form"><input type="text" className="form-control form-input" placeholder="Si" /> </div>
                          </div>
                          <div className="col-6 gs-0">
                            <label htmlFor>Link</label>
                            <div className="form"><input type="text" className="form-control form-input" placeholder="Si" /> </div>
                          </div>
                        </div>
                        {/* <div class="row">
                                <div class="d-grid gap-2 col-12 mx-auto my-3">
                                  <button class="btn btn-primary login-btn" type="button">Log In</button>
                                </div>
                                <div class="strike mb-3">
                                  <span>or</span>
                                </div>
                              </div>
                              <div class="container">
                                <div class="row">
                                <div class="col-md-12">
                                  <div class="social-media text-center mt-3">
                                    <a href="#" class="btn-social btn-facebook mx-2"><i class="fa fa-facebook"></i></a>
                                    <a href="#" class="btn-social btn-twitter mx-2"><i class="fa fa-twitter"></i></a>
                                  </div>
                                </div>
                              </div>
                            </div> */}
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-7">
                        <div className="d-grid gap-2 col-12 mx-auto my-3">
                          <button className="btn btn-primary login-btn" type="button">Modificar</button>
                        </div>
                      </div>
                      <div className="col-5">
                        <div className="d-grid gap-2 col-12 mx-auto my-3">
                          <button className="btn btn-primary login-btn-admin" type="button">Cerrar apuesta</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> 
            {/* modal edit ends here */}
          </div>
        </div>
      </div>
     
    )}

</div>
  </div>
</div>


    </>
  );
}


