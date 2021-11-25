import Vue from "vue";
import VueRouter from "vue-router";
import VendingPage from "@/components/VendingPage.vue";
import VuexVending from "@/components/VuexVending.vue";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "VendingPage",
      component: VendingPage,
    },
    {
      path: "/VuexVending",
      name: "VuexVending",
      component: VuexVending,
    },
  ],
});
