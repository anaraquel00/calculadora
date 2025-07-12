import './Button.css';

const Button = ({ label, onClick, operator, equals }) => {
  const buttonClass = `button ${
    operator ? 'operator' : equals ? 'equals' : ''
  }`;

  return (
    <button className={buttonClass} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;