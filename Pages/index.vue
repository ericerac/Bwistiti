<template>
    <div class="container-home">
        <div class="b_t">
            
            <themePost :p="interThemes"/>
        </div>
        <ActuPost :post="orderView"/>
<btn_add v-if="auth" @open_add="add_post = !add_post" />
<PostSelected v-if="postSelect" />
<postsVue v-if="!postSelect" :post="post"/>
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
let p = StringParse(post.value)
// console.log("P INDEX T THEME LOOP",p);
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

</script>

<style  scoped>
.container-home{
    width:100vw;
    height: auto;
    min-height: 100vh;
 
}
</style>