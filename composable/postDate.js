
import { usePostStore } from "@/store/usePost";
const postData = usePostStore();
export const posted =  ((id)=>{
    let post = postData.post_Data
    const dated = post.find(x => x._id = id)
    const postDate = dated.createdAt
    console.log("POSTED",postDate);
})