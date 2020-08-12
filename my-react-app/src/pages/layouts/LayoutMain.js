import React from 'react';
import Header from '../../components/Main/Header'
import Footer from '../../components/Main/Footer'
import Navbar from '../../components/Main/NavBar';

import '../../assets/css/main/animate.scss'
import '../../assets/css/main/baguetteBox.min.scss'
import '../../assets/css/main/bootstrap-select.scss'
import '../../assets/css/main/bootstrap.min.scss'
import '../../assets/css/main/carousel-ticker.scss'
import '../../assets/css/main/custom.scss'
import '../../assets/css/main/main.scss'
import '../../assets/css/main/code_animate.scss'
import '../../assets/css/main/all.scss'
 import '../../assets/css/main/owl.carousel.min.scss'
import '../../assets/css/main/responsive.scss'
import '../../assets/css/main/style.scss'
import '../../assets/css/main/superslides.scss'

export default ({ children }) => {

    console.log('render Main')

    return (
        <div className="user-page">
            <Header />
            <Navbar />
            <div className="content">
                {children}

            </div>
            <Footer />
        </div>
    )
}
