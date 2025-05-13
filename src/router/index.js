import { createRouter, createWebHistory } from "vue-router";
import Settings from "@/Views/Settings.vue";
import NotFound from "@/components/NotFound.vue";
import Examination from "@/Views/Invigilator/Examination.vue";
import Invigilator from "@/Views/Invigilator/Invigilator.vue";
import InvigilatorSettings from "@/Views/Invigilator/Settings.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      children: [
        {
          path: "/settings",
          name: "settings",
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
          path: "/invigilator",
          name: "invigilator",
          component: Invigilator,
        },
        {
          path: "/:catchAll(.*)",
          name: "not-found",
          component: NotFound,
        },
      ],
    },

    
  ],
});

export default router;
