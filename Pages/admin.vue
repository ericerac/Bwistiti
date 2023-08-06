<template>
    <div class="bloc_page">
    <div class="bloc_data">
        <table border="2" id="tableau">
    <tr>
        <th>Titre du post</th>
        <th>date creation</th>
        <th>ouvert</th>
        <th>.  lu  .</th>
        <th>Adresse Ip</th>
        <th>Ville</th>
        <th>pays</th>
    </tr>
    <tr v-for="dp in posted" :key="dp._id" @click="openPost(dp._id)">
        <td>{{ dp.title_1 }}</td>
        <td>{{date(dp.createdAt)}}</td>
        <td>{{ dp.postOpened }}</td>
        <td>{{ dp.postRead }}</td>
        <td>{{}}</td>
        <td>{{geo(dp.postGeoloc)}}</td>
        <td>{{}}</td>
    </tr>
    <!-- <tr>
        <td>Ligne 2, Colonne 1</td>
        <td>Ligne 2, Colonne 2</td>
        <td>Ligne 2, Colonne 3</td>
        <td>Ligne 2, Colonne 4</td>
        <td>Ligne 2, Colonne 5</td>
        <td>Ligne 2, Colonne 5</td>
        <td>Ligne 2, Colonne 5</td>
    </tr>
    <tr>
        <td>Ligne 3, Colonne 1</td>
        <td>Ligne 3, Colonne 2</td>
        <td>Ligne 3, Colonne 3</td>
        <td>Ligne 3, Colonne 4</td>
        <td>Ligne 3, Colonne 5</td>
        <td>Ligne 3, Colonne 5</td>
        <td>Ligne 3, Colonne 5</td>
    </tr>
    <tr>
        <td>Ligne 3, Colonne 1</td>
        <td>Ligne 3, Colonne 2</td>
        <td>Ligne 3, Colonne 3</td>
        <td>Ligne 3, Colonne 4</td>
        <td>Ligne 3, Colonne 5</td>
        <td>Ligne 3, Colonne 5</td>
        <td>Ligne 3, Colonne 5</td>
    </tr> -->
</table>
    </div>
</div>
<PostSelected v-if="postSelect" :data="postSelected" :id="postSelected._id" @close="postSelect = !postSelect" />
</template>

<script setup>
import { usePostStore } from "@/store/usePost";
import { useCookies } from "vue3-cookies";
import { datePosted } from "@/composable/datePosted";
import { openedPost, closeTimeOut } from "@/composable/openedPost";
import StringParse from "../composable/jsonStringParse"
import FilterId from "../composable/filterId"
const { cookies } = useCookies();

const postData = usePostStore();
const { getPageData } = postData
const posted =ref("")
// const posted = ref(postData.post_Data);
const geoLoc =ref("")
const pst = async () => {
    
    let auth = cookies.get("User")
    if(auth = true){
console.log("AUHT TRUE ADMIN PAGE")
        await getPageData()
        posted.value = postData.post_Data.reverse()
    }
}
pst()
const date = ((p)=>{
    return datePosted(p)
})
// -------- POST SELECTED ------
let postSelect = ref(false);
let add_post = ref(false)

const open_add = (() => {
    // console.log("BTN ADD POST INDEX", add_post);
    add_post.value = true ? false : true
    add_post.value = false ? true : false;

})
let postSelected = ref("");

const openPost = ((id) => {
    const IdPostSelected = FilterId(id)
    postSelected.value = StringParse(IdPostSelected).parsi
    //  console.log("POST SELECTED", StringParse(IdPostSelected).parsi);
    postSelect.value = true
    openedPost(id)
})


const geo = (l) => {

 console.log("WARCH THEME INDEX T NEW ",l);

        return[...new Set(l)];
};

// EXEMPLE
// const arr = [7, 7, 3, 3, 3, 3, 9, 1, 1];
// const occ = {};
// for (const n of arr) {
//   occ[n] = occ[n] ? occ[n] + 1 : 1;
// }
// console.log(occ[7], occ[3], occ[9], occ[1]);
// let x = keys(occ);  

</script>

<style lang="css" scoped>
.bloc_page{
    display:flex;
    align-items: center;
    padding-bottom: 100px;
}
.bloc_data{
    margin:100px auto
}
/* ----------TABLEAU---------- */
#tableau th {
    background-color: rgb(247, 174, 231);
}
#tableau tr:nth-child(even){background-color: transparent}
#tableau tr:hover {background-color: #ddd;}
</style>