<template>
    <div class="settings my-5  w-full">
    <div class="top flex gap-2 items-center justify-between w-full">
      <div class="user flex gap-2 items-center">
        <img
          :src="User"
          alt="User Image"
          class="w-[48px] h-[47.61px] rounded-[360px] border-[4px] opacity-[90%]"
        />
        <div class="user-details">
          <h3 class="font-[600] mb-2 text-[16px] text-text-b leading-[100%]">
            Mgborogwu Godswill O.
          </h3>
          <h2 class="font-[400] text-[16px] text-text-s leading-[100%]">
            2024344159BF
          </h2>
        </div>
      </div>
      <div class="flex gap-[45px]">
        <div class="date">
          <span
            class="text-s font-[400] text-[18px] leading-[32px] tracking-[-2%]"
            >Date :
          </span>
          <span
            class="text-[rgba(96, 96, 96, 1)] font-[700] text-[18px] leading-[32px] tracking-[-2%]"
            >13th August 2024</span
          >
        </div>
        <div class="time">
          <span
            class="text-s font-[400] text-[18px] leading-[32px] tracking-[-2%]"
            >Time :
          </span>
          <span
            class="text-[rgba(96, 96, 96, 1)] font-[700] text-[18px] leading-[32px] tracking-[-2%]"
            >11:45 AM</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import User from "@/assets/imgs/user.jpg";
</script>