import './intro.scss';

import { init } from 'ityped';
import { useEffect, useRef } from 'react';
const Intro = () => {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      strings: ['Developer', 'Desginer', ' Content Creator'],
    });
  }, []);
  return (
    <div className='intro' id='intro'>
      <div className='left'>
        <div className='imgContainer'>
          <img src='assets/man.png' alt='' />
        </div>
      </div>
      <div className='right'>
        <div className='wrapper'>
          <h2>Hi There, I'm</h2>
          <h1>Joshua Smith</h1>
          <h3>
            Freelance <span ref={textRef}></span>
          </h3>
        </div>
        <a href='#portfolio'>
          <img src='assets/down.png' alt='down' />
        </a>
        <div className='fun'>
          <div className='fun1'></div>
          <div className='fun2'></div>
          <div className='fun3'></div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
