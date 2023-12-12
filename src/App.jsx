import React, {useState}from "react"
import Navbar from "./components/Navbar"
import Card from "./components/Card"
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  let [cart,setCart] = useState(0);
 

  return <>
    <Navbar cart={cart} setCart={setCart}/>
    <Header/>
    <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-4 row-cols-xl-4 justify-content-center">
                  <Card cart={cart} setCart={setCart} productTitle="Fancy Product" price="$40.00 - $80.00" />
                  <Card cart={cart} setCart={setCart} productTitle="Special Item" price="$20.00" priceChange="$18.00" sale="Sale"/>
                  <Card cart={cart} setCart={setCart} productTitle="Sale Item" price="$50.00" priceChange="$25.00" sale="Sale"/>
                  <Card cart={cart} setCart={setCart} productTitle="Popular Item" price="$40.00" />
                  <Card cart={cart} setCart={setCart} productTitle="Sale Item" price="$50.00" priceChange="$25.00" sale="Sale"/>
                  <Card cart={cart} setCart={setCart} productTitle="Fancy Product" price="$120.00 - $280.00"/>   
                  <Card cart={cart} setCart={setCart} productTitle="Special Item" price="$20.00" priceChange="$18.00" sale="Sale"/> 
                  <Card cart={cart} setCart={setCart} productTitle="Popular Item" price="$40.00"/>              
                
                </div>
                </div>
      </section>
      <Footer/>
    </>
  
}

export default App
