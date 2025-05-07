<template>
  <div
    class="dashboard bg-[rgba(43,54,116,1)] flex flex-col items-center py-16 w-[265px] h-[1074px] shadow-dashBoard-color"
  >
    <div class="top">
      <img :src="Cap" alt="Graduation Cap" />
    </div>
  </div>
</template>

<script setup>
import Cap from "@/assets/imgs/Cap.png";
</script>
