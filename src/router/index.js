import { createRouter, createWebHistory } from "vue-router";
import Settings from "@/Views/Settings.vue";
import Examination from "@/Views/Invigilator/Examination.vue";
import InvigilatorSettings from "@/Views/Invigilator/Settings.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/settings",
      name: "settings",
      component: Settings,
    },
    {
      path: "/setting",
      name: "setting",
      component: Settings,
    },
    {
      path: "/invigilator/examination",
      name: "invigilator-examination",
      component: Examination,
    },
    {
      path: "/invigilator/settings",
      name: "invigilator-settings",
      component: InvigilatorSettings,
    },
    {
      path: "/:catchAll(.*)",
      name: "not-found",
      component: "",
    },
  ],
});

export default router;
