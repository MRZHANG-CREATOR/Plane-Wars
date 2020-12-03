<template>
    <container>
    <sprite :texture="endPageImg"></sprite>
    <sprite :texture="restartBtnImg" x='225' y='510' :interactive='true'  @click="handleClick"></sprite>
    </container>
</template>

<script>
import endPageImg from '../assets/end_page.jpg'
import restartBtnImg from '../assets/restartBtn.png'
    export default {
        setup(props,{emit}){
            const handleClick=()=>{
                console.log('click')
                emit("change-page","GamePage")//必须有短横线，而且短横线后不能大写
            }
            return{
                endPageImg,
                restartBtnImg,
                handleClick,

            }
        }
    }
</script>

<style>

</style>