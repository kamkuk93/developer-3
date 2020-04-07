import React, { Component } from "react";
import styles from './first_slider.module.scss';



import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";




export default class SimpleSlider extends Component {



    render() {
        const settings = {


            // 1920ox w dół
            centerMode: false,
            infinite: false,
            // centerPadding: '100px',
            slidesToShow: 1.15,


            lazyLoad: 'ondemand',

            arrows: false,








            responsive: [
                {
                    // 1360px w dół
                    breakpoint: 1361,
                    settings: {
                        centerMode: false,
                        infinite: false,
                        // centerPadding: '100px',
                        slidesToShow: 1.15,

                        lazyLoad: 'ondemand',
                        arrows: false,
                    }
                },
                {
                    // 360px w dół
                    breakpoint: 361,
                    settings: {

                        // centerMode: false,
                        // infinite: false,
                        // // centerPadding: '100px',
                        // slidesToShow: 1.4,

                        // lazyLoad: 'ondemand',


                        centerMode: true,
                        infinite: false,
                        centerPadding: '43px',
                        slidesToShow: 1,

                        lazyLoad: 'ondemand',
                        arrows: false,



                    }
                }
            ]
        };







        return (

            <div className={styles.wrapper} >
                <Slider {...settings}>


                    <div className={styles.skier}></div>
                    <div className={styles.sea}></div>
                    <div className={styles.concert}></div>
                    <div className={styles.city}></div>


                </Slider>
            </div>

        );
    }
}