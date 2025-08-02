import React, { memo, Fragment } from "react";

// redux
import { useSelector, useDispatch } from "react-redux";

// Import selectors & action from setting store
import * as SettingSelector from "../../store/setting/selectors";
import { theme_color } from "../../store/setting/actions";

const ThemeColor = memo(() => {
  const direction = useSelector(SettingSelector.theme_color);
  const dispatch = useDispatch();
  return (
    <Fragment>
      <i
        className="fa-solid fa-sun"
        onClick={() => console.log(dispatch(theme_scheme("light")))}
      ></i>
    </Fragment>
  );
});

ThemeColor.displayName = "ThemeColor";
export default ThemeColor;
