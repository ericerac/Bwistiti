

import axios from "axios";
import Date from "./Date.js"
import { useCookies } from "vue3-cookies";
const { cookies } = useCookies();

export const geoLoc = () => {

    let userTheme = useCookie("dark");
    //  console.log("USERTIME COOKIES VALUE", userTheme);

    // if (userTheme._value != undefined) {
    //     console.log("IF USERTHEME NOT UNDEFINED ", userTheme);
    //   return;
    // }

    return new Promise((resolve, reject) => {
      axios
        .get(
          `https://api.bigdatacloud.net/data/ip-geolocation?ip=212.106.239.92&localityLanguage=en&key=bdc_fb0cd78789724292ba4ec846a10c55ed`
        )
        .then((res) => {

            //  console.log("RES GEOLOC",res);

          let userData = {
            locality: res.data.location.localityName,
            country: res.data.country.name,
            IpAdress: res.data.ip,
            date: res.data.location.timeZone.localTime.split("T")[0],
            hour: res.data.location.timeZone.localTime
              .split("T")[1]
              .split(".")[0],
          };
         let locality = userData.locality
         cookies.set("g'e''o", JSON.stringify(locality), "12h");
          let localityCity = userData.locality
         let localHour = res.data.location.timeZone.localTime
          sunTime(localityCity)
          return resolve(res);
        })
        .catch((err) => {
            console.log("ERROR GEOLOC",err);
          reject(err);
        });
    });

  }


  const sunTime= async (city) => {

    return new Promise((resolve, reject) => {
      axios
        .get(
          `https://api.weatherapi.com/v1/astronomy.json?key=43c3940307aa4e549ee130304231504&q=${city}`
        )
        .then((res) => {
            // console.log("RESPONSE GEOLOC DATA----->", res.data.location.timeZone.localTime.split("T")[0]);
        //    console.log("RESPONSE SUNRISE && SUNSET----->", res.data.astronomy.astro.sunrise, res.data.astronomy.astro.sunset);
          let SunData = {
            sunRise: res.data.astronomy.astro.sunrise,
            sunSet: res.data.astronomy.astro.sunset
          }
          let themeDark = Date(SunData) ;
          let dark = themeDark;
          cookies.set("theme", JSON.stringify(themeDark), "1h");
          
          const Theme =  cookies.get("theme")
        //   console.log("COOKIES GET",Theme );
          return resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }





