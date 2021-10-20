import React from 'react';
import firstImage from '../../assets/img/1st.png'
import secondImage from '../../assets/img/2nd.png'
import thirdImage from '../../assets/img/3rd.png'
import fourthImage from '../../assets/img/4th.png'
const Steps = () => {
    return ( 
        <section>
  <div className="container mt-4">
    <div className="row">
      <div className="col col-lg-12 col-md-12 col-sm-12">
        <div className="card outer pb-3">
          <div className="card-body">
            <div className="container">
              <div className="row">
                <div className="card-heading">CÓMO FUNCIONA</div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col col-lg-3 col-md-6 col-sm-12">
                  <div className="card inner text-center">
                    <div className="icon mt-4">
                      <img src={firstImage} alt />
                    </div>
                    {/* <img src="img/1.png" class="text-center" alt="image" style="width:50%;"> */}
                    <div className="card-title mb-0 mt-4"><h6>Elige un apuesta</h6></div>
                    <div className="card-body">
                      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                  </div>
                </div>
                <div className="col col-lg-3 col-md-6 col-sm-12">
                  <div className="card inner text-center">
                    <div className="icon mt-4">
                      <img src={secondImage} alt />
                    </div>
                    {/* <img src="img/1.png" class="text-center" alt="image" style="width:50%;"> */}
                    <div className="card-title mb-0 mt-4"><h6>Investiga sobre el tema</h6></div>
                    <div className="card-body">
                      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                  </div>
                </div>
                <div className="col col-lg-3 col-md-6 col-sm-12">
                  <div className="card inner text-center">
                    <div className="icon mt-4">
                      <img src={thirdImage} alt />
                    </div>
                    {/* <img src="img/1.png" class="text-center" alt="image" style="width:50%;"> */}
                    <div className="card-title mb-0 mt-4"><h6>una apuesta!</h6></div>
                    <div className="card-body">
                      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                  </div>
                </div>
                <div className="col col-lg-3 col-md-6 col-sm-12">
                  <div className="card inner text-center">
                    <div className="icon mt-4">
                      <img src={fourthImage} alt />
                    </div>
                    {/* <img src="img/1.png" class="text-center" alt="image" style="width:50%;"> */}
                    <div className="card-title mb-0 mt-4"><h6>Gana!</h6></div>
                    <div className="card-body">
                      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
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
</section>
     );
}
 
export default Steps;