import React , {useEffect, useState}from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import addressServices from './services/addressServices'
const App  = () => {
  const [regions, setRegions] = useState(['',])
  const [provinces, setProvinces] = useState(['',])
  const [cities, setCities] = useState(['',])
  useEffect(() => {
    const getAddress = async() => {
      const regionData = await addressServices.getRegions();
      const provinceData = await addressServices.getProvinces();
      const cityData = await addressServices.getCities();
      setRegions(regions.concat(regionData));
      setProvinces(provinces.concat(provinceData))
      setCities(cities.concat(cityData))
    }
    getAddress()
  },[])
  return(
    <div>
      <h1>Wew</h1>
      {/* {location.map(location => <h1>{location.region_name}</h1>)} */}
    </div>
  )
}
ReactDOM.render( <App />, document.getElementById('root')
);

