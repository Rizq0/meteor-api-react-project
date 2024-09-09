import { useState, useEffect } from "react";
import { fetchAllMeteorites } from "./api-calls/nasa";
import { Map } from "./components/Map";
import "./App.css";

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
    <div>
      <Map data={meteoriteData} />
    </div>
  );
}
export default App;
