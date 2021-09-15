import React from "react";
import { Link } from "react-router-dom";
import "./ErrorPage.css";

const ErrorPage = () => {
  return (
    <>
      <div class="errorpage">
        <div class="cartelubication">
          <h2 class="rylost">Are you lost?😕</h2>
          <div class="numbererror">
            <h4 class="error404">4</h4>
            <h4 class="error404" id="cero">
              0
            </h4>
            <h4 class="error404">4</h4>
          </div>
          <div class="page">
            <h4 class="error404">Pag</h4>
            <h4 class="error404" id="e">
              e
            </h4>
          </div>
          <div class="not">
            <h4 class="error404">no</h4>
            <h4 class="error404" id="t">
              t{" "}
            </h4>
          </div>
          <div class="found">
            <h4 class="error404" id="fo">
              fo
            </h4>
            <h4 class="error404">un</h4>
            <h4 class="error404" id="d">
              d
            </h4>
          </div>
          <Link to="/">
            <button class="filter-btn">Go home</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
