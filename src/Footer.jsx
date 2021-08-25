import React from 'react'
import {NavLink} from 'react-router-dom';
const Footer=()=>{
    return(

        <>
 


 <footer className="page-footer font-small pt-4">
    <div className="container-fluid text-center text-md-left">
        <div className="row">
            <div className="col-md-6 mt-md-3 mt-3">
                <h3 className="text-uppercase">AntEagle Exchange</h3>
                <p >The place to start your cryptocurrency trading journey.</p>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0"/>

            <div className="col-md-6 mt-3 mb-md-3  mb-3">
                <h5 className="text-uppercase me-5">Company</h5>
                <ul className=" navbar-nav" >
                    <li className="nav-item" ><NavLink className="footlinks" to="#!" >Home</NavLink></li>
                    <li className="nav-item"><NavLink className="footlinks" to="#!">Services</NavLink></li>
                    <li className="nav-item"><NavLink className="footlinks" to="#!">Articles</NavLink></li>
                    <li className="nav-item"><NavLink className="footlinks"  to="#!">About</NavLink></li>
                </ul>
            </div>

          
        </div>
    </div>
    <hr className=" copy clearfix  pb-0"/>
    <div className="footer-copyright text-center py-3">© 2020 Copyright:
        <NavLink className="footlinks" to=""> Opulentia Crespo</NavLink>
    </div>

</footer>

        </>
    )
}

export default Footer;