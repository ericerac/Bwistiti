<template>
    <div class="container">
        <div class="row ">
            <div class="bloc_post">
                <div class="bloc_img_text">
                    <div class="prevSpace">
                        <div class="img_ulpoaded">

                            <template v-if="preview">
                                <!-- <p class="mb-0 img_preview">file name: {{ image.name }}</p> -->
                                <img :src="preview" class="img_previewed" />

                            </template>
                            <template v-if="postUpdate">
                                <!-- <p class="mb-0 img_preview">file name: {{ image.name }}</p> -->
                                <img :src="postSelected[0].imageUrl" class="img_previewed" />

                            </template>
                            <span class="fileName"> {{ fileName }}</span>
                        </div>
                    </div>
                    <div class="bloc_btn_img">
                        <div class="btn_upL btn_Publish">
                            <label for="image" class="">
                                <input type="file" name="image" id="image" ref="file" @change="FileUpload"
                                    accept="image/png, image/jpeg, image/jpg, image/gif, image/webp" hidden />Upload
                                image
                            </label>

                        </div>
                        <div class="btn_cancel btn_Publish" @click="cancelFileSelected()">

                            Cancel
                        </div>
                    </div>

                    <div class="desc_img">
                        <label for="desc" class="label_area">Description image
                            <textarea rows="3" cols="50" name="desc" type="text" class="description_bio"
                                v-model="description_image" placeholder="texte...">
                                 </textarea>
                        </label>
                    </div>

                    <div class="bloc_text">
                        <select id="the">
                            <option value="All">All</option>
                            <option v-for=" t, index  in p[0]" :key="index" :value='t' >{{ t }} 
                            </option>

                        </select>
                        <!-- <button @click="themePost()">Theme</button> -->
                        <div class="bloc_title_paraf">
                            <div class="title">


                                <label for="title" class="label_area">Titùl 1
                                    <input class="input_title" name="title" type="text" v-model="Title1"
                                        placeholder="Titúl" />
                                </label>
                                <label for="color" class="label_area">Color
                                    <input type="color" name="color" v-model="color1">
                                </label>
                            </div>

                            <div>
                                <label for="p1" class="label_area">Paragraphe 1</label>
                                <textarea rows="6" cols="50" name="p1" type="text" class="description_bio" v-model="Texte1"
                                    placeholder="texte...">
                                 </textarea>
                            </div>
                        </div>
                        <button @click="P2 = !P2">add paragraf 2</button>
                        <div class="bloc_title_paraf" v-if="P2">
                            <div class="title">
                                <label for="title" class="label_area">Titùl 2
                                    <input class="input_title" name="title" type="text" v-model="Title2"
                                        placeholder="Titúl2" />
                                </label>
                            </div>

                            <div>
                                <label for="p2" class="label_area">Paragraphe 2</label>
                                <textarea rows="6" cols="50" name="p2" type="text" class="description_bio" v-model="Texte2"
                                    placeholder="texte...">
                                 </textarea>
                            </div>
                        </div>
                        <button @click="P3 = !P3">add paragraf 3</button>
                        <div class="bloc_title_paraf" v-if="P3">
                            <div class="title">
                                <label for="title" class="label_area">Titùl 3
                                    <input class="input_title" name="title" type="text" v-model="Title3"
                                        placeholder="Titúl3" />
                                </label>
                            </div>

                            <div>
                                <label for="p1" class="label_area">Paragraphe 3</label>
                                <textarea rows="6" cols="50" name="p1" type="text" class="description_bio" v-model="Texte3"
                                    placeholder="texte...">
                                 </textarea>
                            </div>
                        </div>
                        <button @click="P4 = !P4">add paragraf 4</button>
                        <div class="bloc_title_paraf" v-if="P4">
                            <div class="title">
                                <label for="title" class="label_area">Titùl 4
                                    <input class="input_title" name="title" type="text" v-model="Title4"
                                        placeholder="Titúl4" />
                                </label>
                            </div>

                            <div>
                                <label for="p1" class="label_area">Paragraphe 4</label>
                                <textarea rows="6" cols="50" name="p1" type="text" class="description_bio" v-model="Texte4"
                                    placeholder="texte...">
                                 </textarea>
                            </div>
                        </div>
                        <button @click="P5 = !P5">add paragraf 5</button>
                        <div class="bloc_title_paraf" v-if="P5">
                            <div class="title">
                                <label for="title" class="label_area">Titùl 5
                                    <input class="input_title" name="title" type="text" v-model="Title5"
                                        placeholder="Titúl5" />
                                </label>
                            </div>

                            <div>
                                <label for="p1" class="label_area">Paragraphe 5</label>
                                <textarea rows="6" cols="50" name="p1" type="text" class="description_bio" v-model="Texte5"
                                    placeholder="texte...">
                                 </textarea>
                            </div>
                        </div>

                        <div class="title">
                            <div class="link">
                                <label for="title_link" class="label_area">Description lien 1
                                    <input class="input_title" name="title_link" type="text" v-model="TextLink1"
                                        placeholder="description du lien" />
                                </label>
                                <label for="link" class="label_area">Link 1
                                    <input class="input_title" name="link" type="text" v-model="Link1" placeholder="Link" />
                                </label>
                            </div>
                            <div class="link">
                                <label for="title_link" class="label_area">Description lien 2
                                    <input class="input_title" name="title_link" type="text" v-model="TextLink2"
                                        placeholder="description du lien" />
                                </label>
                                <label for="link" class="label_area">Link 2
                                    <input class="input_title" name="link" type="text" v-model="Link2" placeholder="Link" />
                                </label>
                            </div>
                            <div class="link">
                                <label for="title_link" class="label_area">Description lien 3
                                    <input class="input_title" name="title_link" type="text" v-model="TextLink3"
                                        placeholder="description du lien" />
                                </label>
                                <label for="link" class="label_area">Link 3
                                    <input class="input_title" name="link" type="text" v-model="Link3" placeholder="Link" />
                                </label>
                            </div>
                            <div class="link">
                                <label for="title_link" class="label_area">Description lien 4
                                    <input class="input_title" name="title_link" type="text" v-model="TextLink4"
                                        placeholder="description du lien" />
                                </label>
                                <label for="link" class="label_area">Link 4
                                    <input class="input_title" name="link" type="text" v-model="Link4" placeholder="Link" />
                                </label>
                            </div>
                            <div class="link">
                                <label for="title_link" class="label_area">Description lien 5
                                    <input class="input_title" name="title_link" type="text" v-model="TextLink5"
                                        placeholder="description du lien" />
                                </label>
                                <label for="link" class="label_area">Link 5
                                    <input class="input_title" name="link" type="text" v-model="Link5" placeholder="Link" />
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="btn_Publish">
                    <button @click="updatePost(postSelected[0]._id)" v-if="postUpdate">Update</button>
                    <button @click="SendPost()" v-else>Publish</button>
                    <button @click="$emit('open_add')">Cancel</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup >
