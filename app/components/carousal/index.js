import React, {useEffect} from 'react';
import ImageOne from '../../assets/img/main.png';
import { Link } from 'react-router-dom';
import SideBar from '../sidebar';
import Steps from '../steps';
import { useApi } from '../../components/customHooks/useApi';

import VideoSection from '../../components/videos';

const Carousal = () => {
  const popularBetUrl = '/admin/get-popular-contest-bets';
  const [data] = useApi(popularBetUrl, false, { method: 'GET' });
    const { responseData } = data || {};
    const { popularBets: contestDetails } = responseData || {};

    const isValueExist = (item) => {
      if(item && item.contestDetails && item.contestDetails[0]) {
        return true;
      } else {
        return false;
      }
    }
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
                
                {contestDetails && contestDetails.length > 0 && contestDetails.reverse().slice(0, 3).map((item, index) =>
                  <div className={`carousel-item ${index === 0 && 'active'}`} data-bs-interval={2000}>
                    <img style={{height: '360px'}} src={isValueExist(item) && item.contestDetails[0].urlPicture || ImageOne} className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                      <h5 style={{ color: 'white' }}>{isValueExist(item) && item.contestDetails[0].name}</h5>
                      <p style={{ color: 'white' }}>{isValueExist(item) && item.contestDetails[0].explanation}</p>
                    </div>
                  </div>
                )}

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
                <div className="card mb-3 p-3" style={{ borderRadius: 15 }}>
                  {contestDetails && contestDetails.length > 0 && contestDetails.slice(0, 4).map((item, index) => <SideBar index={index} item={item} />)}
                </div>
              </div>
            </div>
          </div>
        </div></div>
    </section>
    <Steps />
    <VideoSection contestDetails={contestDetails} />

  </>
);
}

export default Carousal;