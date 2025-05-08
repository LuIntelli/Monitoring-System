<template>
  <div class="mt-[100px]">
    <div class="top">
      <h2
        class="w-[323px] h-[45px] font-[700] text-[20px] leading-[15px] tracking-[-2%] rounded-[5px] bg-[rgba(255,255,255,1)] shadow-dropShadow"
      >
        Settings
      </h2>
    </div>
    <div class="main w-[650px]">
      <n-form class="">
        <div class="space-y-0">
          <n-form-item class="mb-[-25px]">
            <div class="flex items-center w-full justify-between gap-3">
              <div class="flex flex-col gap-3">
                <span
                  class="text-[16px] block text-[rgba(25,25,25,1)] font-[700] leading-[17px] tracking-[-2%] text-gray-700"
                  >Audio</span
                >
                <span
                  class="text-[12px] block text-[rgba(163,174,208,1)] font-[500] leading-[15px] tracking-[-2%] text-gray-700"
                  >Enable App to use your microphone</span
                >
              </div>
              <n-switch v-model:value="audio" />
            </div>
          </n-form-item>

          <!-- Role Select with Microphone Icon -->
          <n-form-item class="">
            <div class="h-[55px] w-full">
              <n-select 
              v-model:value="formModel.role"
              :options="options"
              
              placeholder="🎤 Use mic to select role"
            />
            </div>
          </n-form-item>
        </div>
        <div class="mt-[-50px]">
          <n-form-item class="mb-[-25px]">
            <div class="flex items-center w-full justify-between gap-3">
              <div class="flex flex-col gap-3">
                <span
                  class="text-[16px] block text-[rgba(25,25,25,1)] font-[700] leading-[17px] tracking-[-2%] text-gray-700"
                  >Video</span
                >
                <span
                  class="text-[12px] block text-[rgba(163,174,208,1)] font-[500] leading-[15px] tracking-[-2%] text-gray-700"
                  >Enable App to use your webcam</span
                >
              </div>
              <n-switch v-model:value="formModel.video" />
            </div>
          </n-form-item>

          <!-- Role Select with Microphone Icon -->
          <n-form-item class="">
            <div class="h-[55px] w-full">
              <n-select 
              v-model:value="formModel.role"
              :options="options"
              
              placeholder="🎤 Use mic to select role"
            />
            </div>
          </n-form-item>
        </div>
        <div class="mt-[-50px]">
          <n-form-item class="mb-[-45px]">
            <div class="flex items-center w-full justify-between gap-3">
              <div class="flex flex-col gap-3">
                <span
                  class="text-[14px] block text-[rgba(96,96,96,1)] font-[400] leading-[17px] tracking-[0] text-gray-700"
                  >Language</span
                >
                
              </div>
            </div>
          
          </n-form-item>

          <n-form-item class="">
            <div class="h-[55px] w-full">
              <n-select 
              v-model:value="formModel.language"
              :options="languages"
              
              placeholder="🎤 Use mic to select role"
            />
            </div>
          </n-form-item>
        </div>
        <div class="mt-[-50px]">
          <n-form-item class="mb-[-45px]">
            <div class="flex items-center w-full justify-between gap-3">
              <div class="flex flex-col gap-3">
                <span
                  class="text-[14px] block text-[rgba(96,96,96,1)] font-[400] leading-[17px] tracking-[0] text-gray-700"
                  >Date Format</span
                >
                
              </div>
            </div>
          
          </n-form-item>

          <!-- Role Select with Microphone Icon -->
          <n-form-item class="">
            <div class="h-[55px] w-full">
              <n-select 
              v-model:value="formModel.dateFormat"
              :options="dateFormat"
              
              placeholder="🎤 Use mic to select role"
            />
            </div>
          </n-form-item>
        </div>
        <div class="mt-[-50px]">
          <n-form-item class="mb-[-35px]">
            <div class="flex items-center w-full justify-between gap-3">
              <div class="flex flex-col gap-3">
                <span
                  class="text-[16px] block text-[rgba(25,25,25,1)] font-[700] leading-[17px] tracking-[-2%] text-gray-700"
                  >Automatic Time Zone</span
                >
                
              </div>
              <n-switch v-model:value="formModel.zone" />
            </div>
          </n-form-item>

          <!-- Role Select with Microphone Icon -->
          <n-form-item class="">
            <div class="h-[55px] w-full">
              <n-select 
              v-model:value="formModel.timeZone"
              :options="timeZone"
              
              placeholder="🎤 Use mic to select role"
            />
            </div>
          </n-form-item>
        </div>
      </n-form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { NSelect, NIcon } from "naive-ui";
import { MicNoneOutlined } from "@vicons/material";

const formModel = ref({
  audio:false,
  video:false,
  zone:false,
  timeZone:"Utc-f",
  language:"English",
  dateFormat:"DD//MM/Yr",
  role:"Mathematics"
})

const input = ref("");

const activate = ref(false);

// const

const options = [
  { label: "Mathematics", value: "Mathematics" },
  { label: "Physics", value: "Physics" },
  { label: "Chemistry", value: "Chemistry" },
];
const languages = [
  { label: "English", value: "English" },
  { label: "French", value: "French" },
  { label: "Igbo", value: "Igbo" },
];
const dateFormat = [
  { label: "DD//MM/Yr", value: "DD//MM/Yr" },
  { label: "DD-MM-YR", value: "DD-MM-YR" },
];
const timeZone = [
  { label: "Utc-f", value: "Utc-f" },
];
</script>
