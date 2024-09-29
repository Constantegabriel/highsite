import { useState } from 'react'
import reactLogo from './assets/wavess.png'
import frontLogo from './assets/front.png'
import backLogo from './assets/back.png'
import bancoLogo from './assets/banco.png'
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
             <li className='nav-item'><a href="#">Quem somos</a></li>
             <li className='nav-item'><a href="#">Feedbacks</a></li>
             <li className='nav-item'><a href="#">Serviços</a></li>
             <li className='nav-item'><a href="#">Contatos</a></li>
             <li className='nav-item'><a href="#">Politica de privacidade</a></li>
             <li className='nav-put'><input type="search" name="search" id="nav-search" /></li>
           <button className='butum'>
             <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAd5JREFUSEu11cvLTWEUx/HPGxnIpSiXiZAwcIuSAQpFL2XqUgxIURhQBv4AMiEhDCgk5Q+Q0VsImSAlopTIgFwi9+uz6nl1HO/e5xnssya7zn7O+j5rrd9v7R5djp4u51cHmIB1WInZ+SJ3cAkX8LzkcgMBRuAcVtck+I2L2IRPdaB2wFDcwgx8xUkcxpOcZDJ2YQuG5LOL8L0K0g44iw14hhV4UPHHWbicLjAeB7G7BDAT9/Aj9Xk+ot91sRhX8A2T8GKgw60VHMF2HMWOkgHiPNYnyF7s7wR4jCm5//cLAUvQh2vpGRX9F60VfEQMeRB+FQJGpWpf4w1GdwK8x3AMQ8BKIs5+wCuM6QS4mw01L3ngdkn2pKQFSW03c5uWdQIcSKbZgxPYVgg4kzyyMbUnBLKzE2AqHuJnoUzDYFdz0sqq2412Ktv/KZYnCT6qqGRONtrY7PatJUaLM62r4guO41B2dryPKmNVbMbgnDRmEK6PYdfKtP/lyGygVTVzeJd20b7U0rWYm12/FPH7P1G3ridml/Yids/nrK4bOIa3CB+E0WKdhwpDSeGJv9HEBycg1zEdsQ0W4mU/oQlA5AqThaKm5fmcbhoQ+cal9b4mfz8abVGtJ5tqUSWk64A/OxFWGSrrSC8AAAAASUVORK5CYII=" className='bot'/>
           </button>
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
      <img src={reactLogo} alt="React Logo" className='imagem'/>
      </div>
    </section>
   </main>
<section className='skills'>
<div className='skills-home'>
<h4 className='skills-tittle'>Skills</h4>
<a href="your-page-url" class="skills-front">
  <img src={frontLogo} alt="front end icon" className='skills-img-fro'/> Front End</a>

<a href="your-page-url" class="skills-back">
<img src={backLogo} alt="back end icon" className='skills-img-bac'/>    Back End    </a>

<a href="your-page-url" class="skills-banco">
 <img src={bancoLogo} alt="banco icon" className='skills-img-bdd'/>Banco de Dados</a>
</div>
</section>
   <section className='motv'>
     <main className='motv-home'>
       <div className='motv-cont'> 
<h3 className='motv-text'>Porque criar um site para seu negócio?</h3>
<ul>
<li className='list-1'>
  <a href="your-page-url" className='motv-1'>
  <img src={frontLogo} alt="inco 1" className='motv-foto-1'/><p className='pa-1'>Presença Online</p><p className='pa-11'>Um site permite que sua empresa esteja acessível para os clientes a qualquer hora do dia, em qualquer lugar do mundo. Isso aumenta a visibilidade e permite que os usuários conheçam seus serviços, mesmo fora do horário comercial.</p></a>

  <a href="your-page-url" className='motv-2'>
  <img src={frontLogo} alt="icon 2" className='motv-foto-2'/><p className='pa-2'>Credibilidade e Confiança</p><p className='pa-22'>Ter um site profissional transmite credibilidade. Empresas com presença digital são vistas como mais confiáveis pelos consumidores, especialmente se o site tiver um design moderno e oferecer uma boa experiência ao usuário.</p></a>

  <a href="your-page-url" className='motv-3'>
  <img src={frontLogo} alt="icon 3" className='motv-foto-3'/><p className='pa-3'>Marketing Digital Eficaz</p><p className='pa-33'>Um site é o ponto central para suas estratégias de marketing digital, como SEO, campanhas de anúncios pagos, e email marketing. Ele ajuda a atrair novos visitantes e a converter leads em clientes.</p></a>
</li>
<li className='list-2'>
  <a href="your-page-url" className='motv-4'>
  <img src={frontLogo} alt="icon 4" className='motv-foto-4'/><p className='pa-4'>Expandir o Alcance e Conquistar Novos Mercados</p><p className='pa-44'>Um site oferece a oportunidade de atingir um público global, sem as limitações geográficas de uma loja física. Isso ajuda a expandir seus negócios e conquistar novos mercados.</p></a>

  <a href="your-page-url" className='motv-5'>
  <img src={frontLogo} alt="icon 5" className='motv-foto-5'/><p className='pa-5'>Custo-Benefício</p><p className='pa-55'>Comparado a outras formas de publicidade e presença física, um site é um investimento relativamente barato com retorno significativo. Além disso, pode automatizar processos que reduzem custos operacionais.</p></a>

  <a href="your-page-url" className='motv-6'>
  <img src={frontLogo} alt="icon 6" className='motv-foto-6'/><p className='pa-6'>Melhor Relacionamento com o Cliente</p><p className='pa-66'>Com um site, você pode oferecer recursos de suporte, como chat ao vivo, formulários de contato e FAQs. Isso melhora o atendimento ao cliente e mantém a comunicação aberta.</p></a>
</li>  
 </ul>       
 </div>
     </main>
   </section>
       <footer className='footeer'>
         <div className='footeer-div'>
<h3 className='footeer-end'>end of site, thanks for coming here</h3>
         </div>
       </footer>
</body>

    </>
  )
}

export default App