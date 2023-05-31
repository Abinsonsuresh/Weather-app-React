import React, { useEffect, useState } from 'react'
import Card from './Card'

export default function Home() {
    const OnChange = (event) => {

        setSearch(event.target.value)

    }
    // const Searchkaro = () => {
    //     // setSearch(City)
    //     console.log(Search)
    // }
    const [City, setCity] = useState(null)
    const [Search, setSearch] = useState("London")
    const [Description, setDescription] = useState(null)
    const [wind, setwind] = useState(null)


    useEffect(() => {
        const apicall = async () => {
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${Search},in&APPID=5e3409eea657c99e039acd2642d5238b`

            const response = await fetch(url)
            const resjson = await response.json()
            console.log(resjson)
            setCity(resjson.main)
            setDescription(resjson.weather)
            setwind(resjson.wind)
        }
        apicall()
    }, [Search])

    return (
        <>
            <div className="container my-3">

                <h1>Weather App</h1>
                <div className="d-flex flex-column justify-content-center my-3 align-items-center">
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search city" aria-label="Search" style={{ width: "18rem"}} onChange={OnChange} />
                        {/* <button className="btn btn-primary" type="submit" onClick={Searchkaro}>Search</button> */}
                    </form>

                </div>
                {!City ? (
                    <div className='my-3 text-center'>
                        <h2>City: Not found </h2>
                    </div>

                ) : (
                    <div>
                        <div className='my-3 text-center'>
                            <h2>City: {Search} <span><img src="" alt="" /></span></h2>
                        </div>

                        <div className="container text-center">
                            <div className="row">
                                <div className="row row-cols-md-4 justify-content-md-center">
                                    <Card title="Temprature" degree={City.main.temp} dstate={Description.weather.description} />
                                    <Card title="Humidity" degree={City.main.humidity} />
                                    <Card title="Wind Speed" degree={wind.wind.speed} />

                                </div>
                            </div>

                        </div>
                    </div>
                )}




            </div>

        </>
    )
}
