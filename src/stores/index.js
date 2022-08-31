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
    orders: [
      {
        item: {
          name: "Iphone 13 Pro",
          image: "shorturl.at/EGK19",
        },
        orderId: "#11232",
        date: "2019-04-12",
        customer: {
          name: "Anastatia Hasuna",
        },
        status: "Pending",
        amount: 300.12,
      },
    ],
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
