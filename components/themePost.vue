<template>
    <div class="container_theme">
        <h3>Themes</h3>
        <div class="bloc_theme" >
            <span @click="$emit('openTheme','All theme') ">All theme</span>
        <div class="theme_post" v-for="t in p[0]" :key="t">
<span @click="$emit('openTheme',t) ">{{ t }}</span>
        </div>
    </div>
</div>
</template>

<script setup>

import { storeToRefs } from "pinia";
import { computed, ref, watchEffect } from "vue";
import StringParse from "../composable/jsonStringParse"

const data = defineProps(['p'])

const themeSelect = ((t)=>{
console.log("THEME SELECTED", t);

})

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