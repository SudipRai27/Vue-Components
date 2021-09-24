<template>
  <div>
    <Pricing />
    <div class="mt-4 text-center w-100">
      <router-link to="/">Go to main components page</router-link>
    </div>
  </div>
</template>
<script>
import Pricing from "@/components/Pricing/Pricing";
export default {
  name: "PricingComponentView",
  components: {
    Pricing,
  },
};
</script>