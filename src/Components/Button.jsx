import { Link } from 'react-router-dom';

function Button({ link, variants, children }) {
  return (
    <>
      <button className={variants}>
        <Link to={link}>{children}</Link>
      </button>
    </>
  );
}

export default Button;
