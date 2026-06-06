import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import InputField from '../components/InputField';
import homeIcon from '../assets/home-icon.svg';
import '../styles/login.css';

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const isFormValid = formData.email.trim() !== '' && formData.password.trim() !== '';

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isFormValid) {
      navigate('/account');
    }
  };

  return (
    <section className="login">
      <header className="page-header">
        <div className="page-header__top">
          <h1 className="page-header__title">Signing to your PopX account</h1>
          <button
            type="button"
            className="page-header__home"
            aria-label="Go to home"
            onClick={() => navigate('/')}
          >
            <img src={homeIcon} alt="" />
          </button>
        </div>
        <p className="page-header__description">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </p>
      </header>

      <form className="login__form" onSubmit={handleSubmit}>
        <InputField
          id="email"
          label="Email address"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter email address"
          required
        />
        <InputField
          id="password"
          label="Password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter password"
          required
        />

        <div className="login__actions">
          <Button type="submit" disabled={!isFormValid}>
            Login
          </Button>
        </div>
      </form>
    </section>
  );
}

export default Login;
