import React , {useEffect, useState, useReducer}from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import addressServices from './services/addressServices'
import UserRegister from './components/UserRegister'
import regionsReducer from './reducer/regionsReducer'
// const RegionContext = React.createContext();
// const ProvinceContext = React.createContext();
// const CityContext = React.createContext();
const App  = () => {
  const [regions, dispatch] = useReducer(regionsReducer, [])
  // const [provinces, dispatch] = useState([])
  // const [cities, dispatch] = useState([])
  useEffect(() => {
    const getAddress = async() => {
      const regionData = await addressServices.getRegions();
      dispatch({type:'setRegions', regions:regionData})
      // const provinceData = await addressServices.getProvinces();
      // const cityData = await addressServices.getCities();
      // setRegions(regions.concat(regionData));
      // setProvinces(provinces.concat(provinceData))
      // setCities(cities.concat(cityData))
    }
    getAddress()
  },[])
  console.log(regions)
  return(
    <div>
      {/* <UserRegister regions={regions} provinces={provinces} cities={cities}/> */}
    </div>
  )
}
ReactDOM.render( <App />, document.getElementById('root')
);

