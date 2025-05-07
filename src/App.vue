<script setup>
import DashBoard from "@/components/DashBoard/DashBoard.vue";
import { RouterView } from "vue-router";
</script>

<template>
  <div class="flex gap-6">
    <div class="main">
      <DashBoard />
    </div>
    <div class="views w-full">
      <RouterView />
    </div>
  </div>
</template>
