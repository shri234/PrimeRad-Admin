import React, { Fragment, memo } from "react";

const IconComponent = memo((props) => {
  return (
    <Fragment>
      <a className="text-white d-flex align-items-center lh-lg mt-4" href="#">
        <i className={`${props.class} fa-xl me-2 lh-lg`}></i>
        <h5 className="text-white fw-bold mt-2 ms-2 lh-lg">{props.name}</h5>
      </a>
    </Fragment>
  );
});

IconComponent.displayName = "IconComponent";
export default IconComponent;
