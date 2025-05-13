<script setup>
import DashBoard from "@/components/DashBoard/DashBoard.vue";
import { NMessageProvider } from "naive-ui";
import { RouterView } from "vue-router";
</script>

<template>
  <n-message-provider>
    <div class="flex gap-6 min-h-screen">
      <div class="main h-screen fixed left-0 top-0">
        <DashBoard />
      </div>
      <div class="views w-full ml-[290px]">
        <RouterView />
      </div>
    </div>
  </n-message-provider>
</template>
