<template>
    <container>
    <sprite :texture="startPageImg"></sprite>
    <sprite :texture="startBtnImg" x='225' y='510' :interactive='true'  @click="handleClick"></sprite>
    </container>
</template>

<script>
import startPageImg from '../assets/start_page.jpg'
import startBtnImg from '../assets/startBtn.png'
    export default {
        setup(props,{emit}){
            const handleClick=()=>{
                console.log('click')
                emit("change-page","GamePage")//必须有短横线，而且短横线后不能大写
            }
            return{
                startPageImg,
                startBtnImg,
                handleClick
            }
        }
    }
</script>

<style>

</style>