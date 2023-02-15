import { MapContainer, TileLayer } from "react-leaflet";

import points from "../../points";
import MyMarkers from "../MyMarkers/MyMarkers";

const NavoiMap = () => {
  const position = [40.10357929455832, 65.37255383959241];
  return (
    <div>
      <h1 className="text-center font-normal text-[50px] my-[25px] interactive-map text-[#1A4D65]">
        Interactive map
      </h1>
      <MapContainer center={position} zoom={12} scrollWheelZoom={false}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <MyMarkers points={points} />
      </MapContainer>
    </div>
  );
};

export default NavoiMap;
