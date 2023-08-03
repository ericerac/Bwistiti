<template>
    <div class="bloc_master" v-if="data">
        
        <h1>Dernières actualités</h1> 
    <div class="container" >
        <!-- <div class="title"> -->
        <!-- </div> -->

        <div class="post-actu"  v-for="p in post_read" :key="p._id" @click="$emit('post_select',p._id)">
            <h2>{{p.title_1}}</h2>
            <p class="text_actu" >{{ p.p_1 }}</p>
        </div>

        
    </div>
</div>
</template>

<script setup>
import { usePostStore } from "@/store/usePost";
import { computed, ref } from "vue";
import { storeToRefs } from "pinia";
import { handPost } from "../composable/handlerPost"
const postData = usePostStore();
const post = storeToRefs(postData.post_Data);
let post_read = ref("");
const data = defineProps(['post'])



// const HandPost = await handPost()

// const postClass = (()=>{
//     post_read = post.sort(function (x, y) {
//          return y.postOpened - x.postOpened;
//      })
//     console.log("POST READ",post_read);
// })





watch(
  () => data.post,
  () => {
    console.log("WATCHER ACTU POST");
    if(data.post){
        let posted = data.post;
    var postP = posted.sort(function (x, y) {
        return x.postOpened - y.postOpened;
    })
    }else{
        console.log("WATCHER ELSE")
    }
    post_read.value = getShortList(postP)
  }
)

const getShortList = (shortListSize) =>{
      return shortListSize.slice(0, 2);
    }
// watch(post, async (n, o) => {
//     console.log("WATCH NEW ACTUPOST",n,"OLD",o);
//     console.log("WATCH POST DATA ACTUPOST",storeToRefs(postData.post_Data));
//     let posted = postData.post_Data;
//     post_read = posted.sort(function (x, y) {
//         return y.postOpened - x.postOpened;
//     })
   
//     for (const iterator of post.value) {
//         themes.push(iterator.theme)
        
//     }
// })

</script>

<style scoped>

.bloc_master{
    margin:0 auto;
   
}
.container {
    display: grid;
   margin:0 auto;
    grid-template-columns: auto auto ;
   
    gap: 10px;
    text-align: center;
background-color: rgba(240, 248, 255,.2);
    
    height: 200px;
    margin: 20px auto;
}
.bloc_theme{
    width:90%;
    height:200px;
    display: grid;
  grid-template-columns: auto auto ;
  column-gap: 10px;
  row-gap: 15px;
    margin:0 auto;
    border:2px solid red;
    overflow: hidden;
}

h1{
    text-align: center;
}
.post-actu {
    
   width:80%;
}
/* .post_actu::after{
    content:"";
    position: absolute;
    right:0;
    bottom:0;
    margin:auto;
    width:5px;
    background-color: rgba(244, 71, 71,.4);
    height:80%;;
} */
.line{
    width:3px;
    background-color: rgba(0,0,0,.4);
    height:80%;
    margin-top: 10%;
}
 .text_actu{
    display: -webkit-box;
    /* text-overflow: ellipsis; */
    /* white-space: nowrap; */
    overflow: hidden; 
    -webkit-line-clamp: 2;
    -webkit-box-orient:vertical ;
 }
</style>