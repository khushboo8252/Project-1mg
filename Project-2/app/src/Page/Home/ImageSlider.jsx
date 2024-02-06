import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
   <div id="banner">
        <div className='bannerImage1'>
          <Slider {...settings}>
            <div>
              <a href="medicine.html" target="_blank">
                <img className="bannerImage" src="https://onemg.gumlet.io/5b81e56f-bb2d-44f9-ad91-c98df10e66e8_1704890149.jpg?w=869&h=200&format=auto" alt="banner"/>
              </a>
            </div>
            <div>
              <a href="medicine.html" target="_blank">
                <img className="bannerImage" src="https://onemg.gumlet.io/b157d060-04eb-400a-9209-4c4ec4c96988_1706875314.png?w=869&h=200&format=auto" alt="Ayurveda"/>
              </a>
            </div>
            <div>
              <a href="medicine.html" target="_blank">
                <img className="bannerImage" src="https://onemg.gumlet.io/6f431497-6954-4102-ab92-01fb8805a8ee_1702881479.jpg?w=869&h=200&format=auto" alt="Ayurveda"/>
              </a>
            </div>
            <div>
              <a href="medicine.html" target="_blank">
                <img className="bannerImage" src="https://onemg.gumlet.io/08acfaa3-713f-4d99-bf59-63fab1e74b11_1706694743.png?w=869&h=200&format=auto" alt="Ayurveda"/>
              </a>
            </div>
            <div>
              <a href="medicine.html" target="_blank">
                <img className="bannerImage" src="https://onemg.gumlet.io/4b53b601-e688-4b52-abf4-572ae0d1ff2e_1706787139.png?w=869&h=200&format=auto" alt="Ayurveda"/>
              </a>
            </div>
            <div>
              <a href="medicine.html" target="_blank">
                <img className="bannerImage" src="https://onemg.gumlet.io/08811670-101d-4401-8bb6-9d73396fa86e_1706875530.png?w=869&h=200&format=auto" alt="Ayurveda"/>
              </a>
            </div>
            
          </Slider>
        </div>

        <div className='bannerImage2'>
          <a href="medicine.html" target="_blank">
            <img  src="https://onemg.gumlet.io/a_ignore,w_480,h_200,c_fit…o,f_auto/85bbe9a7-230b-4836-bff3-d5f451b426a7.png" alt="Ayurveda"/>
          </a>
        </div>
    </div>
      

      <div id="BannerHeding">Tata 1mg: India’s Leading Online Pharmacy & Healthcare Platform</div>

      <div id="BannerWithBtn">
        <a href="care-plan.html">
          <img id="bannerImageBtn" src="https://onemg.gumlet.io/image/upload/v1647251796/ueyxzzku83yuvpqxyrwe.png" alt=""/>
        </a>
      </div>
 </>
  );
};

export default ImageSlider;
