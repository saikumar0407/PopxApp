function InputField({
  id,
  label,
  type = 'text',
  name,
  value,
  onChange,
  placeholder = '',
  required = false,
}) {
  return (
    <div className="input-field">
      <div className="input-field__wrapper">
        <label htmlFor={id} className="input-field__label">
          {label}
          {required && <span className="input-field__required"> *</span>}
        </label>
        <input
          id={id}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className="input-field__input"
        />
      </div>
    </div>
  );
}

export default InputField;
