<template>
    <div class="bloc_total">

        <button @click="addPost" v-if="auth">Add Post</button>
        <div class="modal">
            <!-- <Transition name="fade">
                <modal-succes v-if="modal == true" @click="modal = false" />
            </Transition> -->
        </div>


        <!-- <loader v-if="loader" /> -->
        <form>


        </form>

        <main>

            <section class="section_post">


                <div class="bloc_blog" v-for="p in posted.post" :key="p">



                    <div class="bloc_total" v-if="postComponent == false || p._id != PostIdSelected">
                        <div class="img_blog">
                            <img :src="p.imageUrl" :alt="p.description">

                        </div>
                        <div class="text_blog">
                            <div class="head_post">
                                <h2>
                                    {{ p.title_1 }}
                                </h2>
                                <em class="time_to_read" v-if="read(p._id) != ''"> temps de lectura: {{ read(p._id) }} </em>
                            </div>
                                <p class="paragraf1">
                                    {{ p.p_1 }}
                                </p>
                                <span @click="$emit('post_select', p._id)" v-if="p.p_1.length > 200"><em>lire la suite</em>
                                    <br>
                                </span>
                            
                            <!-- <div class="paraf">
                                <h3>
                                    {{ p.title_2 }}
                                </h3>
                                <p>
                                    {{ p.p_2 }}
                                </p>
                            </div>
                            <div class="paraf">

                                <h3>
                                    {{ p.title_3 }}
                                </h3>
                                <p>
                                    {{ p.p_3 }}
                                </p>
                            </div>

                            <div class="paraf">
                                <h3>
                                    {{ p.title_4 }}
                                </h3>
                                <p>
                                    {{ p.p_4 }}
                                </p>
                            </div>
                            <div class="paraf">

                                <h3>
                                    {{ p.title_5 }}
                                </h3>
                                <p>
                                    {{ p.p_5 }}
                                </p>
                            </div>-->
                        </div>
                        <!-- <div class="text_limks">
                            <p class="title-link">
                                {{ Text_link_1 }}
                            </p>
                            <p class="text_link">
                                {{ link1 }}
                            </p>
                        </div>  -->

                    </div>
                    <!-- <div class="b_info_post">


                    </div> -->


                </div>
            </section>

        </main>
    </div>
</template>

<!-- <script setup lang="ts"> -->
<script setup >

import { ref, watch, computed, onMounted, onUnmounted } from "vue";
import { storeToRefs } from "pinia"

import { usePostStore } from "@/store/usePost";
import { useImgStore } from "@/store/useImg";
import { useLogUserStore } from "@/store/login";
import { useNewPostStore } from "@/store/useNewPost";
import filter from "@/composable/filterId"
import { openedPost, closeTimeOut } from "@/composable/openedPost"
import { useCookies } from "vue3-cookies";

import { geoLoc } from "../composable/geoloc"
import { timeToRead } from "../composable/timeToRead"
import jsonStringParse from "../composable/jsonStringParse"
// import { posted } from "../composable/postDate"
// import StringParse from "../composable/jsonStringParse"


onBeforeUnmount(() => {
    console.log('before unmount')
})
//  const p = defineProps(['post'])
const posted = defineProps(['post'])



// ***** ASIDE POST READ ******


let post_read = "";

// console.log("PPOST DATA USEPOST", postData.post_Data);



// -----------  POST SELECTED --------------

let postComponent = ref(false);
let postEdit = ("")
let PostIdSelected = ("");
const { newPostA } = useNewPostStore()
// const npa = newPostA.newPostAdded




const close = () => {
    postComponent.value = false
    closeTimeOut();
    // console.log("CLOSE COMPONENT");
}

// -------- READ TIME POST ---------//

const read = (id) => {
    let postRead = filter(id, posted.post);
    const timed = timeToRead(postRead)
    // console.log("TIMED POST", timed);
    let timedPost = timed.toString()
    let timedMinut = timedPost.split(".")[0]
    let timedSecond = timedPost.split(".")[1]
    let timedS = Math.round(timedSecond * 6);

    // console.log("timedPosted-----",timedPosted);
    return timedMinut + '"' + timedS + "'"
    // return timed
}

// // -----------  DATE POSTED ------//

const datePosted = ((d) => {
    let dat = d.split("T")[0].split("-")
    let year = dat[0]
    let month = dat[1]
    let day = dat[2]

    return day + "/" + month + "/" + year
})

