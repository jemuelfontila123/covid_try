import  {useState} from 'react'
import useField from './hooks/useField'
import Information from './Information'
import Address from './Address'
const UserRegister = ({regions, provinces, cities}) => {
    const [page, setPage] = useState(1)
    const handlePage = (add) => setPage(page+add);
    const [account, setAccount] = useState('User')
    const firstName = useField('text')
    const middleName = useField('text')
    const lastName = useField('text')
    const [region, setRegion] = useState('')
    const [province, setProvince] = useState('')
    const [city, setCity] = useState('')
    const handleRegionChange = (event) => {
        setRegion(event.target.value)
        const provinces = provinces.filter(province => province.region === event.target.value)
        setProvince(provinces[0].key)
        setCity('')
    }
    const handleProvinceChange = event => {
        setProvince(event.target.value)
        setCity('')
    }
    const handleCityChange  = event => setCity(event.target.value)
    const handleChangeAccount = (event) => setAccount(event.target.value)
    const contactNumber = useField('text')
    const email = useField('email')
    const password = useField('password')
    console.log(province)
    return(
        <div>
            <form>
                { page === 1 ? 
                <>
                <h1>Basic Information</h1>
                <Information firstName={firstName} 
                middleName={middleName} 
                lastName={lastName}
                 handlePage={handlePage}/>
                </>
                : null
                }
                { page === 2 ? 
                <>
                <h1>Address Details</h1>
                <Address regions={regions} 
                provinces={provinces} 
                cities={cities}
                handleRegionChange={handleRegionChange}
                handleProvinceChange={handleProvinceChange}
                handleCityChange={handleCityChange}
                handlePage={handlePage}/>
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
                {/* <button type='submit'>Register</button> */}
            </form>
        </div>
    )
}

export default UserRegister;