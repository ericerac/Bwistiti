import { defineStore } from "pinia";
// import { instance } from "../composables/axiosInstance.js"
import Vue from 'vue'
import StringParse from "../composable/jsonStringParse.js"
import axios from "axios";
import { useCookies } from "vue3-cookies";

const cookies = useCookies()
const instance = axios.create({
  baseURL: "http://49.13.3.226/",
   //baseURL: "http://localhost:3000/",
});

instance.interceptors.request.use(
  function (config) {

    // console.log("INTER REQUEST CONFIG", config);

    // if (cookies.get("user")) {
    //   const AuthUser = cookies.get("user");
    //   const token = cookies.get("token")

    //   if (token) {
    //     config.headers.Authorization = `Bearer ${token}`;
    //   }
    // } else { }

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
export const useNewPostStore = defineStore('useNewPostStore', {

  state: () => {
    return {
      user: [],
      // modalError: useState<boolean>('modalError'),
      post_Data: "",
      newPostAdded: "",

    }
  },

  actions: {
    async sendPost(data: {}) {

      const User = useCookie("UserToken")

      
      const token = StringParse(User)
      console.log("TOKEN", token);

      return new Promise((resolve, reject) => {
        instance
          .post("/inici/create?page=post", data, {
            headers: {
              "Content-Type": "multipart/form-data",
              'Authorization': `Bearer ${token}`
            },
          })
          .then((response) => {
            console.log("SEND POST STORE", response);
            this.newPostAdded = response.data.data
            resolve(response);
          })
          .catch((err) => {
            reject(err);
          });
      });

    },

    


  },

})