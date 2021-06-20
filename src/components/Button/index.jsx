import PropTypes from 'prop-types'

const Button = ({ type, label, name, placeholder, step, minlength, maxlength, required, handleChange, value, error, onClick }) => (
  <div className="flex flex-col mt-10">
    <button
    className="border p-1"
      type={type}
      name={name}
      id={name}
      placeholder={placeholder}
      required={required}
      onChange={handleChange}
      value={value}
      onClick={onClick}
    >
      {label}
    </button>
    {error && <p className="text-red-500 text-sm">{error}</p>}
  </div>
)

Button.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  onClick: PropTypes.func,
  required: PropTypes.bool,
}

Button.defaultProps = {
  type: 'text',
  required: false,
  placeholder: '',
  error: '',
}

export default Button;
