import { Navigate } from 'react-router-dom';
import { useLoggedIn } from 'hooks';
import PropTypes from 'prop-types';

const PrivateRoute = ({ children, redirectTo = '/' }) => {
  const isLoggedIn = useLoggedIn();
  // const shouldRedirect = !isLoggedIn && !isRefreshing;
  return isLoggedIn ? children : <Navigate to={redirectTo} replace={true} />;
}

PrivateRoute.propTypes = {
  redirectTo: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
};

export default PrivateRoute;