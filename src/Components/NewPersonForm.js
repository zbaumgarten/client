import { useState } from "react"
import { useNavigate } from 'react-router-dom'

const INITIAL_STATE = {
    name: '',
    age: '',
    location: '',
    favoriteColor: ''
}

export default function NewPersonForm() {
    const [data, setData] = useState(INITIAL_STATE)
    const navigate = useNavigate()

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        data.age = Number(data.age)
        console.log(data)

        const response = await fetch('http://localhost:8080/person', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        
        if (response.status !== 201) {
            // handle error here
        } else {
            navigate('/', { replace:true })
        }
        
        // const responseData = await response.json()
        // console.log(response)
        // console.log(responseData)
    }

    return(
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange} required name='name' placeholder='name' value={data.name} />
            <input onChange={handleChange} required name='age' type='number' placeholder='age' value={data.age} />
            <input onChange={handleChange} required name='location' placeholder='location' value={data.location} />
            <input onChange={handleChange} name='favoriteColor' placeholder='favoriteColor' value={data.favoriteColor} />

            <button type='submit'>Submit</button>
        </form>
    )
}