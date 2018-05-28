import React from 'react';
import { Route, Redirect, IndexRedirect } from 'react-router';

export default (
    <Route path='/' component={RootContainer}>
        <IndexRedirect to='/home' />
        <Route path='/home' component={HomeContainer}/>
    </Route>
)