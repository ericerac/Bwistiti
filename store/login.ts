
import { defineStore } from "pinia";
 import { instance } from "../utils/axiosInstance.js"
 import { useCookies } from "vue3-cookies";
import axios from "axios"


  //  const router = useRouter();
// router.back();
// router.forward();
// router.go();
// router.push({ path: "/home" });
// router.replace({ hash: "#bio" });

 const { cookies } = useCookies();

type User = {
  userId: string
  userToken: string
  auth: boolean
}
type State = {
  user: User
  loading: boolean
}

export const useLogUserStore = defineStore('useLogUserStore', {
  state: () => {
    return {
      modalError: false,
      loading: false,
      user:{},
      data: "",
      auth:false,
    }
  },


  

  actions: {
    async loginUser (userData: string) {
      console.log("LOGIN POST STORE", userData);
      // this.loading = true;

      try {
         instance
          .post("/inici/coconexion", userData)
          .then((response) => {
            //  setHeaders(response.data.token)
            console.log("RESP LOGIN INDEX", response.data);
            let userId = response.data.userId
            let token = response.data.token
           this.auth=true;
            cookies.set("UserId", JSON.stringify(userId), "1h");
            cookies.set("UserToken", JSON.stringify(token), "1h");

            if (token) {
              this.auth = true
               cookies.set("User", JSON.stringify(this.auth), "1h");
            }
              //  router.push({ path: "/" })
          })
      } catch (error) {
        console.log("ERREUR LOGIN", error);
      }

    },
  },
})

