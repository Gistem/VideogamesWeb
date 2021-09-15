import React from "react";
import { useSelector } from "react-redux";
import "./Post.css";

const Post = () => {
  const genres = useSelector((store) => store.genres);
  const platforms = useSelector((store) => store.platforms);

  return (
    <>
      <form action="http://localhost:3001/videogames" method="POST">
        <div class="post">
          <div class="genresx">
            <p class="title">Select genres</p>
            <div class="genres-box">
              {genres.map((genre) => {
                return (
                  <div class="check" key={genre.id}>
                    <input type="checkbox" name="genres" value={genre.id} />
                    <label htmlFor="genres"> {genre.name}</label>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="write">
            <div class="formContainer">
              <div>
                <button class="btn-form" type="submit">
                  {" "}
                  CREATE GAME{" "}
                </button>
                <input
                  type="text"
                  name="name"
                  class="input_box"
                  placeholder="Name..."
                />
                <textarea
                  type="text"
                  name="description"
                  class="input_box"
                  placeholder="Description..."
                />
                <input
                  type="text"
                  name="img"
                  id="TheImg"
                  class="input_box"
                  placeholder="Cover url..."
                />
                <input
                  type="date"
                  name="released"
                  class="input_box"
                  placeholder="released..."
                />
                <div class="sel-rating">
                  Rating
                  <select name="rating" id="">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3" selected>
                      3
                    </option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div class="platformsx">
            <p class="title">Select platforms</p>
            <div class="platforms-box">
              {platforms.map((platform) => {
                return (
                  <div class="check" key={platform.id}>
                    <input
                      type="checkbox"
                      name="platforms"
                      value={platform.id}
                    />
                    <label htmlFor="platforms"> {platform.name}</label>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Post;
