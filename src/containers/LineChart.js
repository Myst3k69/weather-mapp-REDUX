import React, { useEffect, useState } from "react";

import { CCard, CCardBody, CCardHeader } from "@coreui/react";
import { CChartLine } from "@coreui/react-chartjs";
import { useSelector} from "react-redux";


import("../App.css");

const LineChart = () => {
  // Store
  const cityList = useSelector((state) => state.cities);
  const selectedCity = useSelector((state) => state.selectedCity);
  const [dateForecast, setDateForecast] = useState();
  const [temperature, setTemperature] = useState([]);

  //Function to get datas for line chart

  const getTemps = (selectedCity, cityList) => {
    if (selectedCity) {
      const selected = cityList.filter(
        (city) => city.city === selectedCity[0].selectedCity
      );

      if (selected) {
        //Get forecast days
        getForecastDays(selected);

      

        // Get temperatures
        const forecastTemp = selected[0].forecastTemp.map(
          (day) => day.temp["day"]
        );

        return forecastTemp;
      }
    } else {
      const forecastTemp = cityList[0].forecastTemp.map(
        (day) => day.temp["day"]
      );
      return forecastTemp;
    }
  };

  //Function to get forecast days
  const getForecastDays = (selected) => {
   
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    const forecastDays = selected[0].forecastTemp.map((day, i) => {
      const dayWeather = [];
      dayWeather[i] = days[new Date(day.dt * 1000).getDay()];

      return dayWeather;
    });

    //Set days in state for chart label

    const filtered = forecastDays.filter((day, i) => day.splice(0, i));
    setDateForecast(filtered);

    return forecastDays;
  };

  useEffect(() => {
   
    setTemperature(getTemps(selectedCity, cityList));
  }, [selectedCity, cityList]);

  return (
    <>
      {temperature ? (
        <CCard>
          <CCardHeader>Prévisions des températures </CCardHeader>
          <CCardBody>
            <CChartLine
              type="line"
              label="Temperatures"
              datasets={[
                {
                  backgroundColor: "rgb(228,102,81,0.9)",
                  label: "Temperatures",
                  data: temperature,
                 
                },
               
              ]}
              options={{
                tooltips: {
                  enabled: true,
                },
              }}
              labels={dateForecast}
            />
          </CCardBody>
        </CCard>
      ) : (
        ""
      )}
    </>
  );
};

export default LineChart;
