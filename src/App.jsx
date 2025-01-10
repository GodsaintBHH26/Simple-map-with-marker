import { Icon, popup, divIcon, point } from "leaflet";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";

function App() {
  const markers = [
    {
      geocode: [23.715725, 86.950771],
      popUp: "AEC - 23.715725, 86.950771",
    },
    {
      geocode: [23.71485, 86.95253],
      popUp: "meusium",
    },
    {
      geocode:[23.707126, 86.952686],
      popUp:"lol"
    }
  ];

  const mapIcons = new Icon({
    iconUrl: "https://www.svgrepo.com/show/315940/map-pointer.svg",
    iconSize: [38, 38],
  });

  const createClusterIcon = (cluster)=>{
    return new divIcon({
      html: `<div class="cluster-icon">${cluster.getChildCount()}</div>`,
      className:"custom-marker-cluster",
      iconSize: point(33, 33, true)
    })
  }

  return (
    <>
    <h1 className="absolute top-1 left-96 text-[#00e889] font-bold">Maps</h1>
    <div className="w-1/2 h-128 absolute top-24 left-96 bg-gradient-to-b from-[#8f8f8f] to-[#c4c2c2] ">
      <MapContainer
        center={[23.6889, 86.9661]}
        zoom={13}
        className="w-full h-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <TileLayer 
        attribution="TopPlusOpen"
        url="http://sgx.geodatenzentrum.de/wmts_topplus_open/tile/1.0.0/web/default/WEBMERCATOR/{z}/{y}/{x}.png"
        />
        <MarkerClusterGroup chunkedLoading iconCreateFunction={createClusterIcon} >
          {markers.map((marker) => (
            <Marker position={marker.geocode} icon={mapIcons}>
              <Popup>
                <h3 className="capitalize text-center font-bold">
                  {" "}
                  {marker.popUp}{" "}
                </h3>
              </Popup>
            </Marker>
          ))}
        </MarkerClusterGroup>
      </MapContainer>
    </div>
    </>
  );
}

export default App;
