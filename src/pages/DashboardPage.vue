<template>
  <div class="grid grid-rows-5 grid-flow-col gap-3 lg:p-8">
    <div class="">
      <div class="grid lg:grid-cols-3 gap-6">
        <sales-card title="Total Sales" color="success"></sales-card>
        <div>04</div>
        <div>09</div>
      </div>
    </div>
    <!-- ... -->
    <div class="bg-green-400">09</div>
  </div>
</template>

<script>
import SalesCard from "../components/SalesCard.vue";
export default {
  components: { SalesCard },
};
</script>
