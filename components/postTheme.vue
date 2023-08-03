<template>
    <!-- <div class="bloc_total" :class="{bloc_fixed : postComponent}"> -->
    <div class="bloc_total">

        <!-- <div class="bloc">
            <LazyHeaderInfo />
        </div> -->

        <!-- <NewPost v-if="newPost == true" @closePost="addPost" :themes ="themes"/> -->
        <button @click="addPost" v-if="auth">Add Post</button>
        <div class="modal">
            <!-- <Transition name="fade">
                <modal-succes v-if="modal == true" @click="modal = false" />
            </Transition> -->
        </div>

       
        <!-- <loader v-if="loader" /> -->
        <form>

<!-- <br><br>
<input type="button" onclick="changeText()" value="Set text of selected option"> -->
</form>
        <!-- <div class="themes" v-for="t in themes" :key="t">
            <span>{{ t }}</span>
        </div> -->
        <main>

            <section class="section_post">

                <!-- <div class="bloc_blog" > -->
                <div class="bloc_blog" v-for="p in posted.pt" :key="p">

                    <div class="section_post_selected" v-if="postComponent === true && p._id == PostIdSelected">
                        <!-- <sec @close="close" :data="postEdit" /> -->
                    </div>

                    <div class="bloc_total" v-if="postComponent == false || p._id != PostIdSelected">
                        <div class="img_blog">
                            <img :src="p.imageUrl" :alt="p.description">
                            <!-- <img src="../assets/images/img_watt.jpeg" alt=""> -->
                        </div>
                        <!-- {{ datePosted(p.createdAt) }} -->
                        <div class="text_blog">
                            <h2>
                                {{ p.title_1 }}
                            </h2>
                            <p class="paragraf1">
                                {{ p.p_1 }}
                            </p>
                            <div class="paraf">
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
                            <!-- v-if="timeToRead(p._id) != ''" -->
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
                            </div>
                        </div>
                        <div class="text_limks">
                            <p class="title-link">
                                {{ Text_link_1 }}
                            </p>
                            <p class="text_link">
                                {{ link1 }}
                            </p>
                        </div>
                        <span @click="$emit('post_select',p._id)" v-if="p.p_1.length > 200"><em>lire la suite</em> <br>
                            <em class="time_to_read" v-if="read(p._id) != ''"> {{ read(p._id) }} de lectura
                            </em>
                        </span>
                    </div>


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
  const posted = defineProps(['pt'])
console.log("POSTED THEME",posted);


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

.bloc {
    display: flex;
    flex-direction: column;
    background: transparent;
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

.section_post_selected {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}
.paragraf1{
    
    display: -webkit-box;
    /* text-overflow: ellipsis; */
    /* white-space: nowrap; */
    overflow: hidden; 
    -webkit-line-clamp: 2;
    -webkit-box-orient:vertical ;
 
}
@media screen and (min-width: 768px) and (max-height:500px) {
    span {
        margin-top: 5px
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
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    margin: 15px auto;
    background: white;
    justify-content: space-between;
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
    margin: 20px auto;
    padding: 5px 10px;
}

.text_blog {
    margin: 20px auto 10px;
    position: relative;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 5;
    overflow: hidden;
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
}</style>