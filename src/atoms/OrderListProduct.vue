<template>
  <div class="flex">
    <img :src="image ? image : defaultImage" />
    <div>
      {{ item ? item : "Item Name" }}
    </div>
  </div>
</template>
<script>
export default {
  name: "OrderListProduct",
  props: ["image", "item"],
  setup() {
    const defaultImage =
      "https://icon-library.com/images/product-icon-png/product-icon-png-19.jpg";

    return {
      defaultImage,
    };
  },
};
</script>
