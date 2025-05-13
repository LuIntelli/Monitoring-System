<template>
  <div
    class="dashboard bg-[rgba(43,54,116,1)] flex flex-col items-center py-16 w-[265px] min-h-screen shadow-dashBoard-color justify-between"
  >
    <div class="top">
      <img :src="Cap" alt="Graduation Cap" />

      <div class="text-white mt-[100px]">
        <ul class="flex gap-[48px] flex-col">
          <li v-for="link in links" class="font-[600] text-[14px] leading-[0%]" :key="link.name">
            <RouterLink :to="link.path">
              {{ link.name }}
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>

    <div class="flex gap-1">
      <RouterLink
        to="/logout"
        class="flex gap-2 font-[400] items-center text-[16px] leading-[100%] tracking-[0%] text-[rgba(255,255,255,0.75)]"
      >
        <img :src="Logout" alt="Graduation Cap" />
        Logout
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
import Cap from "@/assets/imgs/Cap.png";
import DashBoardSlots from "@/components/DashBoard/DashBoardSlots.vue";
import Logout from "@/assets/imgs/Logout.png";
import { RouterLink, useRoute } from "vue-router";
import { computed } from "vue";

const route = useRoute();
const links = computed(() => {
  if (route.path === "/invigilator") {
    return [
      {
        name: "Examination",
        path: "/invigilator/examination",
      },
      {
        name: "Settings",
        path: "/invigilator/settings",
      },
    ];
  }
  if (route.path === "/") {
    return [
      {
        name: "Home",
        path: "/invigilator/settings",
      },
      {
        name: "Examination",
        path: "/invigilator/examination",
      },
    ];
  }
  if (route.path === "/settings") {
    return [
      
      {
        name: "Settings",
        path: "/settings",
      },
    ];
  }
  if (route.path === "/invigilator/settings") {
    return [
      {
        name: "Examination",
        path: "/invigilator/examination",
      },
      {
        name: "Settings",
        path: "/invigilator/settings",
      },
    ];
  }
  if (route.path === "/invigilator/examination") {
    return [
      {
        name: "Examination",
        path: "/invigilator/examination",
      },
      {
        name: "Settings",
        path: "/invigilator/settings",
      },
    ];
  }

  // return [];
});

console.log(route.path.startsWith("/invigilator"), links.value, route.path);
</script>
