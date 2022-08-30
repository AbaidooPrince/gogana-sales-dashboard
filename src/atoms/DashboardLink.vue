<template>
  <router-link exact active-class="active-link" :to="routeName">
    <div
      :class="isActive === routeName ? 'active-dashboard-menu' : ''"
      class="dashboard-menu mb-4 flex"
    >
      <span class="mr-3">
        <slot name="icon">Icon</slot>
      </span>
      <div>{{ title ? title : "Link Name" }}</div>
    </div>
  </router-link>
</template>
<script>
export default {
  props: ["title", "routeName"],
  computed: {
    isActive: {
      get() {
        return this.$route.name;
      },
    },
  },
};
</script>
<style scoped>
.active-link {
  background-color: blue;
}
</style>
