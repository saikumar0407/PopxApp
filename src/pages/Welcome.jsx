import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import '../styles/welcome.css';

function Welcome() {
  const navigate = useNavigate();

  return (
    <section className="welcome">
      <div className="welcome__content">
        <h1 className="welcome__title">Welcome to PopX</h1>
        <p className="welcome__description">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </p>
      </div>

      <div className="welcome__actions">
        <Button onClick={() => navigate('/register')}>Create Account</Button>
        <Button variant="secondary" onClick={() => navigate('/login')}>
          Already Registered? Login
        </Button>
      </div>
    </section>
  );
}

export default Welcome;
