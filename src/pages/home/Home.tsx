import { useAuth } from "../../providers/AuthProvider";

const Home = () => {
  const auth = useAuth();
  return (
    <div>
      <code>npx degit harsh07may/vite-react-auth</code>
      <button onClick={auth.signOut}>Signout</button>
    </div>
  );
};
export default Home;
