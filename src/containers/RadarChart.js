import React, { useEffect, useState } from "react";

import { useSelector } from "react-redux";

import { CCard, CCardBody, CCardHeader } from "@coreui/react";
import { CChartRadar } from "@coreui/react-chartjs";

import("../App.css");

const RadarChart = () => {
  // Store
  const cityList = useSelector((state) => state.cities);
  const selectedCity = useSelector((state) => state.selectedCity);

  //State

  const [radarData, setRadarData] = useState();
  const [labelsRadar, setLabelsRadar] = useState();

  //Function to get datas for line chart

  const getDatasRadar = (selectedCity, cityList) => {
    if (selectedCity) {
      const selected = cityList.filter(
        (city) => city.city == selectedCity[0].selectedCity
      );

      if (selected) {
        // Get datas for radar chart
        const radarDatas = selected[0].forecastTemp.map((day) => {
          const datas = {};

          // Data to show wind speed, humidity, etc, but don't fit with this type of chart
          //datas.humidity = day.clouds;
          // datas.uvi = day.uvi;
          //datas.pressure = day.pressure;
          // datas.winspeed = day.wind_speed;
          // datas.pop = day.pop;
          //datas.icon = `http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`;
          datas.Min = day.temp.min;
          datas.Day = day.temp.day;
          datas.Evening = day.temp.eve;
          datas.Max = day.temp.max;
          datas.Morning = day.temp.morn;

          return datas;
        });

        //set values for chart datas
        setRadarData(Object.values(radarDatas[0]));
        setLabelsRadar(Object.keys(radarDatas[0]));
      }
    }
  };

  useEffect(() => {
    getDatasRadar(selectedCity, cityList);
  }, [selectedCity]);

  return (
    <CCard>
      <CCardHeader>Ecarts de témpérature au cours de la journée </CCardHeader>
      <CCardBody>
        <CChartRadar
          type="radar"
          datasets={[
            {
              label: "Today",
              backgroundColor: "rgba(179,181,198,0.2)",
              borderColor: "rgba(179,181,198,1)",
              pointBackgroundColor: "rgba(179,181,198,1)",
              pointBorderColor: "#fff",
              pointHoverBackgroundColor: "#fff",
              pointHoverBorderColor: "rgba(179,181,198,1)",
              tooltipLabelColor: "rgba(179,181,198,1)",
              data: radarData,
            },
          ]}
          options={{
            aspectRatio: 1.5,
            tooltips: {
              enabled: true,
            },
          }}
          labels={labelsRadar}
        />
      </CCardBody>
    </CCard>
  );
};

export default RadarChart;
