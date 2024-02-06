import React from 'react'
import Navbar from './Navbar';
import SearchBar from './SearchBar';
import Listitem from './Listitem';
import ImageSlider from './ImageSlider';
import ShopByHealth from './ShopByHealth';
import PopularCategories from './PopularCategories';
import Featured from './Featured';
import Homeopathy from './Homeopathy';
import Wintercare from './Wintercare';
import Ayurveda from './Ayurveda';
import Paragraph from './Paragraph';
import Footer from './Footer';


const HomePage = () => {
  return (
    <div>
        <Navbar/>
        <SearchBar/>
        <Listitem/>
        <ImageSlider/>
     <ShopByHealth/>
     <PopularCategories/>
     <Featured/>
     <Homeopathy/>
     <Wintercare/>
     <Ayurveda/>
     <Paragraph/>
      <Footer/>
    </div>
  )
}

export default HomePage;