import React, {useState} from 'react'
import useField from './hooks/useField'


const Address = ({regions, handlePage}) => {
    return(
        <>
            <div>
                <label>Region</label>
                <select value={region} onChange={handleRegionChange}>
                {regions.map((region, index) => 
                    <option key={index} value={region.key}>{region.name}</option>
                )}
                </select>
            </div>   
            {/* <div>
                <label>Province</label>
                <select value={province} onChange={handleProvinceChange} disabled={region===''? 'disabled': null}>
                {provinces.filter(province => province.region === region).map((province, index) => 
                    <option key={index} value={province.key}>{province.name}</option>
                )}
                </select>
            </div>
            <div>
                <label>City</label>
                <select value={city} onChange={handleCityChange} disabled={province===''? 'disabled': null}>
                {cities.filter(city => city.province === province).map((city, index) => 
                    <option key={index} value={city.name}>{city.name}</option>
                )}
                </select>
            </div> */}
            <button onClick={() => handlePage(-1)}>Back</button>
            <button onClick={() => handlePage(1)}>Next</button>      
        </>
    )
}


export default Address;