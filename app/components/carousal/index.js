import React from 'react';
import ImageOne from '../../assets/img/main.png';
import { Link } from 'react-router-dom';
import SideBar from '../sidebar';
import Steps from '../steps';
const Carousal = () => {
    const dummyContest = [
      { 
        id: 1,
        name: 'contest 1'
      },
      { 
        id: 2,
        name: 'contest 1'
      },
      { 
        id: 3,
        name: 'contest 1'
      }

  ]
    return ( 
        <>
<section>
   <div className="container mt-4">
    <div className="row">
      <div className="col-lg-7 col-md-7 col-sm-12">
        <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={1} aria-label="Slide 2" />
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={2} aria-label="Slide 3" />
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval={10000}>
              <img src={ImageOne} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5 style={{color: 'white'}}>First slide label</h5>
                <p style={{color: 'white'}}>Some representative placeholder content for the first slide.</p>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval={2000}>
              <img src={ImageOne} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5 style={{color: 'white'}}>Second slide label</h5>
                <p style={{color: 'white'}}>Some representative placeholder content for the second slide.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={ImageOne} className="d-block w-100" alt="..." />
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
      <div className="col-lg-5 col-md-7 col-sm-12">
        <div className="container">
          <div className="row">
            <div className="card-heading">
              APUESTAS MÁS POPULARES
            </div>
          </div>
          <div className="row">
            <div className="card mb-3 p-3" style={{borderRadius: 15}}>
              {dummyContest.map((item, index) => <SideBar index={index} itemId={item.id}/>)}
            </div>
          </div>
        </div>
      </div>
    </div></div>
    </section>
      <Steps />

        </>
     );
}
 
export default Carousal;