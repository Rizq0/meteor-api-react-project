import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";

const meteoriteIcon = new Icon({
  iconUrl: "src/meteorite.png",
  iconSize: [25, 25],
});

export const Map = ({ data }) => {
  return (
    <div>
      <MapContainer
        center={[51.505, -0.09]}
        zoom={10}
        style={{ height: "100vh", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attribution">CARTO</a>'
        />
        {data.map((meteorite) => {
          if (meteorite.geolocation) {
            return (
              <Marker
                key={meteorite.name}
                position={[
                  meteorite.geolocation.latitude,
                  meteorite.geolocation.longitude,
                ]}
                icon={meteoriteIcon}
              >
                <Popup>
                  {meteorite.name} <br /> {meteorite.year}
                </Popup>
              </Marker>
            );
          } else {
            return null;
          }
        })}
      </MapContainer>
    </div>
  );
};
