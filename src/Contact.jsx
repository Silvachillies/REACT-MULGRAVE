import Navbar from "./Navbar";
import AnimatedPage from "./Animated";
import "./Map.css";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
} from "@vis.gl/react-google-maps";
import { func } from "prop-types";
import { useEffect, useState } from "react";
import { MessageCircleCode } from "lucide-react";
const API_KEY = "AIzaSyC7AWt6a5UBDq0VAZm3cd7MY8oBH_YjJ3s";
const mapid = "7f0405534881e252";

export default function ContactPage() {
  const centre = { lat: 51.505, lng: -0.0239 };
  const [open, setOpen] = useState(false);
  const containerStyle = {
    width: "400px",
    height: "400px",
  };
  return (
    <AnimatedPage>
      <Navbar />
      <APIProvider apiKey={API_KEY}>
        <h1>CONTACT</h1>
        <h3>Come and visit our Canary Wharf Showroom today.</h3>
        <p>0208222222</p>

        <div className="map">
          <div style={containerStyle}>
            <Map zoom={9} center={centre} mapId={mapid}>
              <AdvancedMarker
                position={centre}
                map={mapid}
                onClick={() => setOpen(true)}
              >
                <Pin borderColor={"green"} />
              </AdvancedMarker>
              {open && (
                <InfoWindow
                  position={centre}
                  onCloseClick={() => setOpen(false)}
                >
                  <p>25 Cabot Square MULGRAVE HQ</p>
                  <p>E14 4JQ</p>
                </InfoWindow>
              )}
            </Map>
          </div>
        </div>
      </APIProvider>
    </AnimatedPage>
  );
}
