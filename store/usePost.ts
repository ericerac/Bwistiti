

 import { instance } from "../utils/axiosInstance.js"
import axios from "axios";
import Date from "../utils/Date.js"
import { defineStore } from "pinia";
 import { useCookies } from "vue3-cookies";

//  const instance = axios.create({
//   //baseURL: "http://49.13.3.226/",
//    baseURL: "http://localhost:3000/",
// });

const { cookies } = useCookies();

// ---------------INTER REQUEST-----------------//

instance.interceptors.request.use(
  function (config) {

    // console.log("INTER REQUEST CONFIG", config);

    if (cookies.get("user")) {
      const AuthUser = cookies.get("user");
      const token = cookies.get("token")

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    } else { }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
// --------------INTER RESPONSE-------------//
instance.interceptors.response.use(
  function (response) {
    const supp = response.data.message;
     console.log("INTER RESPONSE", response);
    // console.log("RESPONSE STATUS", response.status);

    // console.log("RESPONSE INTER", supp);


    return response;
  },

  //---------------___  ERREURS  ___-------------------

  (error) => {
    console.log("INTER RESPONSE ERROR", error);



    return Promise.reject(error);
  }
);

// ----------------------------------------------//


type User = {
  Id: string,
  name: string,
  token: string,
}

type State = {
  user: User,
  loading: boolean,
  post_Data: string,
}


export const usePostStore = defineStore('usePostStore', {

  state: () => {
    return {
      user: [],
      modalError: useState<boolean>('modalError'),
      post_Data: [],
      post_read:"",
      dark: useState<boolean>('dark'),
      rawObj :[],
      page:1,
     
    }
  },

  actions: {
    async getPageData() {

      // // console.log(" PAGE GET PAGE DATA", n);
      const page = "post"
      const lang = "cat";

      try {
        const res = await instance
          .get(`inici?name=${page}&lang=${lang}`)
          .then((res) => {
             console.log("RESPONSE GET PAGE DATA STORE", res.data);
            //  this.post_Data = res.data
             this.post_Data.push(...res.data)
             this.rawObj = res
     
          })
      }
      catch (err) {
        console.log(err);

      };
     
    },

    async countPost(data: {}) {

      return new Promise((resolve, reject) => {
        instance
          .put("/inici/fieldPost", data, {
          })
          .then((response) => {
            console.log("SEND FIELD ONE ", response);
           
            resolve(response);
          })
          .catch((err) => {
            reject(err);
          });
      });

    },

    
    // scroll () {
    //   window.onscroll = () => {
    //     let bottomOfWindow = Math.max(window.scrollY, document.documentElement.scrollTop, document.body.scrollTop) + window.innerHeight === document.documentElement.offsetHeight

    //     if (bottomOfWindow) {
    //         this.page++
    //         if(this.rawObj.next){
    //             this.getPageData()
    //         }
    //     }
    //   }
    // },
    

  },

})

