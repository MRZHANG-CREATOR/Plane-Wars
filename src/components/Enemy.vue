<template>
  <container>

    <sprite :texture="EnemyImg"></sprite>
  </container>
</template>

<script>
import EnemyImg from "../assets/enemy.png";
import {game} from '../game/index'
import {onMounted, onUnmounted, reactive} from 'vue'
export default {
  setup(){

    return{
      EnemyImg
    }
  }
};
export function userEnemeyPlane(){
  const EnemyPlanes=reactive([{
      x:50,
      y:100,
      width:308,
      height:207
    },{
      x:400,
      y:100,
      width:308,
      height:207
    }]);
    function move(){
      const speed=1;
      const handleTicker=()=>{
        EnemyPlanes.forEach((enemy,index)=>{
          enemy.y+=speed;
          if(enemy.y>1000){
            EnemyPlanes.splice(index,1)
            console.log("销毁一个")
          }
          });
      }
      onMounted(()=>{
        game.ticker.add(handleTicker)
      });
      onUnmounted(()=>{
        game.ticker.remove(handleTicker)
      })
    }
    move()
    return {  
      EnemyPlanes
    }
}
</script>

<style></style>
