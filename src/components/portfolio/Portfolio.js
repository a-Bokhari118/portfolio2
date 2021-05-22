import './portfolio.scss';
const Portfolio = () => {
  return (
    <div className='portfolio' id='portfolio'>
      <h1>Projects</h1>
      <ul>
        <li className='active'>Featured</li>
        <li>Web App</li>
        <li>Mobile App</li>
        <li>Desing</li>
        <li>Branding</li>
      </ul>
      <div className='container'>
        <div className='item'>
          <img
            src='https://i.pinimg.com/originals/ec/2d/52/ec2d525e26e62334c350464e2c014116.png'
            alt=''
          />
          <h3>Banking App</h3>
        </div>

        <div className='item'>
          <img
            src='https://i.pinimg.com/originals/ec/2d/52/ec2d525e26e62334c350464e2c014116.png'
            alt=''
          />
          <h3>Banking App</h3>
        </div>

        <div className='item'>
          <img
            src='https://i.pinimg.com/originals/ec/2d/52/ec2d525e26e62334c350464e2c014116.png'
            alt=''
          />
          <h3>Banking App</h3>
        </div>

        <div className='item'>
          <img
            src='https://i.pinimg.com/originals/ec/2d/52/ec2d525e26e62334c350464e2c014116.png'
            alt=''
          />
          <h3>Banking App</h3>
        </div>

        <div className='item'>
          <img
            src='https://i.pinimg.com/originals/ec/2d/52/ec2d525e26e62334c350464e2c014116.png'
            alt=''
          />
          <h3>Banking App</h3>
        </div>

        <div className='item'>
          <img
            src='https://i.pinimg.com/originals/ec/2d/52/ec2d525e26e62334c350464e2c014116.png'
            alt=''
          />
          <h3>Banking App</h3>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
