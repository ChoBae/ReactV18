import { createBrowserRouter, RouterProvider, Routes, Route } from "react-router-dom";
// import LoginWithMockAPI from "./pages/LoginWithMockAPI";
import { routers } from "../router";
import styled from "styled-components";
import Home from "./pages/home";
import UseTransition from "./pages/useTransition";
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <LoginWithMockAPI />,
//   },
// ]);

function App() {
  return (
    <HomeContainer>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/useTransition" element={<UseTransition></UseTransition>} />
      </Routes>
      {/* <RouterProvider router={routers} /> */}
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
