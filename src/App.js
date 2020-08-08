import React from 'react';
import useWebAnimations from '@wellyshen/use-web-animations';
import './App.css';

function App() {

  const { ref: cloud1 } = useWebAnimations(
    {
      keyframes: [
        { opacity: '0'},
        { transform:'translate(100%, 0)'},
      ],
      timing: {
        duration: 10000,
        iterations: Infinity,
        direction: "alternate",
        easing: 'ease-in-out'
      }
    }
  );

  const { ref: cloud2 } = useWebAnimations(
    {
      keyframes: [
        { opacity: '0'},
        { transform:'translate(-50%, 0)'},
        { transform:'translate(50%, 0)'}
      ],
      timing: {
        duration: 16000,
        iterations: Infinity,
        direction: "alternate",
        easing: 'ease-in-out'
      }
    }
  );

  const { ref: cloud3 } = useWebAnimations(
    {
      keyframes: [
        { transform:'translate(-100%, 0)'},
        { opacity: '0'}
      ],
      timing: {
        duration: 10000,
        iterations: Infinity,
        direction: "alternate",
        easing: 'ease-in-out'
      }
    }
  );

  const { ref } = useWebAnimations(
    {
      keyframes: [
        { transform: 'rotate(2deg) translateY(5px)'},
        { transform: 'rotate(-2deg) translateY(-5px)'},
        { transform: 'rotate(-2deg) translateY(5px)'},
      ],
      timing: {
        duration: 3000,
        iterations: Infinity,
        easing: 'linear',
        direction: "alternate"
      }
    }
  );

  const { ref: balloon1} = useWebAnimations(
    {
      keyframes: [
        { transform: 'rotate(2deg) translateY(5px)'},
        { transform: 'rotate(-2deg) translateY(-5px)'},
        { transform: 'rotate(-2deg) translateY(5px)'},
      ],
      timing: {
        duration: 3000,
        iterations: Infinity,
        easing: 'linear',
        direction: "alternate"
      }
    }
  );

  const { ref: balloon2} = useWebAnimations(
    {
      keyframes: [
        { transform: 'rotate(2deg) translateY(5px)'},
        { transform: 'rotate(-2deg) translateY(-5px)'},
        { transform: 'rotate(-2deg) translateY(5px)'},
      ],
      timing: {
        duration: 3000,
        iterations: Infinity,
        easing: 'linear',
        direction: "alternate"
      }
    }
  );


  return (
    <div className="wrapper">
      <div id="bg">
        <img id="cloud1" ref={cloud1} src="/images/cloud.png" alt="Cloud" />
        <img id="cloud2" ref={cloud2} src="/images/cloud.png" alt="Cloud" />
        <img id="cloud3" ref={cloud3} src="/images/cloud.png" alt="Cloud" />
      </div>
      <div className="platform-div">
        <img id="platform" src="/images/platform.png" alt="Platform" />
        <div className="tents-div">
          <img id="tent1" src="/images/tent1.png" alt="Tent" />
          <img id="tent2" src="/images/tent.png" alt="Tent" />
          <img id="tent3" src="/images/tent3.png" alt="Tent" />
        </div>
        <div className="lamps-div">
          <img id="lamp1" src="/images/lamp.png" alt="Street Lamp" />
          <img id="lamp2" src="/images/lamp.png" alt="Street Lamp" />
          <img id="lamp3" src="/images/lamp.png" alt="Street Lamp" />
          <img id="lamp4" src="/images/lamp.png" alt="Street Lamp" />
        </div>
        <div className="balloons-div">
          <img id="balloon1" ref={balloon1} src="/images/balloons.png" alt="Balloons" />
          <img id="balloon2" ref={balloon2} src="/images/balloons.png" alt="Balloons" />
        </div>
        <img id="roller-coaster" src="/images/rollercoaster1.png" alt="Roller Coaster" />
        <img id="ticket-booth" src="/images/ticket-booth.png" alt="Ticket Booth" />
        <img id="ferris-wheel" src="/images/wheel.gif" alt="Ferris Wheel" />
        <img id="shop" src="/images/shop.png" alt="Shop" />
        <img id="horse-carousel" src="/images/horse-carousel.png" alt="Horse Carousel" />
        <img id="ice-cream-cart" src="/images/ice-cream-cart.png" alt="Ice Cream Cart" />
        <img id="hot-air-balloon" ref={ref} src="/images/bigballoon.png" alt="Hot Air Balloon" />
        <img id="cart" src="/images/cart.png" alt="Cart" />
      </div>
    </div>
  );
}

export default App;
