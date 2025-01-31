import { Link } from 'react-router-dom';
import '../stylesheets/Welcome.css';

function Welcome() {
  return (
    <>
      <div className="welcome_page">
        <div className="button">
          <Link to="/products">
            <button>Start Shopping</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Welcome;
