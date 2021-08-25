import React from 'react'
import lottie from './CryptoLottie.gif'
import Footer from './Footer'
import NavBar  from './Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Cross from './x-button.png'
import Checked from './checked.png'
import Tick from './tick.png'
import Check from './check.png'
import Portfolio from './portfolio-display1.png'
import Frustrated from './Frustrated.png'
import Happy from './Happy4.png'
import {NavLink} from 'react-router-dom';
import User from './man (1).png'
import Money from './treasury.png'
import Watch from './stopwatch.png'
import Invest from './cash.png'
import Transaction from './notes.png'
import Secure from './shield.png'
import Arrow from './up-arrow.png'
const Home=()=>{
    
   
    return(<>
    
    <section id="header" className="d-flex align-items-center">

    <div className=" bar container-fluid nav_bg" >
      <div className="row">
      
        <div className="col-11 mx-auto">
        <div className="row">

        
            <div className="col-lg-6   order-2 order-lg-1 d-flex justify-content-center flex-column">
                <h1>
                Buy and Sell Crypto with revolutionary features
      
                </h1>
                <h4 className="my-4">
                Experience The Modern Crypto Exchange 
                </h4>
                <div >
                    <NavLink to="" className=" reg btn mt-3  ">Register or Login</NavLink>

                 </div>
            </div>
           <div className="col-lg-6 order-1 order-lg-2 header-img">
 <img src={lottie} className=" lot" ></img>                
           </div>
           </div>
        </div>
    </div>
    
  </div>       
        </section>

        
        <section className="white-section" id="features">
    <div className="row feature-text"> 
   
   
        
        <h2 >Making exchanges is a tedious process.</h2>
        <h4 >AntEagle makes this entire process highly reliable, efficient and user-friendly. </h4>
        
      </div>

  
       
    <div className="row">
       
      <div className="feature-box col-lg-6 col-md-6 ">
      <img src={Frustrated} className="frustrated"></img>
      <h5 style={{color:"red",fontWeight:"lighter",lineHeight:"1.5"}} >The Old Way</h5>
        <h3 className="feature-title">Trading on the exchange.</h3>
        <h5  style={{fontWeight:"lighter",lineHeight:"1.5"}} >Too much of stress and hassle</h5>
        <ul className="list-unstyled points">
           <li>
           {
            ["Can't use stop-loss and targets together","Monitoring the markets all day","Setting price alarms","Using a portfolio tracking app"].map((ans,i)=>{
                return(
                    <div className="d-flex align-items-center">
            <div>
                <img src={Cross}></img>
            </div>
            <div className="content">
                <h6><span className="mb-0">{ans}</span></h6>
            </div>
         
           </div>
                )
})
           }
           
           </li> 

        </ul>

      
      </div>
      <div className="feature-box col-lg-6 col-md-6 ">
        <img src={Happy} className="happy"></img>
        <h5 style={{color:"darkgreen",fontWeight:"lighter",lineHeight:"1.5"}}>The New Way</h5>
        <h3 className="feature-title">Trading on AntEagle.</h3>
        <h5 style={{fontWeight:"lighter",lineHeight:"1.5"}}>Hassle-free</h5>
        <ul className="list-unstyled points">
           <li>{
            ["Easily set stop-loss and take-profit orders","Set entry, stop loss, take profit and relax","Get notified when your orders trigger","Automatic profit/loss tracking"].map((ans,i)=>{
                return(
                    <div className="d-flex align-items-center">
            <div>
                <img src={Checked}></img>
            </div>
            <div className="content">
                <h6><span className="mb-0">{ans}</span></h6>
            </div>
         
           </div>
                )
})
           }
          
          
           
           </li> 

        </ul>
      </div>

    </div>
    <hr className="  clearfix  pb-0"/>
    <div className="row chart">
        <div className="feature-box col-lg-6 col-md-6 ">
        <h3 className="feature-title">Invest & Grow your cryptocurrency portfolio.</h3>
            <h5  style={{lineHeight:"1.5"}} >Facts regarding cryptocurrencies in 2021</h5>
        <ul className="list-unstyled points">
           <li>
                    <div className="d-flex align-items-center">
         
                    <div>
                    <img src={Tick}></img>
                    </div>
                    <div className="content">
                        <h5><span className="mb-0">Supreme Court judgement on Crypto</span></h5>
                     </div>
       
                 </div>
                <div className="content info"> 
                 <h6><span  className="mb-0">The ban on facilitation of financial transactions for entities related to cryptocurrencies was<b style={{fontWeight:"bold"}}> quashed by the Hon'ble Supreme Court of India in March 2020</b>. This paved way for financial institutions to facilitate the trading of cryptocurrencies in India.</span></h6>
                 </div>  

                  <div className="d-flex align-items-center">
         
                    <div>
                    <img src={Tick}></img>
                    </div>
                    <div className="content">
                        <h5><span className="mb-0">Is trading in cryptocurrencies wrong?</span></h5>
                     </div>
       
                 </div>
                <div className="content info"> 
                 <h6><span  className="mb-0">No, it is not. There is no regulation governing cryptocurrencies in India so far. The government is planning to hold a legislative proposal regarding cryptocurrencies and their trading, in the Parliament following due process.</span></h6>
                 </div>  
           </li> 
           <li>
           <div className="d-flex align-items-center">
                    <div>
                    <img src={Tick}></img>
                    </div>
                    <div className="content">
                        <h5><span className="mb-0">Market potential and returns</span></h5>
                     </div>
                   
           </div>
           <div  className=" coin-rate d-flex align-items-center">
             <div>
             <img src={Check}></img>
             </div>
             <div className="content">
                <h5><span className="mb-0">Bitcoin </span><span style={{color:"#00cc00"}} className="mb-0"> 327%<img src={Arrow} className="arrow"></img></span></h5>
             </div>
            
            
           </div>
           <div className="year">
              <h6>From Aug 2020 - Aug 2021</h6>
           </div>
           <div  className=" coin-rate d-flex align-items-center">
             <div>
             <img src={Check}></img>
             </div>
             <div className="content">
                <h5><span className="mb-0">Dogecoin </span><span style={{color:"#00cc00"}} className="mb-0"> 8536%<img src={Arrow} className="arrow"></img></span></h5>
                
             </div>
            
           </div>
           <div className="year">
              <h6>From Aug 2020 - Aug 2021</h6>
           </div>
          
           
           </li>

        </ul>
        </div>
        <div className="feature-box col-lg-6 col-md-6 ">
         
          <img src={Portfolio} className="img-fluid"></img>
         
        </div>
        
    </div>
    <hr className="  clearfix  pb-0"/>
    <div className="row addtn-feat">
        <div class=" col-lg-4 col-md-4 ">
           <img src={Watch}  style={{marginBottom:"1rem"}}></img>
          <h4 >Fast & simple</h4>
          <p >Start investing in under 10 minutes</p>
        </div>
        <div className=" col-lg-4 col-md-4 ">
        <img src={Transaction}  style={{marginBottom:"1rem"}}></img>
          <h4>Easy deposit & withdrawals</h4>
          <p >Quickly add & withdraw funds to your bank account</p>
        </div>
        <div className=" col-lg-4 col-md-4 ">
        <img src={Secure}  style={{marginBottom:"1rem"}}></img>
          <h4 >Safe & secure</h4>
          <p >World class security features ensure your investments are in safe hands</p>
        </div>
        
  
      </div>

</section>
<section id="gstarted">
           <h1>Get started with 3 steps</h1>
<div className="row">
        <div className="gstarted-box col-lg-4 col-md-4 ">
          <img src={User} style={{marginBottom:"1rem"}}></img>
          <h4 >1. Create an account</h4>
          <p >Sign up with your email and mobile in just 5 minutes</p>
        </div>
        <div className="gstarted-box col-lg-4 col-md-4 ">
        <img src={Money} style={{marginBottom:"1rem"}}></img>
          <h4>2. Add funds to INRD wallet</h4>
          <p >Quickly add money to your AntEagle investment wallet</p>
        </div>
        <div className="gstarted-box col-lg-4 col-md-4 ">
        <img src={Invest} style={{marginBottom:"1rem"}}></img>
          <h4 >3. Start investing in crypto</h4>
          <p >Buy & Sell a variety of top coins at the best prices</p>
        </div>
        
  
      </div>
</section>

        


    </>
   
    );
}

export default Home;