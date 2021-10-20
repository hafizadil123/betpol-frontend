/**
 *
 * ContestDetailPage
 *
 */

import React from 'react';
import thirdImage from '../../assets/img/3rd.png';
import Currency from '../../assets/img/currency.png';
import chartImage from '../../assets/img/chart1.png';
import chartImage_1 from '../../assets/img/chart.png';
import facebookImage from '../../assets/img/fb.png';
import twitterImage from '../../assets/img/tw.png';
import instaImage from '../../assets/img/inst.png';
import mainImage from '../../assets/img/main.png';
import newImage from '../../assets/img/new.png'
import docImage from '../../assets/img/doc.png'
import groupImage from '../../assets/img/group.png';
import commentOne from '../../assets/img/com-1.png';
import commentTwo from '../../assets/img/com-2.png';
import commentThree from '../../assets/img/com-3.png';
import replyImage from '../../assets/img/reply.png';
import dropdownImage from '../../assets/img/dropdown.png';

export default function ContestDetailPage() {
  return (
    <>
    <div>
  <section>
    <div className="container mb-4">
      <div className="row">
        <div className="col col-lg-12 col-md-12 col-sm-12">
          <div className="card outer mt-4 pb-3">
            <div className="card-body">
              <div className="container">
                <div className="row">
                  <div className="col col-lg-6 col-md-6 col-sm-12">
                    <div className="card-heading-contest">Será vacado el Gabinete Bellido en el 2021?</div>
                    <div className="row">
                      <div className="col col-lg-5 col-md-12 col-sm-12">
                        <div className="card text-center first p-4">
                          <div className="percentage"><h3>44%</h3></div>
                          <div className="si-thumbs-up"><p><i className="bi bi-hand-thumbs-up" /> Si</p></div>
                          <div className="apostar">
                            <button className="btn btn-outline-primary btn-1" data-bs-toggle="modal" data-bs-target="#exampleModal1">Apostar</button>
                          </div>
                          {/* modal 3 start*/}
                          <div className="modal modal-input fade" id="exampleModal1" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                              <div className="modal-content">
                                <div className="modal-heading p-3">
                                  <button type="button" className="btn-close float-end btn-warning" data-bs-dismiss="modal" aria-label="Close" /> 
                                  <div className="modal-title text-center mt-3">
                                    <h3 id="exampleModalLabel"><img src={thirdImage} width="7%" style={{marginTop: '-5px', marginRight: 10}} alt /> Apuesta Simple</h3>
                                    <h6 style={{fontSize: 20}}>Estas apostando a que el gabinete Bellido setra vacado antes de que termine el ano 2021</h6>
                                  </div>
                                </div>
                                <div className="modal-body">
                                  <div className="container">
                                    <div className="row height d-flex justify-content-center align-items-center">
                                      <div className="col">
                                        <label htmlFor style={{fontWeight: 500, marginLeft: '-363px', marginBottom: 5}}>Monto</label>
                                        <div className="form"> <img src={Currency} alt /> <input type="text" className="form-control form-input" placeholder /> </div>
                                        <label htmlFor style={{fontWeight: 500, marginLeft: '-293px', marginBottom: 5}}>Ganancia Posible</label>
                                        <div className="form"> <img src={chartImage} alt /> <input type="text" className="form-control form-input" placeholder /> </div>
                                      </div>
                                    </div>
                                    <div className="row">
                                      <div className="col">
                                        <p className="ms-start" style={{fontSize: 15, fontFamily: 'poppins'}}><input type="checkbox" name="checkbox" id /> Estoy de acuerdo con los términos y condiciones de la apuesta.</p>
                                      </div>
                                    </div>
                                    <div className="row">
                                      <div className="d-grid gap-2 col-12 mx-auto ">
                                        <button className="btn btn-primary login-btn" type="button">Log In</button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/*modal 3 end*/}
                        </div>
                      </div>
                      <div className="col col-lg-5 col-md-12 col-sm-12">
                        <div className="card text-center second p-4">
                          <div className="percentage"><h3>65%</h3></div>
                          <div className="no"><p><i className="bi bi-hand-thumbs-down" /> Si</p></div>
                          <div className="apostar">
                            <button className="btn btn-outline-danger btn-2" data-bs-toggle="modal" data-bs-target="#exampleModal3">Apostar</button>
                          </div>
                          {/* modal 4 start*/}
                          <div className="modal modal-input fade" id="exampleModal3" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                              <div className="modal-content">
                                <div className="modal-heading p-3 pb-0">
                                  <button type="button" className="btn-close float-end btn-warning" data-bs-dismiss="modal" aria-label="Close" /> 
                                  <div className="modal-title text-center">
                                    <h3 id="exampleModalLabel"><img src={thirdImage} alt /></h3>
                                    <h6 style={{fontSize: 26, fontWeight: 'bold', color: '#091947', fontFamily: 'poppins'}}>Apuesta Confirmada!</h6>
                                    <p style={{fontSize: 20, fontWeight: 500, color: '#091947', fontFamily: 'poppins'}}>Compártelo en tus redes sociales</p>
                                  </div>
                                </div>
                                <div className="modal-body">
                                  <div className="container">
                                    <div className="row">
                                      <div className="col-md-12">
                                        <div className="social-media-confirm text-center mb-4">
                                          <a href="#" className="btn-social btn-facebook mx-2"><img src={facebookImage} alt /></a>
                                          <a href="#" className="btn-social btn-twitter mx-2"><img src={twitterImage}alt /></a>
                                          <a href="#" className="btn-social btn-twitter mx-2"><img src={instaImage} alt /></a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/*modal 4 end*/}
                        </div>
                      </div>
                      <div className="col col-lg-2">
                      </div>
                    </div>
                  </div>
                  <div className="col col-lg-6 col-md-6 col-sm-12">
                    <div className="card-heading-contest">Como se han comportado los pagos de esta apuesta?</div>
                    <div className="chart">
                      <img src={chartImage_1} alt />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*charts ends*/}
  <div className="container">
    <div className="row">
      <div className="col col-lg-6 col-md-6 col-sm-12">
        <div className="card p-4">
          <div className="card-heading ps-3">Condiciones de la apuesta</div>
          <div className="card-body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum 
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
            totam rem aperiam,
          </div>
        </div>
        <div className="card p-4 mt-2">
          <div className="card-heading ps-3">Condiciones de la apuesta</div>
          <div className="card-body">
            <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={1} aria-label="Slide 2" />
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={2} aria-label="Slide 3" />
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval={10000}>
                  <img src={mainImage} className="d-block w-100" alt="..." />
                  <div className="carousel-caption d-none d-md-block">
                    <h5 style={{color: 'white'}}>First slide label</h5>
                    <p style={{color: 'white'}}>Some representative placeholder content for the first slide.</p>
                  </div>
                </div>
                <div className="carousel-item" data-bs-interval={2000}>
                  <img src={mainImage} className="d-block w-100" alt="..." />
                  <div className="carousel-caption d-none d-md-block">
                    <h5 style={{color: 'white'}}>Second slide label</h5>
                    <p style={{color: 'white'}}>Some representative placeholder content for the second slide.</p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src={mainImage} className="d-block w-100" alt="..." />
                  <div className="carousel-caption d-none d-md-block">
                    <h5 style={{color: 'white'}}>Third slide label</h5>
                    <p style={{color: 'white'}}>Some representative placeholder content for the third slide.</p>
                  </div>
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="col col-lg-6 col-md-6 col-sm-6">
        <div className="card">
          <div className="container">
            <div className="row p-4">
              <div className="card-heading">
                APUESTAS MÁS POPULARES
              </div>
            </div>
            <div className="row">
              <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
                {/* <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div> */}
                <div className="carousel-inner">
                  <div className="carousel-item active" data-bs-interval={10000}>
                    <img src={newImage} className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                      <h5 style={{color: 'white'}}><i className="bi bi-clock" /> First slide label</h5>
                      <p style={{color: 'white'}}>Some representative placeholder content for the first slide.</p>
                    </div>
                  </div>
                  <div className="carousel-item" data-bs-interval={2000}>
                    <img src={newImage} className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                      <h5 style={{color: 'white'}}><i className="bi bi-clock" /> Second slide label</h5>
                      <p style={{color: 'white'}}>Some representative placeholder content for the second slide.</p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img src={newImage} className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                      <h5 style={{color: 'white'}}><i className="bi bi-clock" /> Third slide label</h5>
                      <p style={{color: 'white'}}>Some representative placeholder content for the third slide.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            {/* <div class="row"> */}
            {/* <div class="card mb-3 p-3" style="border-radius: 15px;"> */}
            <div className="row g-0 mt-3">
              <div className="col-md-8">
                <div className="card-body p-0">
                  <p className="card-title mb-0" style={{fontSize: '18px', lineHeight: '30px'}}>Ministerio de Salud anuncia que vacunará en estaciones de la Línea 1 del Metro de Lima</p>
                  <div className="time">
                    <p><i className="bi bi-clock" /> HACE UNA HORA</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <img src={docImage} className="img-fluid rounded-start" width="239px" height={166} alt="..." />
              </div>
            </div>
            <hr />
            <div className="row g-0 mt-3 mb-3">
              <div className="col-md-8">
                <div className="card-body p-0">
                  <p className="card-title mb-0" style={{fontSize: '18px', lineHeight: '30px'}}>Perú Libre: el control de medios y otros proyectos peligrosos de la bancada de Gobierno | ANÁLISIS</p>
                  <div className="time">
                    <p><i className="bi bi-clock" /> HACE UNA HORA</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <img src={groupImage} className="img-fluid rounded-start" alt="..." />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="row mt-4 mb-4">
      <div className="col col-lg-12 col-md-12 col-sm-12">
        <div className="card p-3 pb-5 px-4">
          <div className="card-heading ps-3">
            Comentarios
          </div>
          <div className="card mt-2 p-0">
            <div className="container">
              <div className="row pb-4">
                <div className="col">
                  <div className="mt-3 d-flex flex-row align-items-center p-3 form-color"> <img src={commentOne} width={50} className="rounded-circle mr-2" style={{marginRight: 15}} /> 
                    <input type="text" className="form-control" style={{borderRadius: 15}} placeholder="Únete a la conversación..." /> 
                  </div>
                  <div className="d-flex flex-start" style={{marginLeft: 15}}>
                    <img className="rounded-circle shadow-1-strong me-3" src={commentTwo} alt="avatar" width={50} height={50} />
                    <div className="flex-grow-1 flex-shrink-1">
                      <div>
                        <div className="d-flex justify-content-between align-items-center">
                          <p className="name">Phill Gav <span className="small"> <span className="circle">.</span> Hace una hora</span></p>
                        </div>
                        <p className="text">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, 
                          sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam</p>
                        <a href="#" style={{color: '#091947', textDecoration: 'none', fontWeight: 300, fontFamily: 'poppins'}}>1 respuesta <img src={dropdownImage} alt /></a>&nbsp;
                        <h5 className="small d-inline" style={{color: '#091947', textDecoration: 'none', fontWeight: 500, fontFamily: 'poppins'}}>Responder</h5>
                        <span className="circle">.</span>
                        <h5 className="small d-inline" style={{color: '#091947', textDecoration: 'none', fontWeight: 500, fontFamily: 'poppins'}}>Compartir</h5>
                      </div>
                      <div className="d-flex flex-start mt-4">
                        <a className="me-3" href="#">
                          <img className="rounded-circle shadow-1-strong me-3" src={commentThree} alt="avatar" width={50} height={50} />
                        </a>
                        <div className="flex-grow-1 flex-shrink-1">
                          <div>
                            <div className="d-flex justify-content-between align-items-center">
                              <p className="name">
                                John Doe <a href="#!" className="reply" style={{color: '#091947'}}>&nbsp; <img src={replyImage} alt />
                                  <span>@PhilGav</span></a><span className="small"><span className> <span className="circle">&nbsp;.&nbsp;</span> Hace 8 mins</span></span>
                              </p>
                            </div>
                            <p className="text">
                              letters, as opposed to using 'Content here, content here',
                              making it look like readable English.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex flex-start mt-4" style={{marginLeft: 15}}>
                    <img className="rounded-circle shadow-1-strong me-3" src={commentThree} alt="avatar" width={50} height={50} />
                    <div className="flex-grow-1 flex-shrink-1">
                      <div>
                        <div className="d-flex justify-content-between align-items-center">
                          <p className="name">
                            Michael Green <span className="small"><span className="circle">.</span> Hace una hora</span>
                          </p>
                        </div>
                        <p className="text">
                          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam 
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

