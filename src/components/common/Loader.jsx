import { FadeLoader } from 'react-spinners';
import '../../stylesheets/Loader.css';

const Loader = () => (
  <div className="loader-container">
    <FadeLoader color = "#4f2bee" size={30} />
    <p>Loading...</p>
  </div>
);

export default Loader;
