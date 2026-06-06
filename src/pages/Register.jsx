import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import InputField from '../components/InputField';
import homeIcon from '../assets/home-icon.svg';
import '../styles/register.css';

const initialFormState = {
  fullName: '',
  phoneNumber: '',
  email: '',
  password: '',
  companyName: '',
  isAgency: '',
};

function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone number is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    }
    if (!formData.password.trim()) {
      newErrors.password = 'Password is required';
    }
    if (!formData.isAgency) {
      newErrors.isAgency = 'Please select an option';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      navigate('/account');
    }
  };

  return (
    <section className="register">
      <header className="page-header">
        <div className="page-header__top">
          <h1 className="page-header__title">Create your PopX account</h1>
          <button
            type="button"
            className="page-header__home"
            aria-label="Go to home"
            onClick={() => navigate('/')}
          >
            <img src={homeIcon} alt="" />
          </button>
        </div>
      </header>

      <form className="register__form" onSubmit={handleSubmit} noValidate>
        <div className="register__fields">
          <InputField
            id="fullName"
            label="Full Name"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Enter full name"
            required
          />
          {errors.fullName && <p className="field-error">{errors.fullName}</p>}

          <InputField
            id="phoneNumber"
            label="Phone number"
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="Enter phone number"
            required
          />
          {errors.phoneNumber && <p className="field-error">{errors.phoneNumber}</p>}

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
          {errors.email && <p className="field-error">{errors.email}</p>}

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
          {errors.password && <p className="field-error">{errors.password}</p>}

          <InputField
            id="companyName"
            label="Company name"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            placeholder="Enter company name"
          />

          <fieldset className="radio-group">
            <legend className="radio-group__legend">
              Are you an Agency?
              <span className="input-field__required"> *</span>
            </legend>
            <div className="radio-group__options">
              <label className="radio-option">
                <input
                  type="radio"
                  name="isAgency"
                  value="yes"
                  checked={formData.isAgency === 'yes'}
                  onChange={handleChange}
                />
                <span className="radio-option__label">Yes</span>
              </label>
              <label className="radio-option">
                <input
                  type="radio"
                  name="isAgency"
                  value="no"
                  checked={formData.isAgency === 'no'}
                  onChange={handleChange}
                />
                <span className="radio-option__label">No</span>
              </label>
            </div>
          </fieldset>
          {errors.isAgency && <p className="field-error">{errors.isAgency}</p>}
        </div>

        <div className="register__actions">
          <Button type="submit">Create Account</Button>
        </div>
      </form>
    </section>
  );
}

export default Register;
