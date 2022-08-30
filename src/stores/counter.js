import { defineStore } from "pinia";

export const useCounterStore = defineStore({
  id: "data",
  state: () => ({
    counter: 0,
    salesSummary: {
      totalSales: 12030.3,
      totalRevenue: 910923.93,
      totalEscrow: 9023.92,
    },
  }),
  getters: {
    totalSales: (state) => {
      if (state.salesSummary % 1000 > 100) {
        return 99;
      } else {
        return (state.salesSummary % 1000).toFixed(1);
      }
    },
    doubleCount: (state) => state.counter * 2,
  },
  actions: {
    increment() {
      this.counter++;
    },
  },
});