import { ref, toRef } from "vue"
import Compressor from 'compressorjs';
import { useNewPostStore } from '@/store/useNewPost'


const themes = defineProps(['themes', 'p'])
console.log("THEMES", themes);

const postStore = useNewPostStore();
const { sendPost } = postStore
let P2 = ref(false)
let P3 = ref(false)
let P4 = ref(false)
let P5 = ref(false)
let preview = ref("");
let fileName = ref("");
let image = ref("");
let fileSelected = ref("");
let description_image = "";
// let theme = "";
let Title1 = "";
let colorTitle = ""
let subTitle = ""
let color_subTitle_1 = "";

let Title2 = "";
let Title3 = "";
let Title4 = "";
let Title5 = "";
let color1 = "";

let Texte1 = "";
let Texte2 = "";
let Texte3 = "";
let Texte4 = "";
let Texte5 = "";

let TextLink1 = "";
let Link1 = "";
let TextLink2 = "";
let Link2 = "";
let TextLink3 = "";
let Link3 = "";
let TextLink4 = "";
let Link4 = "";
let TextLink5 = "";
let Link5 = "";

const FileUpload = (event) => {

    let inp = document.querySelectorAll('input[type=file]');
    console.log("FILE UPLOAD EVENT", event);

    var input = event.target;
    if (input.files) {
        var reader = new FileReader();
        reader.onload = (e) => {
            preview.value = e.target.result;

        }
        reader.readAsDataURL(input.files[0]);
    }
    // fileSelected.value = input.files[0];

    // ************ DONE **********************************

    var File = event.target.files[0];

    fileName = File.name
    new Compressor(File, {
        quality: 0.6,
        success(result) {
            console.log("SUCCESS COMPRESSOR", result);
            fileSelected = result

        },
        error(err) {
            console.log(err.message);
        },
    });
}

function cancelFileSelected() {
    fileSelected.value = "";
    fileName.value = "";
    preview.value = "";
    console.log("FILECANCEL");
}

