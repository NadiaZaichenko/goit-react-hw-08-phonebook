import { useLoggedIn } from 'hooks';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const PublicRoute = ({ children, redirectTo = '/', restricted = false }) => {
  const isLoggedIn = useLoggedIn();
  const shouldRedirect = isLoggedIn && restricted;

  return shouldRedirect ? <Navigate to={redirectTo} replace ={true} /> : (children);
};

PublicRoute.propTypes ={
  redirectTo: PropTypes.string,
  children: PropTypes.object.isRequired,
  restricted: PropTypes.bool,
};

export default PublicRoute;