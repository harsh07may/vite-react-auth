export const createToken = (username: string, token: string) => {
  const tokenString = `${username}-${token}`;
  const encodedToken = btoa(tokenString);
  return encodedToken;
};