const SendPost = (x) => {
    let bodyFormData = new FormData();
    let t = document.getElementById('the').value;
    let theme = t.toLowerCase()
    if (t == "All") {
        alert("veuillez préciser le theme, Merci")
        return
    }
    console.log("THEME SELECTED T", t);
    console.log("THEME SELECTED THEME", theme);
    if (fileSelected) {
        bodyFormData.append("image", fileSelected);
        bodyFormData.append("description_image", description_image);

        bodyFormData.append("title_1", Title1);
        bodyFormData.append("color_title_1", colorTitle);
        bodyFormData.append("subTitle_1", subTitle);
        bodyFormData.append("color_subTitle_1", color_subTitle_1);
        bodyFormData.append("p_1", Texte1);
        bodyFormData.append("title_2", Title2);
        bodyFormData.append("p_2", Texte2);
        bodyFormData.append("title_3", Title3);
        bodyFormData.append("p_3", Texte3);
        bodyFormData.append("title_4", Title4);
        bodyFormData.append("p_4", Texte4);
        bodyFormData.append("title_5", Title5);
        bodyFormData.append("p_5", Texte5);

        bodyFormData.append("Text_link1", TextLink1);
        bodyFormData.append("link_1", Link1);
        bodyFormData.append("Text_link2", TextLink2);
        bodyFormData.append("link_2", Link2);
        bodyFormData.append("Text_link3", TextLink3);
        bodyFormData.append("link_3", Link3);
        bodyFormData.append("Text_link4", TextLink4);
        bodyFormData.append("link_4", Link4);
        bodyFormData.append("Text_link5", TextLink5);
        bodyFormData.append("link_5", Link5);
        bodyFormData.append("name", "post");
        bodyFormData.append("blog_name", "Mblog");
        bodyFormData.append("theme", theme);
    } else {
        bodyFormData.append("title_1", Title1);
        bodyFormData.append("color_title_1", colorTitle);
        bodyFormData.append("subTitle_1", subTitle);
        bodyFormData.append("color_subTitle_1", color_subTitle_1);
        bodyFormData.append("p_1", Texte1);
        bodyFormData.append("title_2", Title2);
        bodyFormData.append("p_2", Texte2);
        bodyFormData.append("title_3", Title3);
        bodyFormData.append("p_3", Texte3);
        bodyFormData.append("title_4", Title4);
        bodyFormData.append("p_4", Texte4);
        bodyFormData.append("title_5", Title5);
        bodyFormData.append("p_5", Texte5);
        bodyFormData.append("Text_link1", TextLink1);
        bodyFormData.append("link_1", Link1);
        bodyFormData.append("Text_link2", TextLink2);
        bodyFormData.append("link_2", Link2);
        bodyFormData.append("Text_link3", TextLink3);
        bodyFormData.append("link_3", Link3);
        bodyFormData.append("Text_link4", TextLink4);
        bodyFormData.append("link_4", Link4);
        bodyFormData.append("Text_link5", TextLink5);
        bodyFormData.append("link_5", Link5);
        bodyFormData.append("name", "post");
        bodyFormData.append("blog_name", "Mblog");
        bodyFormData.append("theme", theme);

    }
    //     for (var pair of bodyFormData.entries()) {
    //     console.log(pair[0]+ ', ' +  pair[1]); 
    // }

    sendPost(
        bodyFormData
    )
        .then((response) => {
            if (response.status == 201) {
                console.log("RESPONSE BLOG POST SEND 2", response);
                file = null;
                this.$emit('closePost');
                location.reload();
            }
        })
        .catch((response) => {

        });
}
</script>

<style scoped>
button {
    margin: 20px
}

.container {
    /* background-color: black; */
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 100;
    width: 100%
}

.bloc_post {
    display: flex;
    flex-direction: column;
    border: 1px solid white;
    width: 350px;
    /* height: 100vh; */
    margin: 10px auto;
    background-color: rgba(1, 1, 1, 0.9);
    border-radius: 10px;
}

.title {
    display: flex;
    flex-direction: column;

}

.label_area {
    color: white;

}

textarea {
    width: 90%
}

.link {
    margin: 20px auto;

}

.img_preview {
    width: 90%;
    height: 200px;
    object-fit: contain;
    overflow: hidden;
}

.img_previewed {
    width: 90%;
    height: 200px;
}

.prevSpace {
    position: relative;
    width: 100%;
    height: 220px;
    border: 1px solid blue;
}

.bloc_img_text {

    width: 100%;
    /* height: 60vh; */
    min-height: auto;
    margin-top: 0;
    /* border: 1px solid blue; */
    box-shadow: 2px 2px 10px white;
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: center;
}

.bloc_btn_img {
    width: 100%;
    height: 5vh;
    /* border: 1px solid red; */
    border-radius: 10px;


    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
}

.btn_upL,
.btn_cancel {
    background-color: rgb(255, 147, 39);
    width: 45%;
    border-radius: 10px;
    height: 90%;
    line-height: 35px;
}

.img_ulpoaded {
    position: absolute;
    width: 100%;
    height: auto;
    max-height: 200px;
    top: 0;
    left: 0;
    right: 0;
    object-fit: contain;
    overflow: hidden;
    padding-top: 10px
        /* border: 1px solid violet */
}

.fileName {
    position: absolute;
    top: 10px;
    left: 10px;
    background: rgb(10, 10, 10);
}

.bloc_text {
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    /* border: 1px solid rgb(62, 17, 241); */
}

.bloc_text>div {
    margin: 10px
}

.btn_Publish {
    width: 80%;
    margin: 0 auto;
    box-shadow: 2px 2px 10px;
}

.btn_Publish>button {
    width: 70px;
    padding: 5px;
    border: none;
    border-radius: 5px;
    box-shadow: 2px 2px 10px;
    box-shadow: 2px 2px 10px white;


}

@media screen and (min-width:768px) and (max-height:500px) {
    .bloc_post {
        flex-direction: row;
        width: 650px;
        margin: 20px auto
    }

    .bloc_img_text {
        flex-direction: row;
    }

    .btn_Publish {
        width: 50px
    }

    .bloc_btn_img {
        display: flex;
        flex-direction: column;
        width: 100px;
        justify-content: space-around;
        height: 100%
    }

    .btn_Publish>button {
        border: 1px solid black;

    }
}
</style>