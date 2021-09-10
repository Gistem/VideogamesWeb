import React from "react";
import { Link } from "react-router-dom";
import "./ErrorPage.css";

const ErrorPage = () => {
  return (
    <>
      <div class="errorpage">
        <h2>Are you lost??😕</h2>
        <h4 class="error404">4</h4>
        <h4 class="error404" id="0">
          0
        </h4>
        <h4 class="error404">4 </h4>
        <h4 class="error404">Pag</h4>
        <h4 class="error404" id="e">
          e
        </h4>
        <h4 class="error404"> no</h4>
        <h4 class="error404" id="t">
          t{" "}
        </h4>
        <h4 class="error404" id="fo">
          fo
        </h4>
        <h4 class="error404">un</h4>
        <h4 class="error404" id="d">
          d
        </h4>
        <Link to="/">
          <button>Go Home</button>
        </Link>
      </div>
    </>
  );
};

export default ErrorPage;
