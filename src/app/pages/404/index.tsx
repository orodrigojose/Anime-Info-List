import { FaHome, FaGhost } from 'react-icons/fa';
import { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const NotFound = (): ReactElement<any> => {
  return (
    <main className="error-container">
      <div className="error-content">
        <h1>4<FaGhost className="ghost-icon"/>4</h1>
        <span>Ops!! Could not find this page, please return to the main page</span>
        <Link to="/">
          <FaHome className="home-icon"/>
        </Link>
      </div>
    </main>
  );
}

export default NotFound;
