<template>
  <div class="">
    <div class="md:grid md:grid-cols-1 lg:grid-cols-5">
      <div class="hidden lg:col-span-1 lg:block lg:border-r-2 h-screen">
        <nav
          class="bg-white h-[74px] border-b-2 border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900"
        >
        </nav>
        <div class="container lg:px-8 py-8">
          <side-nav></side-nav>
        </div>
      </div>
      <!-- ... -->
      <div class="top-0 md:col-span-4 col-start-1 col-end-6">
        <div class="border-b-2">
          <nav-bar></nav-bar>
        </div>
        <div class="lg:px-12 md:px-8 px-4">
        <!-- <router-view></router-view> -->
        <dashboard-page></dashboard-page>
        </div>
      </div>
    </div>

    <!-- <go-button width="full" color="secondary"></go-button>
    <circular-progress></circular-progress>
    <bar-chart-bar class=""></bar-chart-bar> -->
  </div>
</template>
<script>
import DashboardPage from "../pages/DashboardPage.vue";
import CircularProgress from "../atoms/CircularProgress.vue";
import GoButton from "../atoms/GoButton.vue";
import BarChartBar from "../atoms/BarChartBar.vue";
import SideNav from "../components/SideNav.vue";
import NavBar from "../components/NavBar.vue";
export default {
  name: "DashboardView",
  components: { GoButton, CircularProgress, BarChartBar, SideNav, NavBar, DashboardPage },
};
</script>
