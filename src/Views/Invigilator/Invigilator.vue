<template>
    
  <div class="px-10">
    <Top date="" time="" />

    <div
      class="bg-[linear-gradient(to_right,rgba(43,54,116,1),rgba(154,164,221,1))] rounded-[24px] h-[256px] shadow-dp1 mt-10 w-full p-10 px-14 text-white"
    >
      <h4>September 4, 2023</h4>
      <div class="my-6 flex flex-col mt-10 justify-between gap-[16px]">
        <h2 class="font-[600] text-[24px] leading-[100%] tracking-[0%]">
          Welcome Mgborogwu Godswill
        </h2>
        <h2 class="text-[20px] font-[400]">m.godswill@unizik.edu.ng</h2>
      </div>
    </div>
    <div class="my-10">
      <div class="my-5">
        <h2 class=" shadow-boxShadow rounded-[5px] w-[393px] h-[45px] flex items-center px-1 font-[600] text-[16px] text-[rgba(43,54,116,1)]">Here are the list of exams your’re to Invigilate</h2>
      </div>
      <div>
        <n-data-table
          :columns="columns"
          :data="data"
          :pagination="pagination"
          :max-height="250"
        />
      </div>
      <div>
        <Record />
      </div>
    </div>
  </div>
</template>

<script setup>
import Top from "@/components/Settings/Top.vue";
import Record from "@/components/Tables/Invigilator/Record.vue";
import { ref } from "vue";

const data = Array.from({ length: 46 }).map((_, index) => ({
  key: index,
  name: `Edward King ${index}`,
  age: 32,
  address: `London, Park Lane no. ${index}`,
}));
const pagination = ref({
  pageSize: 15,
});

const columns = [
  {
    title: "Name",
    key: "name",
  },
  {
    title: "Age",
    key: "age",
  },
  {
    title: "Address",
    key: "address",
  },
];
</script>
