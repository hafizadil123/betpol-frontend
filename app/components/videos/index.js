import React from 'react';

const VideoSection = ({ contestDetails }) => {

   const filterVideos = contestDetails && contestDetails.length > 0 && contestDetails.map(item => item.contestDetails);

  const videos = [].concat(...filterVideos || []);
  console.log('active', videos)
  return (
    <>
      <section>
        <div className="container mb-4 mt-4">
          <div className="row">
            <section>
              <div className="container mt-4">
                <div className="row">
                  <div className="col-lg-7 col-md-7 col-sm-12">
                    <div id="carouselExampleDark1" className="carousel carousel-dark slide" data-bs-ride="carousel">
                      <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleDark1" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                        <button type="button" data-bs-target="#carouselExampleDark1" data-bs-slide-to={1} aria-label="Slide 2" />
                        <button type="button" data-bs-target="#carouselExampleDark1" data-bs-slide-to={2} aria-label="Slide 3" />
                      </div>
                      <div className="carousel-inner">
                        {videos && videos && videos.length > 0 && videos.map((item, index) =>
                          <div className={`card left carousel-item ${index === 0 && 'active'}`} data-bs-interval={2000}>
                            <div className="card-body">
                              <div className="container">
                                <div className="row">
                                  <div className="card-heading">CÓMO FUNCIONA LA PÁGINA?</div>
                                </div>
                              </div>
                          {item && item.contestNewsLink && item.contestNewsLink.length > 0 && item.contestNewsLink.map(el => 
                             <div className="container p-1">
                             <div className="row">
                               <iframe width={560} height={315} src={`${el.news_link}`} title={el.news_name} frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                             </div>
                           </div>
                            )}
                             
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
                  <div className="col col-lg-5 col-md-5 col-sm-12">
                    <div className="card right pb-2">
                      <div className="card-body">
                        <div className="container">
                          <div className="row">
                            <div className="card-heading">CÓMO FUNCIONA LA PÁGINA?</div>
                          </div>
                        </div>
                        <div className="container p-1">
                          <div className="row">
                            <iframe width={560} height={315} src="https://www.youtube.com/embed/rJjkVqik7UA" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div></div>
            </section>


          </div>
        </div>
      </section>

    </>
  );
}

export default VideoSection;