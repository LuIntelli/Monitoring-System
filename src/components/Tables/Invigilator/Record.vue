<template>
    <div class="">
      
      <div class="my-10">
        <div class="my-5">
          <h2 class=" px-1 font-[600] text-[20px] leading-[100%] tracking-[0%] text-[rgba(25,25,25,1)]">Invigilation Record</h2>
        </div>
        <div>
          <n-data-table
            :columns="columns"
            :data="data"
            :pagination="pagination"
            :max-height="250"
            :header-style="{ backgroundColor: 'rgba(43, 54, 116, 1)',}"
          />
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import Top from "@/components/Settings/Top.vue";
  import { ref } from "vue";
  
  const data = Array.from({ length: 4 }).map((_, index) => ({
    key: index,
    name: `PUTME CBT Batch 2367`,
    date: '12/08/2024',
    time_started: '10:30 AM',
    time_ended: '11:30 AM',
    invigilator: `Mazi Ukegbe Nwanni. ${index}`,
  }));
  const pagination = ref({
    pageSize: 15,
  });
  
  const columns = [
    {
      title: "Exam Name",
      key: "name",
    },
    {
      title: "Date",
      key: "date",
    },
    {
      title: "Time Started",
      key: "time_started",
    },
    {
      title: "Time Ended",
      key: "time_ended",
    },
    {
      title: "Invigilator",
      key: "invigilator",
    },
  ];
  </script>
  