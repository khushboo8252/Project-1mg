import { useState } from 'react';
import LoginPage from '../Login';
import { red } from '@mui/material/colors';

function Navbar() {
  const [open, setOpen] = useState(false);

  const openDialog = () => {
    setOpen(true);
  }

 

  return (
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
          <button style={{marginRight:15,padding:3,color:red,border:'none'}} onClick={() => openDialog()}>Login | Signup</button>
         
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
  );
}

export default Navbar;
