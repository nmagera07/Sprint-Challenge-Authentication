import React, {useState, useEffect} from 'react';
import axios from 'axios'
import {axiosWithAuth} from './axiosWithAuth'

const Jokes = (props) => {
    const [data, setData] = useState([])

    useEffect(() => {
        axiosWithAuth()
            .get('http://localhost:3300/api/jokes')
            .then(response => {
                console.log(response.data)
                setData(response.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])
    console.log(data)
    return ( 
        <div className="jokes-box">
            <h3>Jokes Box</h3>
            {data ? data.map((x,i) => {
                return <div key={i}className="jokes">
                    <p>{x.joke}</p>
                </div>
            }) : <p>loading</p>}
        </div>
     );
}
 
export default Jokes;