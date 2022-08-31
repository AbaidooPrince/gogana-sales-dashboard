<template>
  <div>
    <RadialProgressBar
      :start-color="color"
      :stop-color="color"
      inner-stroke-color="#f4f4f4"
      :total-steps="100"
      :completed-steps="value"
      :inner-stroke-width="5"
      :stroke-width="5"
      :diameter="90"
    >
      <span class="text-xl font-bold">{{ value ? value : "0" }}%</span>
    </RadialProgressBar>
  </div>
</template>
<script>
import RadialProgressBar from "vue3-radial-progress";
export default {
  components: { RadialProgressBar },
  props: ["value", "color"],
};
</script>
<style scoped>
.stroke {
  background-color: rgb(255, 255, 100);
}
</style>
