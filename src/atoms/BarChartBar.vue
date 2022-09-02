<template>
  <div class="h-full py-2">
    <div class="h-full w-8 bg-gray-100 relative rounded-[4px]">
      <div
        :class="`w-8 ${level} absolute bottom-0 bg-primary rounded-[4px]`"
      ></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "BarChartBar",
  props: ["level"],
};
</script>
