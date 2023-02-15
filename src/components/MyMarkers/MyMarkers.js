import { Marker, Popup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster";
import L from "leaflet";
const MyMarkers = ({ points }) => {
  console.log(points[1].icon);
  return points.map(({ latlon, name, icon, address_uz_lo }, index) => (
    <Marker
      key={index}
      position={[latlon[0], latlon[1]]}
      icon={new L.Icon({ iconUrl: icon, iconSize: [20, 20] })}
    >
      <Popup>
        <h3>{name}</h3>
        <p>{address_uz_lo}</p>
      </Popup>
    </Marker>
  ));
};

export default MyMarkers;
