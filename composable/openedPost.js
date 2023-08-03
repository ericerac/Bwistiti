import { usePostStore } from "@/store/usePost";
import { useCookies } from "vue3-cookies";

const { cookies } = useCookies();
var upTime =""
export const openedPost = ((data)=>{
  let loc = cookies.get("g'e''o")
  const { countPost } = usePostStore()
    let PostOpen={
      id:data.id,
      opened:"true",
      read:"false",
      loc:loc
    }
    countPost(PostOpen)
    //  console.log("REAL TIME OPENEDPOST FUNCTION",data.time);
     let timeOut = data.time*1000*60
    // console.log("MILLISECONG", timeOut);

     upTime = setTimeout(() => {
        // console.log("Delayed for TIME second.");
        let PostRead={
          id:data.id,
          opened:"false",
          read:"true"
        }
        countPost(PostRead)
      }, timeOut);
})


  export const closeTimeOut = () => {
     console.log("CLOSE TIME OUT");
    clearTimeout(upTime);
  }