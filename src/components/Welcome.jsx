import { Link } from 'react-router-dom';
import '../stylesheets/Welcome.css';

function Welcome() {
  return (
    <>
      <div className='welcome-page'>
        <div className='overlay'>
          <Link to='/products'>
            <button className='appButton'>Start Shopping</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Welcome;
