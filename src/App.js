import Topbar from './components/topbar/Topbar';
import Intro from './components/intro/Intro';
import Portfolio from './components/portfolio/Portfolio';
import Testimonials from './components/testimonials/Testimonials';
import Works from './components/works/Works';
import Contact from './components/contact/Contact';
import Menu from './components/Menu/Menu';
import { useState } from 'react';
//========
import './app.scss';
function App() {
  const [menu, setMenu] = useState(false);
  return (
    <div className='app'>
      <Topbar setMenu={setMenu} menu={menu} />
      <Menu setMenu={setMenu} menu={menu} />
      <div className='sections'>
        <Intro />
        <Portfolio />
        <Works />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
}

export default App;
