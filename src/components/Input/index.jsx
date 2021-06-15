import PropTypes from 'prop-types'

const Input = ({ type, label, name, placeholder, step, minlength, maxlength, required, handleChange, value, error }) => (
  <div className="flex flex-col mt-10">
    <label htmlFor={name}>{label}</label>
    <input
    className="border p-1"
      type={type}
      name={name}
      id={name}
      placeholder={placeholder}
      required={required}
      onChange={handleChange}
      value={value}
    />
    {error && <p className="text-red-500 text-sm">{error}</p>}
  </div>
)

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
}

Input.defaultProps = {
  type: 'text',
  required: false,
  placeholder: '',
  error: '',
}

export default Input;
