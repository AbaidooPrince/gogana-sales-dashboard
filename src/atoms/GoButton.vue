<template>
  <!-- <div> -->
  <button
    type="button"
    :class="`${block ? 'w-full' : ''} ${color} ${
      dark ? 'text-white' : 'text-black'
    }`"
    class="focus:ring-2 rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none"
  >
    Default
  </button>
  <!-- </div> -->
</template>
<script>
export default {
  props: {
    dark: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
      default: "primary",
    },
    width: {
      type: String,
      default: "100",
    },
    block: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
<style scoped></style>
