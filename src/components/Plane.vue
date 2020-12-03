<template>
  <container>
    <sprite :texture="planeImg"></sprite>
  </container>
</template>

<script>
import planeImg from "../assets/plane.png";
import { onMounted, onUnmounted, reactive } from "vue";

export default {
  setup() {
    return {
      planeImg,
    };
  },
};
export function usePlane({onAttack}) {
  const PlaneInfo = reactive({
    x: 200,
    y: 500,
    width:384,
    height:364
  });
  const speed = 5;
  const handleMove = (e) => {
    switch (e.code) {
      case "ArrowUp":
        PlaneInfo.y -= speed;
        break;
      case "ArrowDown":
        PlaneInfo.y += speed;
        break;
      case "ArrowLeft":
        PlaneInfo.x -= speed;
        break;
      case "ArrowRight":
        PlaneInfo.x += speed;
        break;
    }
  };
  onMounted(() => {
    window.addEventListener("keypress", handleMove);
    window.addEventListener("keydown", handleMove);
  });
  onUnmounted(() => {
    window.removeEventListener("keypress", handleMove);
    window.removeEventListener("keydown", handleMove);
  });
  const attack = () => {
    const handleAttack = (e) => {
      if (e.code == "Space") {
        if (onAttack) {
          onAttack({
            x: PlaneInfo.x+100,
            y: PlaneInfo.y-20,
          });
        }
      }
    };
    onMounted(()=>{
      window.addEventListener("keydown",handleAttack)
    });
    onUnmounted(()=>{
      window.removeEventListener("keydown",handleAttack)
    })
  };
  attack()
  return {
    PlaneInfo,
  };
}
</script>

<style></style>
