import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DefaultComponent from "./components/DefaultComponent/DefaultComponent.jsx";
import routes from "./routes";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
// import dotenv from "dotenv";
// dotenv.config();
function App() {
  // useEffect(() => {
  //   fetchApi();
  // }, []);

  // const fetchApi = async () => {
  //   // console.log("url", process.env.REACT_APP_API_URL);
  //   const res = await axios.get(
  //     `${process.env.REACT_APP_API_URL}/product/get-all`
  //   );
  //   return res.data;
  // };
  // const query = useQuery({ queryKey: ["todos"], queryFn: fetchApi });
  // console.log("query", query);
  return (
    <div>
      <Router>
        <Routes>
          {routes.map((route, index) => {
            const Page = route.page;
            const Layout = route.isShowHeader ? DefaultComponent : Fragment;
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </Router>
    </div>
  );
}
export default App;
