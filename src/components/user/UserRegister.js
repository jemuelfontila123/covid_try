import React, {useState} from 'react'
import useField from '../'

const UserRegister = () => {
    const [page, setPage] = setPage(1)
    const firstName = useField('text')
    const middleName = useField('text')
    const lastName = useField('text')
    const regions = useField()
    const provinces = useField()
    const cities = useField()
    const contactNumber = useField('text')
    const birthday = useField('date')
    return(
        <div>
            <form>
                <label> </label>
            </form>
        </div>
    )
}