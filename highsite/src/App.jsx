import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<head>
  <title>constante</title>
</head>

<body>
   <header>
     <nav className='navigation'>
         <a href="#" className='logo'>W<span>a</span>vess</a>
           <ul className='nav-menu'>
             <li className='nav-item'><a href="#">Home</a></li>
             <li className='nav-item'><a href="#">About</a></li>
             <li className='nav-item'><a href="#">Menu</a></li>
             <li className='nav-item'><a href="#">Contatos</a></li>
             <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAd5JREFUSEu11cvLTWEUx/HPGxnIpSiXiZAwcIuSAQpFL2XqUgxIURhQBv4AMiEhDCgk5Q+Q0VsImSAlopTIgFwi9+uz6nl1HO/e5xnssya7zn7O+j5rrd9v7R5djp4u51cHmIB1WInZ+SJ3cAkX8LzkcgMBRuAcVtck+I2L2IRPdaB2wFDcwgx8xUkcxpOcZDJ2YQuG5LOL8L0K0g44iw14hhV4UPHHWbicLjAeB7G7BDAT9/Aj9Xk+ot91sRhX8A2T8GKgw60VHMF2HMWOkgHiPNYnyF7s7wR4jCm5//cLAUvQh2vpGRX9F60VfEQMeRB+FQJGpWpf4w1GdwK8x3AMQ8BKIs5+wCuM6QS4mw01L3ngdkn2pKQFSW03c5uWdQIcSKbZgxPYVgg4kzyyMbUnBLKzE2AqHuJnoUzDYFdz0sqq2412Ktv/KZYnCT6qqGRONtrY7PatJUaLM62r4guO41B2dryPKmNVbMbgnDRmEK6PYdfKtP/lyGygVTVzeJd20b7U0rWYm12/FPH7P1G3ridml/Yids/nrK4bOIa3CB+E0WKdhwpDSeGJv9HEBycg1zEdsQ0W4mU/oQlA5AqThaKm5fmcbhoQ+cal9b4mfz8abVGtJ5tqUSWk64A/OxFWGSrrSC8AAAAASUVORK5CYII="/>
          </ul>
             <div className='menu'>
               <span className='bar'></span>
               <span className='bar'></span>
               <span className='bar'></span>
               <span className='bar'></span>
          </div>
     </nav>
   </header>
   <main>
    <section className='home'>
      <div className='home-text'>
        <h4 className='text-h4'>Welcome Waves</h4>
        <h1 className='text-h1'>Uma onda de inovação</h1>
        <p>Embarque na inovação online para a sua empresa</p>
        <a href="#" className='home-button'>À sua disposição</a>
      </div>
      <div className='home-img'>
img
      </div>
    </section>
   </main>
</body>

    </>
  )
}

export default App