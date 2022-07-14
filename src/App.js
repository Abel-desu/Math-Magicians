import { Outlet, Link } from 'react-router-dom';
import './App.css';

export default function App() {
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
        <Link to="/invoices">Home</Link>
        {' '}
        |
        {' '}
        <Link to="/calculator">Calculator</Link>
        {' '}
        |
        {' '}
        <Link to="/expenses">Qoute</Link>
        {' '}
        |
        {' '}
      </nav>
      <Outlet />
    </div>
  );
}
