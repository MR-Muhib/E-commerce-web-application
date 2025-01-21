import { Navigate } from "react-router";
import { useAuth } from "../contexts/Auth";
import PropTypes from "prop-types";

export default function PrivateAdminRoute({ children }) {
  const { userLoggedIn, role } = useAuth();

  return userLoggedIn &&
    role &&
    (role === "admin" || role === "super-admin") ? (
    children
  ) : (
    <Navigate to="/" />
  );
}

// prop-types

PrivateAdminRoute.propTypes = {
  children: PropTypes.node,
};
