<template>
  <container>
    <sprite :texture="bulletImg"></sprite>
  </container>
</template>

<script>
import { reactive,onMounted,onUnmounted } from 'vue';
import bulletImg from "../assets/bullet.png";
import {game} from '../game'
export default {
  setup() {
    return {
      bulletImg,
    };
  },
};
export function userBullets(){
  const Bullets=reactive([]);
  const width=61;
  const height=99;
  const addBullet=(x,y)=>{
    Bullets.push({x,y,width,height})
  };
  function move(){
      const speed=3;
      const handleTicker=()=>{
        Bullets.forEach((bullet,index)=>{
          bullet.y-=speed;
          if(bullet.y<-100){
            Bullets.splice(index,1)
            console.log("子弹销毁")
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
     Bullets,addBullet
   }
   }
</script>

<style></style>
