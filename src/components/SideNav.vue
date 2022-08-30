<template>
  <div class="">
    <div>

    <div v-for="item in items" :key="item" class="">
      <DashboardLink
        class=""
        :title="item.title"
        :routeName="item.routeName"
      ></DashboardLink>
    </div>
    <!-- <div class="relative"> -->
    <div class="absolute bottom-0">
      <DashboardLink
        class=""
        title="Settings"
        routeName="settings"
      ></DashboardLink>
      <DashboardLink
        class=""
        title="Logout"
        routeName="settings"
      ></DashboardLink>
    </div>
    </div>
<!-- </div> -->
  </div>
</template>
<script>
import DashboardLink from "../atoms/DashboardLink.vue";
export default {
  data() {
    return {
      items: [
        { id: "1", title: "Dashboard", routeName: "dashboard" },
        { id: "1", title: "Statistics", routeName: "statistics" },
        { id: "1", title: "Payment", routeName: "payments" },
        { id: "1", title: "Products", routeName: "products" },
        { id: "1", title: "Customer", routeName: "customers" },
        { id: "1", title: "Messages", routeName: "messages" },
      ],
    };
  },
  components: { DashboardLink },
};
</script>
