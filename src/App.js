import React from "react";
import './App.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
      <div className="App">
        <div className="MainTop">
          <div className="Start">
            Start > Repertuar > Lublin-Plaza
            <div className="Duzy">
              LUBLIN-PLAZA
            </div>
          </div>
          <button className="Wybierz">Wybierz inne kino</button>
        </div>
        <div className='MainBottom'>
          <Slider {...settings}>
            <div>
              <img src="https://www.cinema-city.pl/static/dam//jcr:52b2e1a2-6c55-4902-830d-cc5a524a59e7" alt="Image 1"/>
            </div>
            <div>
              <img src="https://www.cinema-city.pl/static/dam//jcr:30ef8c68-78cf-47c3-8a59-f9d795ffde60" alt="Image 2"/>
            </div>
            <div>
              <img src="https://www.cinema-city.pl/static/dam//jcr:b736b5a2-cf36-47f3-bd49-ccdc5f10a6d4" alt="Image 3"/>
            </div>
            <div>
              <img src="https://www.cinema-city.pl/static/dam//jcr:d35b8bc5-db97-4c71-a462-bf68727099eb" alt="Image 1"/>
            </div>
            <div>
              <img src="https://www.cinema-city.pl/static/dam//jcr:918432b5-3706-4d1f-a361-2b474c1378f0" alt="Image 2"/>
            </div>
            <div>
              <img src="https://www.cinema-city.pl/static/dam//jcr:c361293b-9a07-4268-86c3-b843225cd989" alt="Image 3"/>
            </div>
            <div>
              <img src="https://www.cinema-city.pl/static/dam//jcr:081f66be-8687-4fc4-9a42-fec9bd85b000" alt="Image 3"/>
            </div>

          </Slider>
        </div>
      </div>
  );
}

export default App;