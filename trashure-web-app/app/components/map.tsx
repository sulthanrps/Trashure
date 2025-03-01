'use client'

import { useEffect } from "react"
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

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

        L.marker([-7.5361, 112.2384])
            .addTo(map)
            .bindPopup(`
                    <div>
                        <h1 style="font-weight: bold; font-size: 20px;">Event Kerja Bakti Di Jombang</h1>
                        <p>
                            Tanggal pelaksanaan : 12 Agustus 2025 <br />
                            Hubungi : 08xxxxxxxxxx
                        </p>

                        <img
                            src='/vision-img.jpg'
                            style="width: 100%; max-width: 300px; height: auto;"
                            alt="Vision Image"
                        />
                    </div>
            `)

        L.marker([-7.63, 111.523])
            .addTo(map)
            .bindPopup(`
                    <div>
                        <h1 style="font-weight: bold; font-size: 20px;">Sosialisasi Daur Ulang Di Madiun</h1>
                        <p>
                            Tanggal pelaksanaan : 10 Agustus 2025 <br />
                            Hubungi : 08xxxxxxxxxx
                        </p>

                        <img
                            src='/vision-img.jpg'
                            style="width: 100%; max-width: 300px; height: auto;"
                            alt="Vision Image"
                        />
                    </div>
            `)

        return () => {
            map.remove()
        }
    }, [])

    return (
        <div className="rounded-xl" id="map" style={{height: '500px', width: '100%'}} />
    )
}