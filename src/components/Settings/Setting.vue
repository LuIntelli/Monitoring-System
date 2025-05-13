<template>
  <n-config-provider>
    <n-message-provider>
      <div class="mt-[100px]">
        <div class="top">
          <h2
            class="w-[323px] h-[45px] font-[700] text-[20px] leading-[15px] tracking-[-2%] rounded-[5px] bg-[rgba(255,255,255,1)] shadow-dropShadow"
          >
            Settings
          </h2>
        </div>
        <div class="main w-[650px]">
          <n-form
            class=""
            label-placement="top"
            :rules="rules"
            :model="formModel"
            ref="form"
          >
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
                  <n-switch
                    v-model:value="formModel.audio"
                  />
                </div>
              </n-form-item>

              <!-- Role Select with Microphone Icon -->
              <n-form-item class="">
                <div class="h-[55px] w-full">
                  <n-select
                    v-model:value="formModel.selectedMic"
                    :options="micOptions"
                    :disabled="!formModel.audio"
                    placeholder="🎤 Use mic to select role"
                    clearable
                  />
                </div>
              </n-form-item>
            </div>
            <div class="mt-[-50px]">
              <n-form-item class="mb-[-25px]" path="video">
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
                  <n-switch
                    v-model:value="formModel.video"
                  />
                </div>
              </n-form-item>

              <!-- Role Select with Microphone Icon -->
              <n-form-item class="" placement="bottom-start">
                <div class="h-[55px] w-full">
                  <n-select
                    v-model:value="formModel.selectedCamera"
                    :options="videoOptions"
                    :disabled="!formModel.video"
                    placeholder="Select Web cam"
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
                    :disabled="!formModel.zone"
                    placeholder="🎤 Use mic to select role"
                  />
                </div>
              </n-form-item>
            </div>
            <n-button
              class="bg-green-600 rounded text-white outline-0 border-0"
              @click="handleSubmit"
              >Submit</n-button
            >
          </n-form>
        </div>
      </div>
    </n-message-provider>
  </n-config-provider>
</template>

<script setup>
import { ref, watch } from "vue";
import {
  NSelect,
  NMessageProvider,
  NConfigProvider,
  NIcon,
  useMessage,
} from "naive-ui";
import { MicNoneOutlined } from "@vicons/material";
import { onMounted } from "vue";

// initialize useMessage for toastification
const message = useMessage();

const formModel = ref({
  audio: false,
  video: false,
  zone: false,
  timeZone: "",
  language: "English",
  dateFormat: "DD//MM/Yr",
  selectedMic: "",
  selectedCamera: "",
  role: "Mathematics",
});

const form = ref("");
const micOptions = ref([]);
const videoOptions = ref([]);

// Handle Submit form
const handleSubmit = () => {
  form.value?.validate((errors) => {
    if (!errors) {
      message.success("Form successfully submitted");
      console.log("Form successfully submitted");
    }
  });
};

// rules
const rules = {
  timeZone: [
    {
      required: true,
      message: "Time Zone is required",
      trigger: ["blur", "input"],
    },
    {
      type: "text",
      message: "Time Zone is required",
      trigger: ["blur", "input"],
    },
  ],
};

const languages = [
  { label: "English", value: "English" },
  { label: "French", value: "French" },
  { label: "Igbo", value: "Igbo" },
];
const dateFormat = [
  { label: "DD//MM/Yr", value: "DD//MM/Yr" },
  { label: "DD-MM-YR", value: "DD-MM-YR" },
];
const timeZone = [{ label: Intl.DateTimeFormat().resolvedOptions().timeZone, value: Intl.DateTimeFormat().resolvedOptions().timeZone }];

watch(() => formModel.value.audio, async (enabled) => {
  console.log(formModel.value.audio);
  if (enabled) {
    try {
      // Ask for permission
      await navigator.mediaDevices.getUserMedia({
        audio: true,
      });

      // Get list of media devices
      const devices = await navigator.mediaDevices.enumerateDevices();

      // Filter only audio input devices ( microphones )
      micOptions.value = devices
        .filter((device) => device.kind === "audioinput")
        .map((mic) => {
          return {
            label: mic.label,
            value: mic.label,
          };
        });
      
      console.log(micOptions.value[0], micOptions.value.length);
    } catch (error) {}
  } else  {
        micOptions.value = [];
        formModel.value.selectedMic = ""
        console.log("False...");
  }
})
// const AudioEnabler = 
watch(() => formModel.value.video,  async function (enabled) {
  if(enabled) {
    try {
    // Ask for permission
    await navigator.mediaDevices.getUserMedia({ video: formModel.value.video });

    // Get list of media devices
    const devices = await navigator.mediaDevices.enumerateDevices();

    // Filter only audio input devices ( microphones )
    videoOptions.value = devices
      .filter((device) => device.kind === "videoinput")
      .map((video) => {
        return {
          label: video.label,
          value: video.label,
        };
      });
    
  } catch (error) {
    message.error(error.message)
  }
  }
    else {
      videoOptions.value = [];
      formModel.value.selectedCamera = ""
      console.log("False...");
    }
});

watch(() => formModel.value.zone,  async function (enabled) {
  if(enabled) {
    
  }
    else {
      timeZone.value = [];
      formModel.value.timeZone = ""
    }
});
</script>
