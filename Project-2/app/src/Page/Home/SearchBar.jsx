import React from 'react';

function SearchBar() {
  // Array of Indian states
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

  return (
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
   
  );
}

export default SearchBar;
