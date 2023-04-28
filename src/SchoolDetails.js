import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
const SchoolDetails = () => {
    const [school, setSchool] = useState({})

    const params = useParams()
    const id = params.id

    useEffect(() => {
        fetch(`http://localhost:5000/schools/${id}`)
        .then((res) => res.json())
        .then((s) => {
            setSchool(s)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [id])


    return (
        <div>
            <div className='part1'>
                <h1>{school.school_name}</h1>
                <img src={school.img_url} alt="school-img" className='image1'/>
                <div className='blog'>
                    <table>
                        <tr>
                            <td><h3>Category</h3></td>
                            <td><h3>:</h3></td>
                            <td><h3>{school.school_category}</h3></td>
                        </tr>
                        <tr>
                            <td><h3>Number of taps</h3></td>
                            <td><h3>:</h3></td>
                            <td><h3>{school.no_of_students}</h3></td>
                        </tr>
                        <tr>
                            <td><h3>Panchayat</h3></td>
                            <td><h3>:</h3></td>
                            <td><h3>{school.panchayat}</h3></td>
                        </tr>
                        <tr>
                            <td><h3>Block</h3></td>
                            <td><h3>:</h3></td>
                            <td><h3>{school.block}</h3></td>
                        </tr>
                        <tr>
                            <td><h3>District</h3></td>
                            <td><h3>:</h3></td>
                            <td><h3>{school.district}</h3></td>
                        </tr>
                        <tr>
                            <td><h3>State</h3></td>
                            <td><h3>:</h3></td>
                            <td><h3>{school.state}</h3></td>
                        </tr>
                    </table>                                
                </div>           
            </div>
        </div>
    )
}

export default SchoolDetails