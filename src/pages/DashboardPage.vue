<template>
  <div class="grid gap-3 lg:p-8">
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
          ></sales-card>
        </div>
      </div>
    </div>
    <!-- ... -->
    <div></div>
    <div class="">
      <div class="card">
        <div class="flex justify-between align-middle p-4">
          <div>
            <div class="font-medium text-xl">Total Revenue</div>
            <div class="flex gap-2 align-baseline">
                <div class="font-medium text-3xl text-gray-800">
                    $50.4K
                </div>
                <div>
                    <small class="text-green-700 font-semibold">8% than last month </small>
                </div>
            </div>

          </div>
        
          <div class="flex align-middle gap-2">
            <small class="my-auto">Data updates every 3 hours</small>
            <GoButton color="secondary" text="View All Orders"></GoButton>
          </div>
        </div>
        <simple-table @row-click="editClass" :headers="headers" :items="orders">
          <template v-slot:item.item="{ item }">
            <!-- {{ item.url }} -->
            {{ item.name }}
          </template>
          <template #action slot="{ item }">
            <!-- <div class="flex justify-end gap-4">
            {{ item }}
            <PencilAltIcon class="w-5 h-5"></PencilAltIcon>
            <TrashIcon class="w-5 fill-red-600 h-5"></TrashIcon>
          </div> -->
          </template>
        </simple-table>
      </div>
    </div>
  </div>
</template>

<script>
import { convertToK } from "../helpers/converter";
import { useStore } from "../stores/index";
import SalesCard from "../components/SalesCard.vue";
import SimpleTable from "../atoms/SimpleTable.vue";
import GoButton from "../atoms/GoButton.vue";
export default {
  setup() {
    const salesSummary = useStore().salesSummary;
    const orders = useStore().orders;
    const headers = [
      { name: "Products", value: "item" },
      { name: "Order ID", value: "orderId" },
      { name: "Date", value: "date" },
      { name: "Customer Name", value: "customer" },
      { name: "Status", value: "status" },
      { name: "Amount", value: "amount" },
      { name: "Action", value: "action" },
    ];

    return {
      salesSummary,
      headers,
      orders,
    };
  },

  components: { SalesCard, SimpleTable, GoButton },
  computed: {
    // orders() {
    //   return this.orders;
    // },
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
