import React , {useEffect, useState}from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import addressServices from './services/addressServices'
import UserRegister from './components/user/UserRegister'
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
  // console.log(provinces)
  return(
    <div>
      
      <UserRegister regions={regions} provinces={provinces} cities={cities}/>
    </div>
  )
}
ReactDOM.render( <App />, document.getElementById('root')
);

