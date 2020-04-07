import React, { Component } from "react";
import styles from './fifth_section.module.scss';

import { Link } from 'react-router-dom'

import Slider from "react-slick";



import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <div
            // className={className}
            className={styles.next_arrow}
            // style={{ ...style, display: "block", background: "red" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <div
            className={styles.prev_arrow}
            // style={{ ...style, display: "block", background: "green" }}
            onClick={onClick}
        />
    );
}

export default class SimpleSlider extends Component {



    render() {
        const settings = {

            // 1920ox w dół
            // className: "center",
            // centerMode: true,
            // infinite: true,
            // centerPadding: "50px",
            // slidesToShow: 4,
            // lazyLoad: 'ondemand',
            // arrows: false,



            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,

            centerMode: true,
            centerPadding: "140px",

            dots: false,
            arrows: true,




            responsive: [
                {
                    // 1360px w dół
                    breakpoint: 1361,
                    settings: {


                        infinite: true,
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        nextArrow: <SampleNextArrow />,
                        prevArrow: <SamplePrevArrow />,

                        centerMode: true,
                        centerPadding: "160px",

                        dots: false,
                        arrows: true,

                        // centerMode: true,
                        // infinite: true,
                        // centerPadding: '100px',
                        // slidesToShow: 3,

                        // lazyLoad: 'ondemand',
                        // arrows: false,
                    }
                },
                {
                    // 360px w dół
                    breakpoint: 400,
                    settings: {


                        infinite: true,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        // nextArrow: <SampleNextArrow />,
                        // prevArrow: <SamplePrevArrow />,

                        centerMode: true,
                        centerPadding: "46px",

                        dots: false,
                        arrows: false,

                        // className: "center",
                        // centerMode: true,
                        // infinite: true,
                        // centerPadding: "46px",
                        // slidesToShow: 1,
                        // lazyLoad: 'ondemand',
                        // arrows: false,


                    }
                }
            ]
        };


        return (

            <div className={styles.wrapper} id={'portfolio'} >

                <p className={styles.title}>Portfolio</p>



                <div className={styles.slider_wrapper}>
                    <Slider {...settings}>





                        <Link to="/restaurant" >
                            <div className={styles.restaurant}></div>
                        </Link>

                        <Link to="/hotel" >
                            <div className={styles.hotel}></div>
                        </Link>

                        <Link to="/manufacture" >
                            <div className={styles.manufacture}></div>
                        </Link>

                        <Link to="/course" >
                            <div className={styles.course}></div>
                        </Link>

                        <Link to="/conference" >
                            <div className={styles.conference}></div>
                        </Link>

                        <Link to="/travel" >
                            <div className={styles.travel}></div>
                        </Link>
                    </Slider>
                </div>


                {/* <div className={styles.slider_wrapper_small}>
                    <Slider {...settings}>
                        <div className={styles.manufacture_s}></div>
                        <div className={styles.course_s}></div>
                        <div className={styles.conference_s}></div>
                        <div className={styles.travel_s}></div>
                        <div className={styles.restaurant_s}></div>
                        <div className={styles.hotel_s}></div>

                    </Slider>
                </div> */}
            </div>

        );
    }
}