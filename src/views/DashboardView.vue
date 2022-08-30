<template>
  <div>
    <go-button width="full" color="secondary"></go-button>
    <circular-progress></circular-progress>
  </div>
</template>
<script>
import CircularProgress from '../atoms/CircularProgress.vue';
import GoButton from "../atoms/GoButton.vue";
export default {
  name: "DashboardView",
  components: { GoButton, CircularProgress },
};
</script>
