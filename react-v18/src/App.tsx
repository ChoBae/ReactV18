import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import LoginWithMockAPI from "./pages/LoginWithMockAPI";
import { routers } from "../router";
import styled from "styled-components";
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <LoginWithMockAPI />,
//   },
// ]);

function App() {
  return (
    <HomeContainer>
      <RouterProvider router={routers} />
    </HomeContainer>
  );
}

export default App;

// styles
const HomeContainer = styled.div`
  align-items: center;
  margin: 0 auto;
  width: 100%;
  height: 100vh;
`;
