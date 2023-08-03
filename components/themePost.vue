<template>
    <div class="container_theme">
       
        <h3>Themes</h3>
        <div class="bloc_theme" >
        <div class="theme_post" v-for="t in p[0]" :key="t">
<span @click="themeSelect(t) ">{{ t }}</span>
        </div>
    </div>
</div>
</template>

<script setup>

import { storeToRefs } from "pinia";
import { computed, ref, watchEffect } from "vue";
import StringParse from "../composable/jsonStringParse"


// let thPost = ref("");
// let thPost = ref([])
// let dPost = ""
// let uniTheme = []
// let uni = []

 const data = defineProps(['p'])

// let newArray = ref([]);
// let uniqueObject = {};
// const themePost = computed (() => {
//     // const dPost = data
//     const d = JSON.stringify(data.p)
//      dPost = JSON.parse(d)
//   // console.log("TH_POST",thPost);
//   // console.log("D_POST",dPost);
//     for(let i of dPost){
//         // console.log("FOR LOOP",i.theme);
//         newArray.value.push(i.theme) 
//         thPost.value.push(i.theme) 
//      uni.push(i.theme) 
//     }

// })




// watchEffect(() =>{
//       ({
//         thPost: thPost,
       
//       })
//       let tPost = Object.values(uni)
//       console.log("WATCH eFFECT tPOST--->",tPost);
//       console.log("WATCH eFFECT TH_POST--->",thPost._rawValue);
//       console.log("WATCH eFFECT UNI-->",typeof uni, uni);
      
//       // var uniTheme = Array.from(new Set(tPost));
      
//   console.log("WATCH EFFECT INDEX 1 UNI",uni[1]);

      
// }) 


const themeSelect = ((t)=>{
console.log("THEME SELECTED", t);

})


// watch(
//   () => thPost,
//   () => {
//     if(thPost){

//       console.log("TEST UNIQUE");
//     }
//     // var uniTheme = thPost.filter((x, i) => thPost.indexOf(x) === i);

// }
// )

</script>

<style  scoped>
@import url("../style/reset.css");
@import url("../style/theme.css");

.container_theme{
display:flex;
flex-direction: column;
align-items: center;
}
.bloc_theme{
    width:90%;
    /* height:auto; */
    margin:0 auto;
    display: grid;
  grid-template-columns: auto auto auto ;
  row-gap: 15px;
  column-gap: 10px;
  border: 1px solid blue;

}
.theme_post{
display:block;
height:20px;
width:100px;
     border:1px solid red;
    text-align: center; 

}
</style>