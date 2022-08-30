<template>
  <div class="card p-4">
    <div class="flex justify-between align-middle">
      <div>
        <h2 class="font-medium text-gray-800">{{ title ? title : "title" }}</h2>
        <div class="text-3xl font-bold text-gray-800">
          ${{ value ? value : "0" }}K
        </div>
        <small>We have sold 123 items</small>
      </div>
      <div>
        <circular-progress :color="color" value="20"></circular-progress>
      </div>
    </div>
  </div>
</template>
<script>
import CircularProgress from "../atoms/CircularProgress.vue";
export default {
  name: "SalesCard",
  props: ["title", "value", 'color'],
  components: { CircularProgress },
};
</script>
