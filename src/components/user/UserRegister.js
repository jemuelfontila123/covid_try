import  {useState} from 'react'
import useField from '../hooks/useField'

const UserRegister = (props) => {
    const [page, setPage] = useState(1)
    const firstName = useField('text')
    const middleName = useField('text')
    const lastName = useField('text')
    const contactNumber = useField('text')
    const birthday = useField('date')
    const email = useField('email')
    const password = useField('password')
    const [region, setRegion] = useState('')
    const [province, setProvince] = useState('')
    const [city, setCity] = useState('')

    const handleRegionChange = (event) => {
        setRegion(event.target.value)
        const provinces = props.provinces.filter(province => province.region === event.target.value)
        setProvince(provinces[0].key)
        setCity('')
    }
    const handleProvinceChange = event => {
        setProvince(event.target.value)
        setCity('')
    }
    const handleCityChange  = event => setCity(event.target.value)
    console.log(province)
    return(
        <div>
            <form>
                { page === 1 ? 
                <>
                <h1>Basic Information</h1>
                <div>
                    <label>First Name</label>
                    <input {...firstName}/>
                </div>
                <div>
                    <label> Middle Name</label>
                    <input {...middleName}/>
                </div>
                <div>
                    <label>Last Name</label>
                    <input {...lastName}/>
                </div>
                <div>
                    <label>Birthday</label>
                    <input {...birthday}/>
                </div>
                <button onClick={() => setPage(page+1)}>Next</button>
                </>
                : null
                }
                { page === 2 ? 
                <>
                <h1>Address Details</h1>
                <div>
                    <label>Region</label>
                    <select value={region} onChange={handleRegionChange}>
                    {props.regions.map((region, index) => 
                        <option key={index} value={region.key}>{region.name}</option>
                    )}
                    </select>
                </div>   
                <div>
                    <label>Province</label>
                    <select value={province} onChange={handleProvinceChange} disabled={region===''? 'disabled': null}>
                    {props.provinces.filter(province => province.region === region).map((province, index) => 
                        <option key={index} value={province.key}>{province.name}</option>
                    )}
                    </select>
                </div>
                <div>
                    <label>City</label>
                    <select value={city} onChange={handleCityChange} disabled={province===''? 'disabled': null}>
                    {props.cities.filter(city => city.province === province).map((city, index) => 
                        <option key={index} value={city.name}>{city.name}</option>
                    )}
                    </select>
                </div>      
                <button onClick={() => setPage(page+1)}>Next</button>
                </> : null
                }
                { page === 3 ?
                <>
                <div>
                    <label>Contact Number</label>
                    <input {...contactNumber}/>
                </div>
                <button onClick={() => setPage(page+1)}>Next</button>
                </> : null
                }
                <button type='submit'>Register</button>
            </form>
        </div>
    )
}

export default UserRegister;