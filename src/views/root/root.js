import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import MainView from '../main_view/main_view'
import BlogView from '../blog_view/blog_view'
import WebDesignView from '../web_design_view/web_design_view'
import DevelopmentView from '../development_view/development_view'
import ShopView from '../shop_view/shop_view'
import GraphicDesignView from '../grapgic_design_view/graphic_design_view'
import RestaurantView from '../restaurant_view/restaurant_view'
import HotelView from '../hotel_view/hotel_view'
import ManufactureView from '../manufacture_view/manufacture_view'
import CourseView from '../course_view/course_view'
import ConferenceView from '../conference_view/conference_view'
import TravelView from '../travel_view/travel_view'
import AboutMeView from '../about_me_view/abaut_me_view'


import ScrollToTop from './scroll_to_top'



function Root() {
  return (


    <BrowserRouter>


      <ScrollToTop />

      <Switch>
        <Route exact path="/" component={MainView} />
        <Route path="/blog" component={BlogView} />
        <Route path="/webdesign" component={WebDesignView} />
        <Route path="/development" component={DevelopmentView} />
        <Route path="/shop" component={ShopView} />
        <Route path="/graphicdesign" component={GraphicDesignView} />
        <Route path="/restaurant" component={RestaurantView} />
        <Route path="/hotel" component={HotelView} />
        <Route path="/manufacture" component={ManufactureView} />
        <Route path="/course" component={CourseView} />
        <Route path="/conference" component={ConferenceView} />
        <Route path="/travel" component={TravelView} />
        <Route path="/aboutme" component={AboutMeView} />


      </Switch>








    </BrowserRouter>



  );
}

export default Root;
