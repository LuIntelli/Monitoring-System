<template>
  <div class="invigilator-examination px-10">
    <Top date="" time="" />
    <div class="main mt-10">
      <RouterLink to="/invigilator"> < Back </RouterLink>
      <div class="my-8">
        <div
          class="bg-[rgba(255,255,255,1)] my-8 flex items-center w-[360px] h-[45px] rounded-[5px] shadow-boxShadow text-[rgba(43,54,116,1)]"
        >
          <h2 class="text-[20px] font-[700] leading-[100%] tracking-[0%]">
            PUTME Examination 2024/2025
          </h2>
        </div>
        <div class="flex justify-between bg-white items-center pl-[20px] pr-[5px]">
          <div class="time text-[rgba(42,197,112,1)]">
            <span><i class="pi pi-clock"></i> 10:45 mins</span>
          </div>
          <div class="flex gap-[16px]">
            <n-button
              :bordered="false"
              class="bg-[rgba(204,0,0,1)] w-[140px] text-white rounded-[5px] outline-none border-0"
            >
              Cancel Exam
            </n-button>
            <n-button
              :bordered="false"
              class="bg-[rgba(253,173,21,1)] w-[140px] text-white rounded-[5px] outline-none border-0"
            >
              Pause Exam
            </n-button>
          </div>
        </div>
        <div class="my-8">
          <div
            class="flex justify-between px-[20px] py-[10px] items-center shadow-boxShadow"
          >
            <div class="text-[rgba(43,54,116,1)]">
              <h1 class="font-[600] text-[16px] leading-[100%] tracking-[0%]">
                PUTME CBT Batch 2367
              </h1>
            </div>
            <div class="flex justify-between items-center gap-[16px]">
              <i
                class="pi pi-comment text-black"
                style="font-size: 1.5rem; margin-right: 10px"
              ></i>
              <i
                class="pi pi-microphone border p-2 bg-gray-200 rounded-full"
              ></i>
              <i
                class="pi pi-comment"
                style="font-size: 1.5rem; margin-right: 10px"
              ></i>
            </div>
          </div>
          <div
            class="py-[10px] px-[15px] bg-[rgba(255,255,255,1)] shadow-boxShadow rounded-[5px] my-2"
          >
            <h1
              class="font-[600] text-[16px] leading-[100%] tracking-[0%] text-[rgba(43,54,116,1)]"
            >
              Enrolled ( {{ output.participants.length}} )
            </h1>
            <div class="flex gap-[15px] mt-5">

              
              <div class="participant w-[85px] h-[74.6px]" v-for="participant in output.participants" :key="participant.name">
                <img :src="participant.imgUrl" alt="participant" class="rounded-[360px] w-[48px] h-[47.6px] opacity-[90%] border-[4px] border-[rgba(146,95,226,1)]" />
                <span class="mt-1 inline-block align-middle text-center">
                  {{ participant.name }}
                </span>
              </div>
              
            </div>
          </div>
          <div class="list-of-student-taking-exam"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import Top from "@/components/Settings/Top.vue";
import User from "@/assets/imgs/user.jpg";



import { RouterLink } from "vue-router";
import DailyIframe from "@daily-co/daily-js";
import { onMounted, onBeforeUnmount, ref, reactive } from "vue";

let callFrame = ref("");
let output = reactive({
  participants:[
    {
      name:"Godswill",
      imgUrl:User
    },
    {
      name:"Blessing",
      imgUrl:User
    },
    {
      name:"Nkechi",
      imgUrl:User
    },
    {
      name:"Ahmed",
      imgUrl:User
    },
    {
      name:"Olamilekan",
      imgUrl:User
    },
  ]
});




</script>
