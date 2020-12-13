import React, { useEffect, useState } from "react";
import {
  CCol,
  CCard,
  CCardBody,
  CCardHeader,
  CNav,
  CNavItem,
  CNavLink,
} from "@coreui/react";

import { useSelector, useDispatch } from "react-redux";
import { seletCity } from "../actions";
import { setCity } from "../actions";
import { login } from "../actions";

const Nav = () => {
  // Store
  const cityList = useSelector((state) => state.cities);
  const isLogged = useSelector((state) => state.isLogged);
  const selectedCity = useSelector((state) => state.selectedCity);
  const dispatch = useDispatch();

  useEffect(() => {});

  // Const
  const [activeLink, setActiveLink] = useState(0);

  const selectCity = (i, city) => {
    setActiveLink(i);
    dispatch(seletCity(city));
  };

  return (
    <CCard>
      <CCardBody>
        Sélection des villes
        <hr></hr>
        <CNav variant="pills" vertical>
          {cityList.map((cit, i) => {
            return (
              <CNavItem>
                <CNavLink
                  id={i}
                  className={activeLink === i ? "active" : ""}
                  onClick={() => selectCity(i, cit.city)}
                >
                  {cit.city}
                </CNavLink>
              </CNavItem>
            );
          })}
        </CNav>
      </CCardBody>
    </CCard>
  );
};
export default Nav;
