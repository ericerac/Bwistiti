<template>
    <div class="container-home">
        <div class="b_t">
            
            <themePost :p="interThemes" @openTheme="openTheme"/>
        </div>
        <ActuPost :post="orderView" @post_select="open_post"/>
<btn_add v-if="auth" @open_add="add_post = !add_post" />
<PostSelected v-if="postSelect" :data="postSelected" @close="postSelect = !postSelect"/>
<postTheme v-if="postThemeComponent" :pt="postThemeSelected" @post_select="open_post"/>
<postsVue v-if=" postSelect == false  && postThemeComponent == false" :post="post" @post_select="open_post"/>
<!-- <postsVue  v-for="p in post" :key="p" ref="scrollComponent"/> -->
<newPost v-if="add_post" @open_add="add_post = !add_post" :p="interThemes"/>
</div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { usePostStore } from "@/store/usePost";
import { useLogUserStore } from "@/store/login";
import{ ref } from "vue"
import { useCookies } from "vue3-cookies";
import StringParse from "../composable/jsonStringParse"
import FilterId from "../composable/filterId"

const { cookies } = useCookies();
const postData = usePostStore();
const { getPageData } = postData
const post = ref();

const interThemes = ref([])
const themes = ref([])

let orderView = ""

let auth = ref("")
const pst = async () => {
    // await geoLoc()
     auth = cookies.get("User")
    await getPageData()
    post.value = postData.post_Data.reverse()
}
pst()
// -------- WATCH POST -----------
watch(post, (n, o) => {
    // STRINGIFY PARSE *********************** A CHANGER
let p = StringParse(post.value)
 console.log("P INDEX T THEME LOOP",p);
    for(let t in p.parsi){
        themes.value.push(p.parsi[t].theme)
    }
    let pp = p.parsi
 orderView = pp.sort((a, b) => a.postOpened - b.postOpened)
console.log("ORDRE OPENED POST",orderView.reverse());
});

// -------- WATCH THEME -----------
watch(themes.value, (n, o) => {

console.log("WARCH THEME INDEX T NEW ",n);
console.log("WARCH THEME INDEX T OLD ",o);

interThemes.value.push([...new Set(n)]);


});
// ----------- OPEN THEME SELECED ------------
 let postThemeSelected =ref("")
 let postThemeComponent = ref(false)
const openTheme = ((t) =>{
console.log("THEME SELECTED INDEX",t);
if(t == "All theme"){
    postThemeComponent.value = false
    postSelect.value = false
   
return
}
let themePosted =  StringParse(post.value).parsi
postThemeSelected.value = themePosted.filter(x => x.theme == t)
console.log("themePost",postThemeSelected);
postThemeComponent.value = true

})
// ----------- OPEN POST SELECED ------------

let postSelect = ref(false);
let add_post = ref(false)

const open_add = (() => {
console.log("BTN ADD POST INDEX", add_post);
 add_post.value = true? false : true
 add_post.value = false? true : false;
 
})
const open = () => {
console.log("OPEN INDEX");
}
let postComponent = ref(false);
let postEdit = ("")
let postSelected = ref("");

const open_post = ((id) => {
    
     const IdPostSelected = FilterId(id)
     postSelected.value = StringParse(IdPostSelected).parsi
     console.log("POST SELECTED", StringParse(IdPostSelected).parsi);
     postSelect.value = true
})

</script>

<style  scoped>
.container-home{
    width:100vw;
    height: auto;
    min-height: 100vh;
 
}
</style>