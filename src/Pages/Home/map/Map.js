import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import './Map.css';

const Map = () => {
    return (
        <>
            <div className="text-center text-3xl my-8 font-bold uppercase">Contact with Location</div>
            <div className=" justify-center items-center mb-8">
                <MapContainer center={[24.365313, 88.599940]} zoom={10} scrollWheelZoom={true}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[24.365313, 88.599940]}>
                        <Popup>
                            Location of Mobile-Manufacturers.
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
        </>
    );
};

export default Map;