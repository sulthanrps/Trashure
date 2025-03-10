'use client'

import { useEffect } from "react"
import L from 'leaflet'
import { popUpData } from "../data/popUpData"

export default function Map(){
    useEffect(() => {
        const DefaultIcon = L.icon({
            iconUrl: '/images/marker-icon.png',
            iconRetinaUrl: '/images/marker-icon-2x.png',
            shadowUrl: '/images/marker-shadow.png',
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            shadowSize: [41, 41],
          });

        L.Marker.prototype.options.icon = DefaultIcon;

        const map = L.map('map', {
            center: [-7.5361, 112.2384],
            zoom: 9
        })

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors'
        }).addTo(map)
        
        popUpData.map((data) => {
            L.marker([data.lonlan[0], data.lonlan[1]])
            .addTo(map)
            .bindPopup(`
                    <div>
                        <h1 style="font-weight: bold; font-size: 20px;">${data.title}</h1>
                        <p>
                            Tanggal pelaksanaan : ${data.date} <br />
                            Hubungi : ${data.contactPerson}
                        </p>

                        <img
                            src=${data.imgSrc}
                            style="width: 100%; max-width: 300px; height: auto;"
                            alt=${data.imgAlt}
                        />
                    </div>
            `)
        })

       

        return () => {
            map.remove()
        }
    }, [])

    return (
        <div className="rounded-xl" id="map" style={{height: '500px', width: '100%'}} />
    )
}