<template>
  <container>
    <Map></Map>
    <Plane :x="PlaneInfo.x" :y="PlaneInfo.y"></Plane>
    <EnemyPlane
      v-for="(enemyInfo, index) in EnemyPlanes"
      :key="index"
      :x="enemyInfo.x"
      :y="enemyInfo.y"
    ></EnemyPlane>
    <Bullet
      v-for="(bullet, index) in Bullets"
      :key="index"
      :x="bullet.x"
      :y="bullet.y"
    ></Bullet>
  </container>
</template>

<script>
import Bullet, { userBullets } from "../components/bullet";
import EnemyPlane, { userEnemeyPlane } from "../components/Enemy";
import Plane, { usePlane } from "../components/Plane";
import { hitTestObject } from "../utils";
import Map from "../components/Map";
import { onUnmounted,onMounted } from "vue";
import {game} from '../game'
export default {
  setup(props,{emit}) {
    const { EnemyPlanes } = userEnemeyPlane();
    const { Bullets, addBullet } = userBullets();
    const { PlaneInfo } = usePlane({
      onAttack(position) {
        //console.log(position);
        addBullet(position.x, position.y);
      },
    });
    function useFighting() {
      const fighting = () => {
        for (let index = 0; index < EnemyPlanes.length; index++) {//敌机和我方飞机碰撞
          
            const enemyInfo = EnemyPlanes[index];
          if (hitTestObject(enemyInfo, PlaneInfo)) {
            console.log("hit");
            emit("change-page","EndPage")
          }
          
          
        }
        for (let index = 0; index < EnemyPlanes.length; index++) {//敌机和我方飞机碰撞
          Bullets.forEach((bullet,bulletIndex)=>{
            const enemyInfo = EnemyPlanes[index];
          if (hitTestObject(enemyInfo, bullet)) {
           EnemyPlanes.splice(index,1);
           Bullets.splice(bulletIndex,1)
          }
          })
          
        }
      };
      onMounted(() => {
        game.ticker.add(fighting);
      });
      onUnmounted(() => {
        game.ticker.remove(fighting);
      });
    }
    useFighting()
    return {
      Plane,
      Map,
      PlaneInfo,
      EnemyPlane,
      EnemyPlanes,
      Bullet,
      Bullets,
    };
  },
};
</script>

<style lang="scss" scoped></style>
