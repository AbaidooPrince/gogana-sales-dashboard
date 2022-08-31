import { defineStore } from "pinia";

export const useStore = defineStore({
  id: "data",
  state: () => ({
    counter: 0,
    salesSummary: {
      totalSales: 82030.3,
      totalRevenue: 910923.93,
      totalEscrow: 9023.92,
    },
  }),
  getters: {
    doubleCount: (state) => state.counter * 2,
  },
  actions: {
    increment() {
      this.counter++;
    },
  },
});
