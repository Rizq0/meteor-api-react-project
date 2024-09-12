import { useState, useEffect } from "react";
import { fetchAllMeteorites } from "./api-calls/nasa";
import { Map } from "./components/Map";
import "./App.css";
import { Routes, Route } from "react-router-dom";

function App() {
  const [meteoriteData, setMeteoriteData] = useState([]);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetchAllMeteorites()
      .then(({ data }) => {
        setMeteoriteData(data);
      })
      .catch((err) => {
        setIsError(true);
      });
  }, []);

  return (
    <>
      <Routes>
        <Route index element={<Map data={meteoriteData} />} />
      </Routes>
    </>
  );
}
export default App;
