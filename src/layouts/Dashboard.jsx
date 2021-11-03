import React from 'react'
import {Route} from 'react-router-dom';
import ProductList from '../pages/ProductList'
import Categories from './Categories';
import { Grid } from 'semantic-ui-react'
import ProductDetail from '../pages/ProductDetail';
import CartDetail from '../pages/CartDetail';
import { ToastContainer } from 'react-toastify';

export default function Dashboard() {
    return (
        <div>
          <ToastContainer position="bottom-right"/>
         <Grid >
           <Grid.Column width={4}>
             <Categories/> 
           </Grid.Column>
       <Grid.Column width={12}>  
          <Route exact path="/" component={ProductList}></Route>
          <Route exact path="/products" component={ProductList}></Route>
          <Route path="/products/:name" component={ProductDetail}></Route>
          <Route path="/cart" component={CartDetail}></Route>
        
          </Grid.Column>
</Grid>
        </div>
    )
}

