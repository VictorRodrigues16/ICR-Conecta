import React from "react";
import { useState } from "react";
import "../styles/map.scss";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
} from "@vis.gl/react-google-maps";

export default function Maps() {
  const position = { lat: -23.55558042209387, lng: -46.672813238287496 };
  const API_KEY = "AIzaSyC_x81o317a6-6O9ryd3JpcB8861VzHW-s";
  const mapId = "4ed6f628888d633d";
  let zoom = 17;

  const [open, setOpen] = useState(false);

  return (
    <>
      <section id="map">
        <h1>COMO CHEGAR</h1>

        <APIProvider apiKey={API_KEY}>
          <div className="map-container">
            <Map defaultZoom={zoom} center={position} mapId={mapId}>
              {zoom < 17 ? (
                <AdvancedMarker
                  onClick={() => setOpen(true)}
                  position={position}
                ></AdvancedMarker>
              ) : null}

              {open && (
                <InfoWindow
                  position={position}
                  onCloseClick={() => setOpen(false)}
                >
                  <div id="info">
                    <h3>Instituto da Criança e do Adolescente - ICr HCFMUSP</h3>

                    <p>
                      Av. Dr. Enéas Carvalho de Aguiar, 647 - Cerqueira César
                      São Paulo - SP
                    </p>

                    <p>05403-000</p>

                    <p>Brasil</p>

                    <a href="https://www.google.com/maps?ll=-23.55558,-46.672813&z=17&t=m&hl=pt-BR&gl=US&mapclient=apiv3&cid=4554229573118434579">Visualize no Google Maps</a>
                  </div>
                </InfoWindow>
              )}
            </Map>
          </div>
        </APIProvider>
      </section>
    </>
  );
}