// -------------- SCROLL -----------
// const scroll = () =>{
//       window.onscroll = () => {
//         let bottomOfWindow = Math.max(window.scrollY, document.documentElement.scrollTop, document.body.scrollTop) + window.innerHeight === document.documentElement.offsetHeight

//         if (bottomOfWindow) {
//             // this.page++
//             console.log("END OF PAGE");
//         }
//       }
//     }
// scroll()
if (process.browser) {
    console.log('The window object:', window)
}
</script>

<style scoped>
@import url("../style/reset.css");
@import url("../style/theme.css");

/* ----- CLASS CONDITION ------ */
.bloc_fixed {
    position: static;
}

/* ----- END CLASS CONDITION ------ */
main {
    position: relative;
    margin-bottom: 150px;
}

.bloc_total {
    width: 100%;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}


span {
    text-transform: lowercase;
    text-decoration-line: underline;
}

.time_to_read {
    font-size: 12px
}

.section_post {
    display: flex;
    flex-direction: column;
}


.paragraf1 {

   
    overflow: hidden;
    
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
}

.b_info_post {
    width: 90%;
}

@media screen and (min-width: 768px) and (max-height:500px) {
    span {
        margin-top: 5px
    }

    .bloc_total {

        flex-direction: row;
        justify-content: space-around;
    }
    .head_post{
        margin:30px auto
    }
    section h2 {
    margin-bottom: 0px;
}
}

@media screen and (min-width: 768px) and (max-height:500px) {
    .bloc_text {
        width: 50%;
        top: 15%;
        transform: translate(-50%, -0%);
    }
}

/* *********  MOPDAL********** */

.modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 11;
}

/* *********  MAIN********** */

main {
    display: flex;
    flex-direction: column-reverse;
    width: 100%;
    height: auto;
}

/* *********  BLOC BLOG ********** */

.bloc_blog {
    position: relative;
    width: 95%;
    height: auto;
    display: flex;
    flex-direction: column;
    margin: 15px auto;
    background: white;
    justify-content: space-between;
    overflow: hidden;
    align-items: center;
    box-shadow: -3px 3px 3px rgba(203, 116, 1, .5);
}

/* .bloc_blog::after {
    content: attr(datePosted);
    position: absolute;
    top: -10px;
    right: 0;
    width: auto;
    padding: 3px 5px;
    line-height: 20px;
    height: 20px;
    border-radius: 5px;
    background-color: brown;
    color: wheat
} */

.img_blog {
    width: 100%;
    height: auto;
    max-height: 250px;

}

.img_blog img {
    width: 100%;
    height: auto;
    max-height: 250px;
    object-fit: cover;
}

.text_blog {
    width: 90%;
    padding: 5px 10px;
}

.text_blog {
    margin: 20px auto 10px;
    position: relative;
    /* display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 5;
    overflow: hidden; */
    height:inherit;
    flex-direction: column;
    justify-content: space-around;
    border:1px solid red;
}

@media screen and (min-width: 768px) and (max-height:500px) {

    .bloc_blog {
        flex-direction: row;
        justify-content: center;
        width: 95%;


    }

    .bloc_blog h2 {
        font-size: 30px;
    }

    .img_blog {
        width: 50%;

    }

    .text_blog {
        width: 50%;
        margin: 0 20px;
    }
    .paragraf1{
margin-bottom:20px
    }
}

/* *********  ASIDE ********** */

aside {
    width: 100%;
    height: auto;
    border: 2px solid goldenrod;
    padding: 10px;
    display: flex;
    flex-direction: column;
    margin: 20px auto;
    align-items: center;

}

.title_aside {
    margin: 20px auto;
}

section h2 {
    margin-bottom: 10px;
}

.section_aside {
    display: inline-grid;
    grid-template-columns: 1fr 1fr 1fr;
    /* flex-direction: row; */
    width: 100%;
}

.aside_bloc {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    margin-bottom: 10px
}

.aside_bloc:hover {
    -webkit-line-clamp: 5;
}

@media screen and (min-width: 768px) and (max-height:500px) {
    aside {
        gap: 20px;
        padding: 20px;
    }
}

.fade-enter-active,
.fade-leave-active {
    transition: all 0.5s ease;
}

.fade-enter-from {
    transform: translateX(200px);
    opacity: 0;
}

.fade-leave-to {
    transform: translateX(-200px);
    opacity: 0;
}
</style>