export const isValid = ({ user }) => {
  if (user.name === "") return false;
  if (user.email === "") return false;
  if (user.password === "") return false;

  return true;
};
