import PropTypes from "prop-types";
import { useAuth } from "../../contexts/Auth";

import { Navigate } from "react-router-dom";

export default function PrivateAdminRoute({ children }) {
  const { userLoggedIn, role } = useAuth();
  return userLoggedIn && role === "admin" ? (
    children
  ) : (
    <Navigate to="/login" replace />
  );
}

// prop-types

PrivateAdminRoute.propTypes = {
  children: PropTypes.node,
};
