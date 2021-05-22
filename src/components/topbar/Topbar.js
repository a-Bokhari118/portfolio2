import './topbar.scss';
import { Person, Mail } from '@material-ui/icons';
const Topbar = ({ menu, setMenu }) => {
  return (
    <div className={`topbar ${menu && 'active'}`}>
      <div className='wrapper'>
        <div className='left'>
          <a href='#intro' className='logo'>
            Reacty
          </a>
          <div className='itemContainer'>
            <Person className='icon' />
            <span>+966 342 232 4322</span>
          </div>
          <div className='itemContainer'>
            <Mail className='icon' />
            <span>Sam34@reacty.com</span>
          </div>
        </div>
        <div className='right'>
          <div className='hamburger' onClick={() => setMenu(!menu)}>
            <span className='line1'></span>
            <span className='line2'></span>
            <span className='line3'></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
