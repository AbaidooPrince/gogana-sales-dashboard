<template>
  <div class="flex gap-4">
    <div class="grid gap-4">
      <div v-for="scale in yAxis" :key="scale">{{ scale }}</div>
    </div>
    <div class="grid grid-cols-7 gap-8 w-full">
      <div>
        <bar-chart-bar key="9" :level="convert(80)"></bar-chart-bar>
        <div>Sun</div>
      </div>
      <div>
        <bar-chart-bar key="6" :level="convert(10)"></bar-chart-bar>
        <div>Mon</div>
      </div>
      <div>
        <bar-chart-bar key="3" :level="convert(70)"></bar-chart-bar>
        <div>Tue</div>
      </div>
    </div>
  </div>
</template>
<script>
import BarChartBar from "../atoms/BarChartBar.vue";
import { convertToBar } from "../helpers/converter";
export default {
  name: "GoBarChart",
  components: { BarChartBar },
  data() {
    return {
      yAxis: ["100K", "80K", "60K", "50K", "20K", "0"],
    };
  },
  methods: {
    convert(num) {
      return convertToBar(num);
    },
  },
};
</script>
