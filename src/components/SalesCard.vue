<template>
  <div class="card p-4">
    <div class="flex justify-between align-middle">
      <div>
        <h2 class="font-medium text-gray-800">{{ title ? title : "title" }}</h2>
        <div class="text-3xl font-bold text-gray-800">
          ${{ value === 99 ? `${value}+` : value < 99 ? value : "0" }}K
        </div>
        <small v-if="sales">We have sold {{ sales }} item(s)</small>
        <small v-else>Available to payout</small>
      </div>
      <div>
        <circular-progress
          :color="color"
          :value="value === 99 ? 100 : value"
        ></circular-progress>
      </div>
    </div>
  </div>
</template>
<script>
import CircularProgress from "../atoms/CircularProgress.vue";
export default {
  name: "SalesCard",
  props: ["title", "value", "color", "sales"],
  components: { CircularProgress },
};
</script>
