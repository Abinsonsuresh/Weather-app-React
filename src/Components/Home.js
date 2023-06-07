import React, {  useEffect, useState } from 'react'
import Card from './Card'

export default function Home() {
    const [Search, setSearch] = useState("Kochi")
    
    const [City, setCity] = useState("")
    const [Description, setDescription] = useState("")
    const [wind, setwind] = useState("")
    const [Humidity, setHumidity] = useState("")
    const [Name, setName] = useState("Kochi")
    const OnChange = (event) => {
        setSearch(event.target.value)
    }
    const Searchkaro = () => {
        
        }
    
    
        useEffect(() => {
            const apicall = async () => {
                const url = `http://api.openweathermap.org/data/2.5/weather?q=${Search},in&APPID=14f5fc262f3672d944f809a6e2e6c833`
    
                const response = await fetch(url)
                const resjson = await response.json()
                console.log(resjson)
                setCity(resjson.main.temp - 273.15)
                setDescription(resjson.weather.description)
                setwind(resjson.wind.speed)
                setHumidity(resjson.main.humidity)
                setName(resjson.name)
            }
            apicall()
        },[Search])
    return (
        <>
            <div className="container my-3">

                <h1>Weather App</h1>
                <div className="d-flex flex-column justify-content-center my-3 align-items-center">
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search city" aria-label="Search" style={{ width: "18rem" }} onChange={OnChange} />
                        <button className="btn btn-primary" type="submit" onClick={Searchkaro}>Search</button>
                    </form>

                </div>
                
           { !Search?(
            <p>hoga</p>
           ):(
            
                <div>
                <div>
                <div className='my-3 text-center'>
                    <h2>City: {Name} <span><img src="" alt="" /></span></h2>
                </div>


            </div>

        <div className="container text-center">
            <div className="row">
                <div className="row row-cols-md-4 justify-content-md-center">
                    <Card title="Temprature" dstate={Description} degree={City}  />
                    <Card title="Humidity" degree={Humidity}/>
                    <Card title="Wind Speed" degree={wind} />

                </div>
            </div>

        </div>
        </div>
            
           )
           
           }
              
                    




            </div>

        </>
    )
}

