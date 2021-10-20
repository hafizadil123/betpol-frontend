import React from 'react';

const VideoSection = () => {
    return ( 
        <>
        <section>
  <div className="container mb-4 mt-4">
    <div className="row">
      <div className="col col-lg-7 col-md-12 col-sm-12">
        <div className="card left pb-2">
          <div className="card-body">
            <div className="container">
              <div className="row">
                <div className="card-heading">ÚLTIMOS ANÁLISIS DE NUESTROS ESPECIALISTAS</div>
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
      <div className="col col-lg-5 col-md-12 col-sm-12">
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
    </div>
  </div>
</section>

        </>
     );
}
 
export default VideoSection;