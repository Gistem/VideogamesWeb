import React from 'react'
import { useSelector } from "react-redux"


const Post = () => {
    const genres = useSelector(store => store.genres)
    const platforms = useSelector(store => store.platforms)

    return (
        <>
            <div className="post">
                <div className="container-post">
                    <div className="title">
                        <h1>CREATE GAME</h1>
                    </div>
                    <form action="http://localhost:3001/videogames" method="POST">
                        <div className="write">
                            <p>Set name</p>
                            <input
                                type="text"
                                name="name"
                                className="input-post"
                                placeholder="Name..."
                            />
                            <p>Set description</p>
                            <textarea
                                type="text"
                                name="description"
                                className="input-post"
                                placeholder="Description..."
                            />
                            <p>Set cover image </p>
                            <input
                                type="text"
                                name="img"
                                className="input-post"
                                placeholder="Cover url..."
                            />
                            <p>Set released date </p>
                            <input
                                type="date"
                                name="released"
                                className="input-post"
                                placeholder="released..."
                            />
                        </div>
                        <p>Rate it</p>
                        <div className="sel-rating">
                            <select name="rating" id="">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3" selected>3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </div>
                        <hr />
                        <p>Select genres</p>
                        <div className="genres-box">

                            {genres.map(genre => {
                                return (
                                    <div className="check" key={genre.id}>
                                        <input type="checkbox" name="genres" value={genre.id} />
                                        <label htmlFor="genres">{genre.name}
                                        </label>
                                    </div>
                                )
                            })}

                        </div>
                        <hr />
                        <p>Select platforms</p>
                        <div className="platforms-box">

                            {platforms.map(platform => {
                                return (
                                    <div className="check" key={platform.id}>
                                        <input type="checkbox" name="platforms" value={platform.id} />
                                        <label htmlFor="platforms">{platform.name}
                                        </label>
                                    </div>
                                )
                            })}

                        </div>
                        <div className="btn-form">
                        <button type="submit"> ADD GAME </button>
                        </div>

                    </form>
                </div>
            </div>
        </>
    )
}

export default Post;