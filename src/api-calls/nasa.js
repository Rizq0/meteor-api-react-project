import axios from "axios";

export const fetchAllMeteorites = () => {
  return axios.get("https://data.nasa.gov/resource/gh4g-9sfh.json");
};
