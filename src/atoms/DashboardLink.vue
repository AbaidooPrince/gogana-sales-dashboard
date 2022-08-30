<template>
  <router-link class="dashboard-menu" active-class="active-link" :to="`{name: ${routeName}}`">
    <span>
        <slot name="icon"></slot>
    </span>
    <div>Link anme</div>
  </router-link>
</template>
<script>
export default {
  props: ["title", "routeName"],
};
</script>
<style scoped>
.active-link {
}
</style>
