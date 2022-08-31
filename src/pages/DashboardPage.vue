<template>
  <div class="grid grid-rows-5 grid-flow-col gap-3 lg:p-8">
    <div class="">
      <div class="grid lg:grid-cols-3 gap-6">
        <sales-card
          title="Total Sales"
          color="blue"
          :value="totalSales"
          :sales="130"
        ></sales-card>
        <div>
          <sales-card
            title="Total Revenue"
            color="green"
            :value="totalRevenue"
          ></sales-card>
        </div>
        <div>
        <sales-card
          title="Total Escrow"
          color="orange"
          :value="totalEscrow"
        ></sales-card></div>
      </div>
    </div>
    <!-- ... -->
    <div class="bg-green-400">09</div>
  </div>
</template>

<script>
import { convertToK } from "../helpers/converter";
import { useStore } from "../stores/index";
import SalesCard from "../components/SalesCard.vue";
export default {
  setup() {
    const salesSummary = useStore().salesSummary;

    return {
      salesSummary,
    };
  },
  components: { SalesCard },
  computed: {
    totalSales() {
      return convertToK(this.salesSummary.totalSales);
    },
    totalRevenue() {
      return convertToK(this.salesSummary.totalRevenue);
    },
    totalEscrow() {
      return convertToK(this.salesSummary.totalEscrow);
    },
  },
};
</script>
