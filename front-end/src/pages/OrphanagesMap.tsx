import React, { useEffect, useState } from 'react';
import logoImg from '../images/map-marker.svg';
import { Link } from 'react-router-dom';
import{ FiPlus, FiArrowRight } from 'react-icons/fi';
import '../styles/pages/orphanages-map.css';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import Leaflet from 'leaflet';
import api from '../services/api';

const mapIcon = Leaflet.icon({
  iconUrl: logoImg,
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 10],
})

interface Orphanage {
  id: number;
  latitude: number;
  longitude: number;
  name: string;

}

function OrphanageMap() {

  const [orphanages, setOrphanages] = useState<Orphanage[]>([]);

  console.log(orphanages);

  useEffect(() => {
    api.get('orfanatos').then((response) => {
      setOrphanages(response.data);
    })
  }, []);

  return (
    <div id="page-map">
      
      <aside>
        <header>
          <img src={logoImg} alt="Logo" />
          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>
        <footer>
          <strong>Joinville</strong>
          <span>Santa Catarina</span>
        </footer>
      </aside>
      <Map 
        center={[-26.3055339,-48.850644]}
        zoom={13}
        style={{ width: '100%', height: '100%' }}
      >
        <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {orphanages.map(orphanage => {
          return (
            <Marker 
              icon={mapIcon}
              position={[orphanage.latitude, orphanage.longitude]}
              key={orphanage.id}
            >
              <Popup closeButton={false} minWidth={240} maxWidth={240} className="mapPopup">
              {orphanage.name}
                <Link to={`/orfanatos/${orphanage.id}`}>
                  <FiArrowRight size={20} color="#FFF"/>
                </Link>
              </Popup>
            </Marker>
          )
        })}
      </Map>
      <Link to="/orfanatos/criar" className="create-orphanage"> 
        <FiPlus size={32} color="#FFF" />
      </Link>
    </div>
  );
}

export default OrphanageMap;
