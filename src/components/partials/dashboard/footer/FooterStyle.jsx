import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Fragment } from "react";

const FooterStyle = () => {
  const [hover, setHover] = useState(false);
  return (
    <Fragment>
      <footer
        className="footer"
        style={{
          background: "#fff",
        }}
      >
        <div className="footer-body">
          <ul className="left-panel list-inline mb-0 p-0">
            <li className="list-inline-item">
              <Link
                to="#"
                style={{
                  color: hover ? "gray" : "darkslategrey",
                  textDecoration: "none",
                }}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
              >
                Privacy Policy
              </Link>
            </li>
            <li className="list-inline-item">
              <Link
                to="#"
                style={{
                  color: hover ? "gray" : "darkslategrey",
                  textDecoration: "none",
                }}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
              >
                Terms of Use
              </Link>
            </li>
          </ul>
          <div className="right-panel">
            ©<script>2022</script>{" "}
            <span data-setting="app_name">PrimeRad Subscription</span>,
            Copyright reserved&nbsp; .
          </div>
        </div>
      </footer>
    </Fragment>
  );
};

export default FooterStyle;
