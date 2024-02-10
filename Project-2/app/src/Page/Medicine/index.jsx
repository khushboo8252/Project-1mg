import { useState } from 'react';
import LoginPage from '../Login';
import { red } from '@mui/material/colors';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const MedicinePage = () => {
    const [open, setOpen] = useState(false);

    const openDialog = () => {
      setOpen(true);
    }

    const indianStates = [
        'Andhra Pradesh',
        'Arunachal Pradesh',
        'Assam',
        'Bihar',
        'Chhattisgarh',
        'Goa',
        'Gujarat',
        'Haryana',
        'Himachal Pradesh',
        'Jharkhand',
        'Karnataka',
        'Kerala',
        'Madhya Pradesh',
        'Maharashtra',
        'Manipur',
        'Meghalaya',
        'Mizoram',
        'Nagaland',
        'Odisha',
        'Punjab',
        'Rajasthan',
        'Sikkim',
        'Tamil Nadu',
        'Telangana',
        'Tripura',
        'Uttar Pradesh',
        'Uttarakhand',
        'West Bengal',
        'Andaman and Nicobar Islands',
        'Chandigarh',
        'Dadra and Nagar Haveli and Daman and Diu',
        'Delhi',
        'Ladakh',
        'Lakshadweep',
        'Puducherry'
      ];

      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };

      const handleAddToCart = () => {
        alert('Item added to cart!');
      };
  return (
    <div>
        <div className='Navbar-contair'>
      <div className='Navbar-upper'>
        <a href="/">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAeFBMVEX///8AAACxsbFQUFBoaGiCgoJJSUnX19fr6+u4uLj09PRUVFSjo6Pv7+/AwMCZmZlhYWEgICDIyMjPz889PT17e3syMjLV1dXd3d0nJyednZ2RkZEZGRmIiIgPDw+oqKgjIyPj4+NkZGRycnIuLi48PDxERESEhIS5rTLQAAAE5klEQVR4nO2Z7ZayIBRG7bssramx7MO3cZxp7v8O3xThHBQ0aWbVaj37lx4B2YKA6HkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+HPi1fDKKvC8+eAOLptHi1hJegVTz+vdxezRIjaCnjL895qG2xc33JxkBV/R0E/7A6rgCxou9Aq+4EhzrhlGw65kkWSUTKx3Svs2ztMyyXEpOa7LkB9KatnkrRYq13Jxk+Ff0bc3fKmj9acyV2rPtRQpdjwWP9JwZq9ruUzY8lgoYlN7roNIEfHYqH7f+nuYxgXXa/3VddTZJuK5BMdxcZZq2f1Z8rmKFtckgcjmuxvGWmx1q6EetN5eNvXV8FImDVWu6Jpgqc4yyjUdyuB7cBAHfXfDHz0Y3GZYKdY60k3IcF4c7HnjZl7GzvaynbTCs5Y7tBtWgovbDAd6cHyzoY4eG4g8Z0PCOwzDSnB/k2Htemq5fYthhWLs2xgvuRuuqtHJLYbLavT4K4bDPMvJeMluGPZOOW9szfRvW3DaebT2JyJhKHLxu4lcH+f8+r6a618Hw1OW8fF7ENGVa46DupAd2VvavqahjL1PFq4M6jmmCl75YOFdPdfaM2IwjPTq5H1mKp+YT+NCUuRXk1K7IetXKxb+qteVl8UM31g4q+fihTYafosL8u0QE7Ccsnz18JLKrVwN9clQwMdFi6EhV888JdcNy4mtHB9k7z7JQmTjygL8Ow1HKhi9qUO2wjIb0ug1v6hD0+LUZFh253LEvJTp3qVh2WZDVcL8PkMKxrQMY+Oi2ZAmwxm9T1snQ9lhqoZUh9YZv9GQTYbeWh2ycdFoyKYSP6Vj4/eNaxuS4eddhjRF/fD2pHHRaEhFDfi8Ef2KYaJKLundY8gmwx0fIOklMBrSG9vXyv0VQ/mOy0WS7GZuhjQZ5lMtdVMaF02GOy1dSmemSnQ2lE/9S9Qhbiq83ZBWFj/5KaU4NxlGekFUyMCr09nQG8viDnG6oQ8fJ0NW/Z1e9a8mQwoVd2WLJcOHfHdD1pU4ToY0GZ74TXPkuGgwZEv54jylc8Pyu7uhZYXuZFirGgXk97bBUPUiub79VgHD8tvB0DdurLoYssmwbLKEIlZDNhmWezps8V7/QeRg6AW1LxdHQ/oylM3DfPo2w2PtKbA5Z+hVcTHUdlaSyNnQp4B6f2ime7cZUhdSO0fUb+vLbzdDb5qIpfh87Q2dDVnnUtudrIFSsyEbjdTKh+2rnL0KbK9tbDIsv6Xk0og9oSCOA/b8LN+fTYY0QOxVIvYx9WM2HFJA5WK9ob78DgR5MnXELkglsZkqh/A4pAK0J94Ea555RYYN8mzXojjnH/MVGba9ybrprrUirayjD/b4Ql6dRjaHhaTo0qn6MxGyrjGhvxrFw55SrqIDTs8qAZve2b8Rw/5+N8qXR37iy6nDsoXwBKTf4w5sfdVmomPFcpfl+X6uSUzbJA2wnahedhypHQTbVt4T0N3QuONt/2vxcLobmtal80drNOBgyIdmwb7tLo/ExVD/N/nM42iOk6E3YX9TLmHzHR7NNBp1IFJTsx8es/lgmMz+8Pc4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8Hz8B8nESgNvlUasAAAAAElFTkSuQmCC" alt="1mg Image" />
        </a>
      </div>

      <div className='Navbar-middile'>
        <ul>
          <li><a href='/'>MEDICINES</a></li>
          <li><a href='/'>LAB TESTS</a></li>
          <li><a href='/'>CONSULT DOCTORS</a></li>
          <li><a href='/'>CANCER CARE</a></li>
          <li><a href='/'>AYURVEDA</a></li>
          <li><a href='/'>CARE PLAN</a></li>
        </ul>
      </div>

      <div className='Navbar-lower'>
        <div className='Navbar-lower-1st'>
          <button style={{marginRight:15,padding:3,color:"grey",border:'none'}} onClick={() => openDialog()}>Login | Signup</button>
         
        </div>
        <div className='Navbar-lower-2nd'>
          <a href="/">Offers</a>
        </div>
        <div className='Navbar-lower-3rd'>
          <a href="/">
            <img src="https://st2.depositphotos.com/6628792/9630/v/950/depositphotos_96308306-stock-illustration-shopping-cart-icon.jpg" alt="cart counter" />
          </a>
        </div>
        <div className='Navbar-lower-4th'>
          <a href="/">Need Help</a>
        </div>
        <LoginPage open={open} setOpen={setOpen} />
      </div>
    </div>

    <div className="search-container">
      
      <div className="search-first">
        <div className="search-first-left">
          <div className='location-icon'>
            <img src="data:image/png;base64,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" alt="map icon" />
          </div>
          <div className='location-input'>
             <select>
            {/* Mapping through the array to create options */}
            {indianStates.map((state, index) => (
              <option key={index} value={state}>{state}</option>
            ))}
             </select>
          </div>
        </div>
        <div className="search-first-right">
          <div className='search-input'>
          <form>
             <input type="text" placeholder="Search for Medicines and Products" />
        </form>
          </div>
          <div className='serach-icon'>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSosQ_-OJoMuu_xoLWn-iE3su1s-1QPYuPVpg&usqp=CAU" alt="search bar" />
          </div>
        </div>
      </div>

      <div className="search-second">
        <div className="search-second-left">
          <span>QUICK BUY! Get 15% off on medicines*</span>
        </div>
        <div className="search-second-right">
            <div className='search-quickOrder'>
            <a href="/">Quick Order</a>
            </div>
          
        </div>
      </div>
    </div>
    <div id="dropdowndiv">
        <div class="dropdown">
            <button class="dropbtn">Health Resource Center</button>
            <div class="dropdown-content">
              <a href="#">All Dieases</a>
              <a href="#">All Medicines</a>
              <a href="#">Medicines by therapeutic Class</a>
            </div>
        </div>
        <div class="dropdown">
            <button class="dropbtn">Vitamins & Nutrition</button>
            <div class="dropdown-content">
                <a href="/">Multivitamins</a>
                <a href="/">Vitamin D3</a>
                <a href="/">Vitamin C</a>
                <a href="/">Minerals</a>
                <a href="/">Calcium</a>
                <a href="/">Vitamin B12 & B Complex</a>
                <a href="/">Minerals</a>
            </div>

        </div>
        <div class="dropdown">
            <button class="dropbtn">Personal Care</button>
            <div class="dropdown-content">
                <a href="/">Body Lotions</a>
                <a href="/">Mosquito Repellents</a>
                <a href="/">Lip Balm</a>
                <a href="/">Acne Care</a>
                <a href="/">Bath Essentials</a>
                <a href="/">Facewash</a>
                <a href="/">Sanitizers & Handwash</a>
                <a href="/">Sunscreen</a>
                <a href="/">Cetaphil</a>
            </div>
        </div>
        <div class="dropdown">
            <button class="dropbtn">Healthcare Devices</button>
            <div class="dropdown-content">
            <a href="/">BP Monitors</a>
                <a href="/">Nebulizers & Vaporizers</a>
                <a href="/">Smart Wearables</a>
                <a href="/">Weighing Scales</a>
                <a href="/">Thermometers</a>
                <a href="/">Respiratory & Surgical Mask</a>
                <a href="/">Pulse Oximeter</a>
                <a href="/">Stethoscopes</a>
            </div>
        </div>
        <div class="dropdown">
            <button class="dropbtn">Ayurveda Products</button>
            <div class="dropdown-content">
            <a href="/">Herbal Juice</a>
                <a href="/">Chyawanparash</a>
                <a href="/">Ayurvedic Immunity Boosters</a>
                <a href="/">Unani Medicines</a>
                <a href="/">Herbal Supplements</a>
            </div>
        </div>
        <div class="dropdown">
            <button class="dropbtn">Diabetes</button>
            <div class="dropdown-content">
            <a href="/">Juices & Vinegars</a>
            <a href="/">Diabetic Nutrition Supplements</a>
            <a href="/">Vitamins, Minerals & Antioxidants</a>
            </div>
        </div>
        <div class="dropdown">
            <button class="dropbtn">Health Conditions</button>
            <div class="dropdown-content">
            <a href="/">Constipation</a>
            <a href="/">General Digestion/Indigestion</a>
            <a href="/">Loose motion/Diarrhoea</a>
            </div>
        </div>
        <div class="dropdown">
            <button class="dropbtn">Homeopathy</button>
            <div class="dropdown-content">
                <a href="/">SBL Homeopathy</a>
                <a href="/">Dr Reckeweg</a>
                <a href="/">Dr Willmar Schwabe India</a>
                <a href="/">Adel Pekana</a>
                <a href="/">BJAIN Homeopathy</a>
                <a href="/">Bakson's</a>
                <a href="/">Allen</a>
                <a href="/">Dr Willmar Schwabe Germany</a>
                <a href="/">Haslab</a>
                <a href="/">Medisynth</a>
                <a href="/">Boiron</a>
                <a href="/">Bhandari</a>
                <a href="/">Dr Bakshi Bakson</a>
                <a href="/">Dr Batra's</a>
            </div>
        </div>
        <div class="dropdown">
            <button class="dropbtn">Featured</button>
            <div class="dropdown-content">
                <a href="/">Body & Skin Care</a>
                <a href="/">Winter Hair & Scalp Care</a>
                <a href="/">Cough & Cold</a>
                <a href="/">Headache & Fever</a>
                <a href="/">Vaporizers & Nebulizers</a>
                <a href="/">Heating Ai</a>
                <a href="/">Best Combos</a>
            </div>
        </div>
    </div>
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
      <div className='container'>
          <div className='card' style={{height:"400px",padding:"10px"}}>
             <img className="image-cart"src="https://loremflickr.com/640/480/food" alt="" />
             <h4>Licensed Rubber Table</h4>
             <p style={{fontSize:"small"}}>New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016</p>
             <p style={{color:"orange"}}>★★★☆☆</p>
             <p style={{fontSize:"small",color:"green"}}>65204 Ratings & 258 Reviews</p>
             <div className='add-cart'>
                <p>₹ 731.00</p>
                <button onClick={handleAddToCart} className='button-cart' style={{fontSize:"small",color:"white",background:"red",border:"none"}}>Add to cart</button>
             </div>
          </div>
          <div className='card' style={{height:"400px",padding:"10px"}}>
             <img className="image-cart"src="https://loremflickr.com/640/480/people" alt="" />
             <h4>Modern Plastic Computer</h4>
             <p style={{fontSize:"small"}}>Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles</p>
             <p style={{color:"orange"}}>★★★☆☆</p>
             <p style={{fontSize:"small",color:"green"}}>53928 Ratings & 389 Reviews</p>
             <div className='add-cart'>
                <p>₹ ₹ 700.00</p>
                <button onClick={handleAddToCart} className='button-cart' style={{fontSize:"small",color:"white",background:"red",border:"none"}}>Add to cart</button>
             </div>
          </div>
          <div className='card' style={{height:"400px",padding:"10px"}}>
             <img className="image-cart"src="https://loremflickr.com/640/480/technics" alt="" />
             <h4>Small Wooden Table</h4>
             <p style={{fontSize:"small"}}>The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J</p>
             <p style={{color:"orange"}}>★★★☆☆</p>
             <p style={{fontSize:"small",color:"green"}}>63985 Ratings & 183 Reviews</p>
             <div className='add-cart'>
                <p>₹ 77.00</p>
                <button onClick={handleAddToCart} className='button-cart' style={{fontSize:"small",color:"white",background:"red",border:"none"}}>Add to cart</button>
             </div>
          </div>
          <div className='card' style={{height:"400px",padding:"10px"}}>
             <img className="image-cart"src="https://loremflickr.com/640/480/business" alt="" />
             <h4>Awesome Plastic Towels</h4>
             <p style={{fontSize:"small"}}>New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016</p>
             <p style={{color:"orange"}}>★★★☆☆</p>
             <p style={{fontSize:"small",color:"green"}}>77598 Ratings & 67 Reviews</p>
             <div className='add-cart'>
                <p>₹ 166.00</p>
                <button onClick={handleAddToCart} className='button-cart' style={{fontSize:"small",color:"white",background:"red",border:"none"}}>Add to cart</button>
             </div>
          </div>
          <div className='card' style={{height:"400px",padding:"10px"}}>
             <img className="image-cart"src="https://loremflickr.com/640/480/nightlife" alt="" />
             <h4>Practical Plastic Shirt</h4>
             <p style={{fontSize:"small"}}>The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality</p>
             <p style={{color:"orange"}}>★★★☆☆</p>
             <p style={{fontSize:"small",color:"green"}}>52073 Ratings & 12 Reviews</p>
             <div className='add-cart'>
                <p>₹ 730.00</p>
                <button onClick={handleAddToCart} className='button-cart' style={{fontSize:"small",color:"white",background:"red",border:"none"}}>Add to cart</button>
             </div>
          </div>
          <div className='card' style={{height:"400px",padding:"10px"}}>
             <img className="image-cart"src="https://loremflickr.com/640/480/animals" alt="" />
             <h4>Bespoke Plastic Chair</h4>
             <p style={{fontSize:"small"}}>Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals</p>
             <p style={{color:"orange"}}>★★★☆☆</p>
             <p style={{fontSize:"small",color:"green"}}>56389 Ratings & 3 Reviews</p>
             <div className='add-cart'>
                <p>₹ 518.00</p>
                <button onClick={handleAddToCart} className='button-cart' style={{fontSize:"small",color:"white",background:"red",border:"none"}}>Add to cart</button>
             </div>
          </div>
          <div className='card' style={{height:"400px",padding:"10px"}}>
             <img className="image-cart"src="https://loremflickr.com/640/480/nightlife" alt="" />
             <h4>Awesome Metal Bacon</h4>
             <p style={{fontSize:"small"}}>New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016</p>
             <p style={{color:"orange"}}>★★★☆☆</p>
             <p style={{fontSize:"small",color:"green"}}>21866 Ratings & 258 Reviews</p>
             <div className='add-cart'>
                <p>₹ 773.00</p>
                <button onClick={handleAddToCart} className='button-cart' style={{fontSize:"small",color:"white",background:"red",border:"none"}}>Add to cart</button>
             </div>
          </div>
          <div className='card' style={{height:"400px",padding:"10px"}}>
             <img className="image-cart"src="https://loremflickr.com/640/480/business" alt="" />
             <h4>Intelligent Rubber Hat</h4>
             <p style={{fontSize:"small"}}>Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles</p>
             <p style={{color:"orange"}}>★★★☆☆</p>
             <p style={{fontSize:"small",color:"green"}}>24142  Ratings & 258 Reviews</p>
             <div className='add-cart'>
                <p>₹ 338.00</p>
                <button onClick={handleAddToCart} className='button-cart' style={{fontSize:"small",color:"white",background:"red",border:"none"}}>Add to cart</button>
             </div>
          </div>
          <div className='card' style={{height:"400px",padding:"10px"}}>
             <img className="image-cart"src="https://loremflickr.com/640/480/city" alt="" />
             <h4>Recycled Frozen Fish</h4>
             <p style={{fontSize:"small"}}>Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals</p>
             <p style={{color:"orange"}}>★★★☆☆</p>
             <p style={{fontSize:"small",color:"green"}}>10631  Ratings & 258 Reviews</p>
             <div className='add-cart'>
                <p>₹ 954.00</p>
                <button onClick={handleAddToCart} className='button-cart' style={{fontSize:"small",color:"white",background:"red",border:"none"}}>Add to cart</button>
             </div>
          </div>
          <div className='card' style={{height:"400px",padding:"10px"}}>
             <img className="image-cart"src="https://loremflickr.com/640/480/fashion" alt="" />
             <h4>Electronic Frozen Salad</h4>
             <p style={{fontSize:"small"}}>Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals</p>
             <p style={{color:"orange"}}>★★★☆☆</p>
             <p style={{fontSize:"small",color:"green"}}>15726  Ratings & 258 Reviews</p>
             <div className='add-cart'>
                <p>₹ 566.00</p>
                <button onClick={handleAddToCart} className='button-cart' style={{fontSize:"small",color:"white",background:"red",border:"none"}}>Add to cart</button>
             </div>
          </div>
          <div className='card' style={{height:"400px",padding:"10px"}}>
             <img className="image-cart"src="https://loremflickr.com/640/480/food" alt="" />
             <h4>Ergonomic Granite Towels</h4>
             <p style={{fontSize:"small"}}>Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals</p>
             <p style={{color:"orange"}}>★★★☆☆</p>
             <p style={{fontSize:"small",color:"green"}}>75188  Ratings & 258 Reviews</p>
             <div className='add-cart'>
                <p>₹  284.00</p>
                <button onClick={handleAddToCart} className='button-cart' style={{fontSize:"small",color:"white",background:"red",border:"none"}}>Add to cart</button>
             </div>
          </div>
          <div className='card' style={{height:"400px",padding:"10px"}}>
             <img className="image-cart"src="https://loremflickr.com/640/480/nightlife" alt="" />
             <h4>Oriental Fresh Chicken</h4>
             <p style={{fontSize:"small"}}>The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality</p>
             <p style={{color:"orange"}}>★★★☆☆</p>
             <p style={{fontSize:"small",color:"green"}}>81390  Ratings & 258 Reviews</p>
             <div className='add-cart'>
                <p>₹ 25.00</p>
                <button onClick={handleAddToCart} className='button-cart' style={{fontSize:"small",color:"white",background:"red",border:"none"}}>Add to cart</button>
             </div>
          </div>
          <div className='card' style={{height:"400px",padding:"10px"}}>
             <img className="image-cart"src="https://loremflickr.com/640/480/business" alt="" />
             <h4>Generic Wooden Hat</h4>
             <p style={{fontSize:"small"}}>The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design</p>
             <p style={{color:"orange"}}>★★★☆☆</p>
             <p style={{fontSize:"small",color:"green"}}>69194  Ratings & 258 Reviews</p>
             <div className='add-cart'>
                <p>₹ 173.00</p>
                <button onClick={handleAddToCart} className='button-cart' style={{fontSize:"small",color:"white",background:"red",border:"none"}}>Add to cart</button>
             </div>
          </div>
          <div className='card' style={{height:"400px",padding:"10px"}}>
             <img className="image-cart"src="https://loremflickr.com/640/480/abstract" alt="" />
             <h4>Licensed Soft Towels</h4>
             <p style={{fontSize:"small"}}>New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016</p>
             <p style={{color:"orange"}}>★★★☆☆</p>
             <p style={{fontSize:"small",color:"green"}}>10586  Ratings & 258 Reviews</p>
             <div className='add-cart'>
                <p>₹ 254.00</p>
                <button onClick={handleAddToCart} className='button-cart' style={{fontSize:"small",color:"white",background:"red",border:"none"}}>Add to cart</button>
             </div>
          </div>
          <div className='card' style={{height:"400px",padding:"10px"}}>
             <img className="image-cart"src="https://loremflickr.com/640/480/sports" alt="" />
             <h4>Electronic Plastic Car</h4>
             <p style={{fontSize:"small"}}>The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients</p>
             <p style={{color:"orange"}}>★★★☆☆</p>
             <p style={{fontSize:"small",color:"green"}}>19369  Ratings & 258 Reviews</p>
             <div className='add-cart'>
                <p>₹ 568.00</p>
                <button className='button-cart' style={{fontSize:"small",color:"white",background:"red",border:"none"}} onClick={handleAddToCart}>Add to cart</button>
             </div>
          </div>
          <div className='card' style={{height:"400px",padding:"10px"}}>
             <img className="image-cart"src="https://loremflickr.com/640/480/nightlife" alt="" />
             <h4>Intelligent Frozen Chips</h4>
             <p style={{fontSize:"small"}}>Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles</p>
             <p style={{color:"orange"}}>★★★☆☆</p>
             <p style={{fontSize:"small",color:"green"}}>86652  Ratings & 258 Reviews</p>
             <div className='add-cart'>
                <p>₹ 993.00</p>
                <button className='button-cart' style={{fontSize:"small",color:"white",background:"red",border:"none"}} onClick={handleAddToCart}>Add to cart</button>
             </div>
          </div>
      </div>
      <div id="secondLastdiv">
        <div id="c">INDIA’S LARGEST HEALTHCARE PLATFORM</div>
        <div id="inside">
          <div>
            <h1>260m+</h1>
            <p>Visitors</p>
          </div>
          <div>
            <h1>31m+</h1>
            <p>Orders Delivered</p>
          </div>
          <div>
            <h1>1800+</h1>
            <p>Cities</p>
          </div>
        </div>
        <hr />
        <div id="get">
          <div >Get the link to download App</div>
          <div>
            <input id="phone-number" type="tel" maxLength="10" autoComplete="off" placeholder="Enter Phone Number" />
            <button className="btn" style={{ fontSize: "large", padding: "8px" }}>Send Link</button>
          </div>
        </div>
      </div>
      <footer id="footer">
        <div id="Footer">
          <div className="links">
            <h3>Know Us</h3>
            <div><a href="#">About Us</a></div>
            <div><a href="#">Contact Us</a></div>
            <div><a href="#">Press Coverage</a></div>
            <div><a href="#">Careers</a></div>
            <div><a href="#">Business Partnership</a></div>
            <div><a href="#">Become a Health Partner</a></div>
            <div><a href="#">Corporate Governance</a></div>
          </div>
          <div className="links">
            <h3>Our Policies</h3>
            <div><a href="#">Privacy Policy</a></div>
            <div><a href="#">Terms and Conditions</a></div>
            <div><a href="#">Editorial Policy</a></div>
            <div><a href="#">Return Policy</a></div>
            <div><a href="#">IP Policy</a></div>
            <div><a href="#">Grievance Redressal Policy</a></div>
            <div><a href="#">Fake Jobs and Fraud Disclaimer</a></div>
          </div>
          <div className="links">
            <h3>Our Services</h3>
            <div><a href="#">Order Medicines</a></div>
            <div><a href="#">Book Lab Tests</a></div>
            <div><a href="#">Consult a Doctor</a></div>
            <div><a href="#">Ayurveda Articles</a></div>
            <div><a href="#">Hindi Articles</a></div>
            <div><a href="#">Care Plan</a></div>
          </div>
          <div className="links">
            <h3>Connect</h3>
            <p>Social Links</p>
            <div id="social">
              <a href="https://www.facebook.com/profile.php?id=100005418004578" target="_blank"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAclBMVEU6VZ/////p7PR8jLzz9fkwTpySn8czUJ2ElMItTJs7WKOpss+msNAnSJnK0eT6+v2Xps3f4+9cca5KY6fU2upSaalDXaVme7SKmcScqMvP1OTj5vDs7/XGzeIiRZhZca+1vtqxutW+x+B2h7mAjrxugLacEYxHAAADBklEQVR4nO3baXLiMBBAYQdsFDkGwr4MJEAy97/iMPmdOLJUortV7x3Apa8Mkhe5qoiIiIiIiIiIiIiIiIiI1Oecaxrfm5MeY3TOT5vtZvexP3S97Y0SfbM8HBeLP6NTPe/t6TyVHmtE/u29W9Tzp6Bm5oSuWnanMJxJoWt3lwE8e0K3G3T+zAn9/e830GdL6J/Xg32mhO516A/UltC1L4HLg1GhW52jfGaEbjd8ijEldMtRLNCG0K1iJlFLwvYWDzQhdC8JQAtCP6nLFjYf8bOMCaHbzJKA+oXVPg2oX7hJWChMCN0kEaheuI26nzAk9F0qULuwTQYqFzapE6l64fRYunCVdL1mQNjs4x5c2BH62CcXZoSb6EcXRoTuOXm5v3dULPTdgL9hfbwcXr9rrPj9oQ9+B1PPxtXU++a7FAOrJnSiWY9VO36uDbz3va0a6aFGtgq7orlsbZ7A+1T6HnTzO9tYBQY+yT99mAVWLugh27WVHmd8bhwgHBk+hWHC40Z6mAkFCW9WF4r/BQlfvPQwEwoR1ofSz2E9Qag5hAj1hxCh/hAi1B9ChPpDiFB/CBHqDyFCJbmf80FC33OEr4R9y+ef++x+3xE1v3z2HOEr2XdTPuk7g7Bkf8YPENZvpQvXshuGHiC8yL6ceoDwtfj/ofCmrwcIl8ULV6LABwhP29KFa1ngA4S34oVd8cJJ8ULpTWH5hbvShSfhBT+/cC29sS+78Cx8SZNfeBW+pMkvPAgD8wsn0juIsws/SxeO/pYuXOyEgdmF8l+b5BbepJfD7EL5z01yCzvxnfyZhXP5d2+ZhSfx5TC3cCG+HOYWrqXvDrMLZ+KLRW7hWdp3F16zCm/ii0VVtT2F7cVwPUeQ1v1WE7YXQ3qYCRWyn6YnhAj1hxCh/hAi1B9ChPpDiFB/CBHqDyFC/SFEqD+ECPWHEKH+ECLUH0KE+kOIUH8IEeoPIUL9IUSoP4QI9YcQof4QItQfQoT6Q4hQfwgR6g8hQv0hRKg/hAj1hxCh/hAi1B9ChAP6B1ndUcZ6wYWaAAAAAElFTkSuQmCC" alt="" /></a>
              <a href="https://www.instagram.com/zaidalifsiddique/?hl=en" target="_blank"><img src="data:image/jpeg;base64,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" alt="" /></a>
              <a href="https://twitter.com/mdzaidsiddique" target="_blank"><img src="data:image/png;base64,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" alt="" /></a>
              <a href="https://www.youtube.com/channel/UCRscylxrK6ROgCIZox0GChg" target="_blank"><img src="data:image/png;base64,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" alt="" /></a>
              <a href="https://www.linkedin.com/in/md-zaid-siddique-3970611ab/" target="_blank"><img src="data:image/png;base64,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" alt="" /></a>
              <a href="https://medium.com/@zaidsiddique624" target="_blank"><img src="data:image/png;base64,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" alt="" /></a>
            </div>
            <p>Want daily dose of health?</p>
            <button className="btn">SIGN UP</button>
          </div>
          <div className="links" style={{ marginLeft: '10px', marginTop: '5px' }}>
            <h3>Download App</h3>
            <div><a href="https://play.google.com/store/apps/details?id=com.aranoah.healthkart.plus" target="_blank"><img src="data:image/png;base64,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" alt="" /></a></div>
            <div><a href="https://apps.apple.com/in/app/1mg/id554578419" target="_blank"><img style={{ width: '105px' }} src="data:image/png;base64,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" alt="" /></a></div>
          </div>
        </div>
        <hr />
        <div id="RSA">
          <div className="rsa">
            <div id="img"> <img src="data:image/png;base64,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" alt="" /></div>
            <div>
              <h1>Reliable</h1>
              <p>All products displayed on Tata 1mg are procured from verified and licensed pharmacies. All labs listed on the platform are accredited</p>
            </div>
          </div>
          <div className="rsa">
            <div id="img"> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxfFkxuaUiNAUf1TMipWufWsbSrQVwzpv4zw&usqp=CAU" alt="" /></div>
            <div>
              <h1>Secure</h1>
              <p>Tata 1mg uses Secure Sockets Layer (SSL) 128-bit encryption and is Payment Card Industry Data Security Standard (PCI DSS) compliant</p>
            </div>
          </div>
          <div className="rsa">
            <div id="img"> <img src="data:image/jpeg;base64,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" alt="" /></div>
            <div>
              <h1>Affordable</h1>
              <p>Find affordable medicine substitutes, save up to 50% on health products, up to 80% off on lab tests and free doctor consultations.</p>
            </div>
          </div>
        </div>
        <hr />
        <div id="iso">
          <div id="iiso">
            <div><a href="https://www.legitscript.com/" target="_blank"><img src="https://static.legitscript.com/seals/729605.png" alt="ISO" /> </a></div>
            <div><img src="https://onemg.gumlet.io/URS_ebgmxc.png" alt="" /></div>
          </div>
          <div style={{ textAlign: 'center' }}><b>India's only LegitScript and ISO/ IEC 27001 certified online healthcare platform</b></div>
        </div>
        <button className="collapsible">Know more about Alif Medicaments</button>
        <div className="content">
          <h3>Access medical and health information</h3>
          <p>Tata 1mg provides you with medical information which is curated, written and verified by experts, accurate and trustworthy. Our experts create high-quality content about medicines, diseases, lab investigations, Over-The-Counter (OTC) health products, Ayurvedic herbs/ingredients, and alternative remedies.</p>
          <h3>Order medicines online</h3>
          <p>Get free medicine home delivery in over 1800 cities across India. You can also order Ayurvedic, Homeopathic and other Over-The-Counter (OTC) health products. Your safety is our top priority. All products displayed on Tata 1mg are procured from verified and licensed pharmacies.</p>
          <h3>Book lab tests</h3>
          <p>Book any lab tests and preventive health packages from certified labs and get tested from the comfort of your home. Enjoy free home sample collection, view reports online and consult a doctor online for free.</p>
          <h3>Consult a doctor online</h3>
          <p>Got a health query? Consult doctors online from the comfort of your home for free. Chat privately with our registered medical specialists to connect directly with verified doctors. Your privacy is guaranteed.</p>
        </div>
        <hr />
        <div id="last">
          <p>© 2024 Tata 1mg. All rights reserved. All medicines are dispensed in compliance with Drugs and Cosmetics Act, 1940 and Drugs and Cosmetics Rules, 1945, we do not process requests for Schedule X and other habit forming drugs.</p>
          <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlKaYFu855kzoydaqxJyEJZPwLXkbBG2OPlA&usqp=CAU" alt="payments" /></div>
        </div>
      </footer>
    </div>
  )
}

export default MedicinePage;