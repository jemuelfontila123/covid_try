import axios from 'axios'

const getRegions = async() => {
    const response = await axios.get('regions.json')
    const data = response.data;
    return data;
}
const getProvinces = async() => {
    const response = await axios.get('provinces.json')
    const data = response.data;
    return data;
}
const getCities = async() => {
    const response = await axios.get('cities.json')
    const data = response.data;
    return data;
}


export default {
    getRegions,
    getProvinces,
    getCities
}