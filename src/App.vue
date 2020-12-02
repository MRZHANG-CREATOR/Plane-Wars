<template>
  <container>
    <currentPage @change-page="changePage"></currentPage>
  </container>
</template>

<script>
import { computed,ref } from 'vue'
import GamePage from './page/gamePage'
import StartPage from './page/StartPage'
  export default {
    setup() {
      const currentPageName=ref('GamePage')
      // const currentPageName=ref('StartPage')
      const currentPage=computed(()=>{
        if(currentPageName.value==="GamePage"){
          return GamePage;
        }else if(currentPageName.value==="StartPage"){
          return StartPage
        }
      });
      const changePage=(PageName)=>{
        currentPageName.value=PageName
      }
      return {
        currentPageName,
        currentPage,
        changePage
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>