import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import withRouter from "../Components/Common/withRouter";

import Header from './Header';
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import { changeLayoutMode, changeLayout } from "../store/actions";
import { useSelector, useDispatch } from "react-redux";

const Layout = (props) => {
  const [headerClass, setHeaderClass] = useState("");
  const dispatch = useDispatch();
  const { layoutModeType, layoutType } = useSelector((state) => ({
    layoutModeType: state.Layout.layoutModeType,
    layoutType: state.Layout.layoutType,
  }));

  useEffect(() => {
    if (layoutType || layoutModeType) {
      dispatch(changeLayoutMode(layoutModeType));
      dispatch(changeLayout(layoutType));
    }
  }, [layoutModeType, dispatch]);

  const onChangeLayoutMode = (value) => {
    if (changeLayoutMode) {
      dispatch(changeLayoutMode(value));
    }
  };

  // class add remove in header
  useEffect(() => {
    window.addEventListener("scroll", scrollNavigation, true);
  });
  function scrollNavigation() {
    var scrollup = document.documentElement.scrollTop;
    if (scrollup > 50) {
      setHeaderClass("topbar-shadow");
    } else {
      setHeaderClass("");
    }
  }

  return (
    <React.Fragment>
      <div id="layout-wrapper">
        <Header
                    headerClass={headerClass}
                    layoutModeType={layoutModeType}
                    onChangeLayoutMode={onChangeLayoutMode} />
        <Sidebar layoutType={layoutType} />
        <div className="main-content">
          {props.children}
          <Footer />
        </div>
      </div>
    </React.Fragment>
  );
};

Layout.propTypes = {
  children: PropTypes.object,
};

export default withRouter(Layout);
