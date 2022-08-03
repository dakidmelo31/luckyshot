import './App.css';
import FloatingWhatsApp from 'react-floating-whatsapp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useLottie } from 'lottie-react';
import animation from './images/download2.json';
import logo from "./images/foodin.png";

function App() {
  const option = {
    animationData: animation,
    loop: true
  };
  
  const { View } = useLottie(option);
  return (
    <>
      <meta name="apple-mobile-web-app-capable" content="yes" />

      <div className="App">
        <div className='page' >
          <div className='innerPageOverlay'>
            <div className='innerPage'>
            <nav className='navbar'>
              <div className='logo'><span>Foodin</span> City</div>
              <div className='links'>
                <a href='#'>Merchant</a>
                <a href='#'>Customer</a>
                <a href='#'>Contact</a>
              </div>
            </nav>
            <div className='main'>
              <h1 className='heading'>Let<span className='orange'>'</span>s Test</h1>
              <p>
                Thank you once again taking part in this.
                Here, you can choose which of the 2 applications to test. You may choose the Foodin Customer app, or the Fooding Merchant App, all of which are ready for testing.
              </p>
            </div>
            {View}
  <footer className='footer'>


    <div className='sec'>
    <a href="merchant.apk"  download className='merchant'> Merchant Apk</a>
    <a href='customer.apk' download className='customer'>Customer Apk</a>
    </div>
    <h2>Choose your testing Option</h2>
  </footer>
            </div>
          </div>
        </div>
    </div>
    <FloatingWhatsApp phoneNumber='+237650981130'
    allowEsc
    darkMode
    notification
    avatar={ logo } 
    statusMessage='Open for reviews'
    notificationSound="true"
    placeholder="I'd like to report an issue"
    chatMessage=' 🙌 Awesome...What did you find?🔫'
    />

    </>
  );
}

export default App;
