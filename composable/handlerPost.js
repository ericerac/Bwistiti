import { usePostStore } from "@/store/usePost";

export const handPost = (()=>{
    const postData = usePostStore();
    const dataPost = postData.post_Data
    if(postData.post_Data){
        let posted = postData.post_Data;
    var post_read = posted.sort(function (x, y) {
        return y.postOpened - x.postOpened;
    })
    }else{
        console.log("WATCHER ELSE")
    }
    return post_read
})