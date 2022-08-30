<template>
  <div>
    <RadialProgressBar
      inner-stroke-color="#f4f4f4"
      :total-steps="100"
      :completed-steps="40"
      :inner-stroke-width="5"
      :stroke-width="5"
      :diameter="80"
    ></RadialProgressBar>
  </div>
</template>
<script>
import RadialProgressBar from "vue3-radial-progress";
export default {
  components: { RadialProgressBar },
};
</script>
<style scoped>
.stroke {
  background-color: rgb(255, 255, 100);
}
</style>
