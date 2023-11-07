import { Route, Routes } from "react-router-dom";

import Home from "./pages/home";
import SignIn from "./pages/signIn";
import RequireAuth from "./components/requireAuth";
import { AuthProvider } from "./providers/AuthProvider";

/* */
function App() {
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route
            path="/"
            element={
              <RequireAuth>
                <Home />
              </RequireAuth>
            }
          />
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
