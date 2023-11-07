import { ChangeEvent, useState } from "react";
import { useAuth } from "../../providers/AuthProvider";
import useLabelState from "../../hooks/useLabelState";

const SignIn = () => {
  const auth = useAuth();
  const [userInput, setUserInput] = useLabelState(
    {
      username: "",
      password: "",
    },
    "User Input"
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setUserInput((prevUser) => {
      return {
        ...prevUser,
        [name]: value,
      };
    });
  };

  const handleSignIn = () => {
    auth.signIn(userInput);
  };
  return (
    <>
      <input
        type="text"
        name="username"
        placeholder="username"
        onChange={handleChange}
        autoComplete="off"
        value={userInput.username}
      />

      <br />

      <input
        type="password"
        name="password"
        placeholder="password"
        onChange={handleChange}
        autoComplete="off"
        value={userInput.password}
      />
      <br />
      <button onClick={handleSignIn}>Sign In</button>
    </>
  );
};
export default SignIn;
