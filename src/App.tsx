import { Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import { Api, Install, Usage } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Install />} />
        <Route path="api" element={<Api />} />
        <Route path="usage" element={<Usage />} />
      </Route>
    </Routes>
  );
}

export default App;
