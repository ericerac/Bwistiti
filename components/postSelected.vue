<script setup lang="ts">

// import { useLoginStore } from "../store/loginPost"
import { storeToRefs } from 'pinia';
import { usePostStore } from "@/store/usePost"
const postData = usePostStore();
const { getPageData } = postData

 const post = postData.post_Data;
 
 const data = defineProps(['data'])
  console.log("DATA", data);

//   let postEdit = useState("postEdit");

</script>



<template>
   
    <div class="bloc" @click="$emit('close')" v-for="(d, key) in data" :key="key">
        <div class="bloc_left">
            <img :src="d.imageUrl" alt="">
        </div>
        <div class="bloc_right">

            <h1>
                {{ d.title_1 }}
            </h1>
            <div class="dat">
                <p>{{ d.p_1 }}</p>
            </div>
            <h3>
                {{ d.title_2 }}
            </h3>
            <p>
                {{ d.p_2 }}
            </p>
            <h3>
                {{ d.title_3 }}
            </h3>
            <p>
                {{ d.p_3 }}
            </p>
            <h3>
                {{ d.title_4 }}
            </h3>
            <p>
                {{ d.p_4 }}
            </p>
            <h3>
                {{ d.title_5 }}
            </h3>
            <p>
                {{ d.p_5 }}
            </p>
        </div>
        <div class="bloc-limks">
            <div class="line_link">
                <p class="title-link">
                    {{ d.Text_link1 }}
                </p>
                <!-- <router-link class="text_link" :to="to" target="_blank">
                    {{ d.link_1 }}
                </router-link> -->
                <a class="text_link" v-bind:href= "'{ d.link_1 }'" target="_blank">
                    {{ d.link_1 }}
                </a>
            </div>
            <div class="line_link">
                <p class="title-link">
                    {{ d.Text_link2 }}
                </p>
                <a class="text_link">
                    {{ d.link_2 }}
                </a>
            </div>
            <div class="line_link">
                <p class="title-link">
                    {{ d.Text_link3 }}
                </p>
                <a class="text_link">
                    {{ d.link_3 }}
                </a>
            </div>
            <div class="line_link">
                <p class="title-link">
                    {{ d.Text_link4 }}
                </p>
                <a class="text_link" >
                    {{ d.link_4 }}
                </a>
            </div>
            <div class="line_link">
                <p class="title-link">
                    {{ d.Text_link5 }}
                </p>
                <a class="text_link">
                    {{ d.link_5 }}
                </a>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* TRANSITION */
/* TRANSITION */
/* we will explain what these classes do next! */



.bloc {
    position: static;
    top: 0;
    bottom: 0;
    left: 0;
  
    right: 0;
    /* transform: translate(-50%, -50%); */
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: auto;
    border: 2px solid red;
    background-color: rgba(138, 43, 226, .8);
    z-index: 100;
    color: rgb(251, 248, 248);
    overflow: hidden;
}

.bloc_left {
    margin: auto 30px
}

.bloc_right {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}

.bloc_right h1 {
    padding: 20px
}

.bloc_right,
.dat {

    padding: 10px;
    text-align: justify;
}

.bloc-limks {
    width: 100%;
    display: flex;
    flex-direction: column;
    height: auto;
    color: white;
}
.line_link{
    display:flex;
    flex-direction: row;
}

@media screen and (min-width: 768px) and (max-height:500px) {

    .bloc_right,
    .dat {
        padding: 20px;
    }
}</style>