import React from 'react';
import Hero from './Hero';
import LeftSection from './LeftSection';
import RightSection from './RightSection';
import Universe from './Universe';
import Navbar from '../Navbar';
import Footer from '../Footer';
function ProductPage() {
    return (<>
    <div>
        <Hero/>
        <LeftSection/>
        <RightSection/>
        <Universe/>
        
    </div>
     </>  );
}

export default ProductPage;