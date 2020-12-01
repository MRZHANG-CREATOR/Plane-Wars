<template>
    <container>
    <sprite :texture="startPageImg"></sprite>
    </container>
</template>

<script>
import startPageImg from '../assets/start_page.jpg'
    export default {
        setup(){
            return{
                startPageImg
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>