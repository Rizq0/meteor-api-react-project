import axios from "axios";

const nasaApi = axios.create({
  baseURL: "https://data.nasa.gov/resource/gh4g-9sfh.json",
  timeout: 1000,
});

export const fetchAllMeteorites = () => {
  return nasaApi.get("/");
};
