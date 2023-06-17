import { LogInForm } from 'components/LogInForm/LogInForm';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div>
      <h1>Log in</h1>
      <LogInForm />
      <p>New user?</p>
      <Link to="/register">Create your account</Link>
    </div>
  );
}
export default Login;