import React from 'react'
import { Switch,Route, Redirect } from 'react-router-dom';
import Home from "./Home"
import Footer from './Footer';
import NavBar from './Navbar';
const App=()=>{
    return(
    <>  
        <NavBar />
        <Switch>
        <Route path="/" component={Home } />
        <Redirect to="/" />
        
        </Switch>
        <Footer/>
       
    </>
    );
}

export default App;