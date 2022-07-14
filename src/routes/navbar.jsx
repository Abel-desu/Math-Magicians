/*eslint-disable*/
import { Outlet, Link } from 'react-router-dom';
export default function Nav() {
    return (
      <div>
  
        <nav
          className="navstyle"
          style={{
            display: 'flex',
            gap: '5px',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <h1 className="math" style={{ width: '88%' }}>Math magician</h1>
          <Link to="/home">Home</Link>
          {' '}
          |
          {' '}
          <Link to="/calculator">Calculator</Link>
          {' '}
          |
          {' '}
          <Link to="/qoute">Qoute</Link>
          {' '}
          |
          {' '}
        </nav>
        <Outlet />
      </div>
    );
  }
  