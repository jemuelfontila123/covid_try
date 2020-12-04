import React, {useState} from 'react'
import useField from './hooks/useField'


const Information = ({firstName, middleName, lastName, handlePage}) => {
    return(
        <div>
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
            <button onClick={() => handlePage(1)}>Next</button>
        </div>
    )
}
export default Information;