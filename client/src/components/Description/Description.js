import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios'
import parse from 'html-react-parser'

const Description = (location) => {

    function back() {
        window.history.back();
    }

    const { id } = useParams();
    const [data, setData] = useState({});
    const [isLoading, setLoading] = useState(true);
    // console.log('acaaaaaaaaa',data)
    useEffect(() => {

        axios.get(`http://localhost:3001/videogames/${id}`)
            .then(response => {
                setData({ ...response.data })
                setLoading(false);
            })
            .catch(error => console.log(error));
    }, []);
    
    if (isLoading) {
        return (
            <div className="loading">
                <h1>Loading</h1>
            </div>
        )
    }

    return (

        <>
            <div className="page-container">
                

                <div className="container-detail">
                    <div className="detail">
                        <div className="top">
                            <div className="button">
                                <button className='close' onClick={back}>X</button>
                            </div>
                            <div className="rating">
                                <h3>Rating</h3>
                                <h2>{data.rating}</h2>
                            </div>

                            <div className="cover">
                                <img src={data.background_image} alt="" />
                            </div>
                            <div className="data">
                                <div className="name">
                                    {data.name}
                                </div>
                            </div>
                        </div>


                        <hr />


                        <div className="bottom">
                            <div className="desc">
                                <h1>Details</h1>
                                {parse(`${data.description}`)}
                            </div>
                            <hr />
                            <div className="inf">
                                <div className="rel-container">
                                    <h3>Released</h3>
                                    <p>{data.released}</p>
                                </div>
                                <div className="plat-container">
                                    <h3>Platforms</h3>
                                    <div className="plat">
                                        {data.platforms.map(p => {
                                            return (
                                                <p>{p.name}</p>
                                            )
                                        })}
                                    </div>
                                    </div>
                                    <div className="gen-container">
                                        <h3>Genres</h3>
                                        <div className="gen">
                                        {data.genres.map(p => {
                                            return (
                                                <p>{p.name}</p>
                                            )
                                        })}
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )

}

export default Description;