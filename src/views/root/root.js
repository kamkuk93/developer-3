import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import MainView from '../main_view/main_view'
import BlogView from '../blog_view/blog_view'


function Root() {
  return (


    <BrowserRouter>




      <Switch>
        <Route exact path="/" component={MainView} />
        <Route path="/blog" component={BlogView} />
      </Switch>








    </BrowserRouter>



  );
}

export default Root;
