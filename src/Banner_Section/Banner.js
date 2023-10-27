import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import './Banner.css';
import axios from 'axios';
const KEY = '071a4893f8f190756fd52514b3b529c2';


function Banners() {
    const[time,setTime]=useState(new Date())
    // console.log(time)

//     useEffect(()=>{
//    setInterval(()=>setTime(new Date()),1000)
//     },[])
    useEffect(()=>{
        const KeyDownHandler = event =>{
            console.log('user pressed : ',event.key);
            
            if (event.key== 'Enter'){
                event.preventDefault();

                fetchData();
            }
        };
        document.addEventListener('keydown',KeyDownHandler);

        return ()=>{
            document.removeEventListener('keydown',KeyDownHandler)
        }
    })
    const [city, setCity] = useState("attur");
    const [data, setData] = useState();


    const fetchData = async () => {
        try {
            const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY}`);
            setData(res.data)
            console.log(res.data)
        }
        catch (erro) {
            alert("Please Enter The City Name And Correctly")
        }

    }
    return (
        <>
            <Container fluid>
                <Row>
                    <div id="banner_images">
                    {/* <h1 className="times">{time.toLocaleTimeString()}</h1>   ,{data.sys.sunrise}*/}
                    
                        <Container>
                            <Row>
                            
                                <Col lg={6} md={12}>
                               
                                    <div className="left_details">
                                    
                                        <div className="cold_staus">
                                            
                                        <div>
                                            {data && (
                                                <div className="container">
                                                   <div className="country mt-5">
                                                   <h1  className="text-white" >{data.name},{data.sys.country}  </h1><br></br>
                                                   <h6 className="times">{time.toDateString()}</h6>
                                                   <h6 className="times">{time.toLocaleTimeString()}</h6>
                                                  
                                                   </div>
                                                   


                                                    <div className="container mt-3">
                                                        <h3 className="text-white"><img src={require('../assert/icons/sun.png')} width={60} height={60} alt="" />  {Math.round(data.main.temp)} &deg;C      <span className="text-white">Sunny</span></h3>
                                                        
                                                     </div>

                                                   

                                                     <div className="container mt-3">
                                                        <h3 className="text-white"><img src={require('../assert/icons/rain.png')} width={60} height={60} alt="" />     {data.wind.deg}  Rain</h3>
                                                        
                                                        <div className='boxes'>
                                                            <p className='flex-1 text-center p-2 font-bold  windspeed shadow rounded-lg'>Wind Speed <p className='font-normal'>{data.wind.speed} km/h</p></p>
                                                            <p className='flex-1 text-center p-2 font-bold rounded-lg  windspeed12'>Humidity <p className='font-normal'>{data.main.humidity} gm/m&#179;</p></p>
                                                        </div>
                                                    
                                                    {/* <div className="container sunset mt-3">
                                                    <p className='flex-1 text-center p-2 font-bold  windspeed shadow rounded-lg'>SunRise <p className='font-normal'>{data.sys.sunrise} </p></p>
                                                            <p className='flex-1 text-center p-2 font-bold rounded-lg  windspeed12'>SunSet <p className='font-normal'>{data.sys.sunset} </p></p>
                                                    </div> */}
                                                       
                                                     </div>
                                                </div>

                                                
                                            )}</div>
                                        </div>
                                    </div>
                                </Col>

                                <Col lg={6} md={12}>
                                    <div className="right_details">
                                        <div className="search_bar">

                                            <input type="text" 
                                            value={city} 
                                            placeholder="Enter The City Name Or Locations" 
                                            onChange={(e) => setCity(e.target.value)}
                                            
                                            // onClick={fetchData}
                                            />
                                          <button className="btns1"  onClick={fetchData}>Search..</button>
                                        </div>

                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>

                </Row>
            </Container>


           


            
        </>
    )
}

export default Banners