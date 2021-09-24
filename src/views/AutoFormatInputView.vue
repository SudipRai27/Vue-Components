<template>
  <div class="m-4">
    <AutoFormatInput template="(XXX) XXX-XXXX" />
    <AutoFormatInput template="XXX.XXX" />
    <AutoFormatInput template="C-XXX" />
    <br />
    <router-link :to="{ name: 'Home' }">Go to main components page</router-link>
  </div>
</template>
<script>
import AutoFormatInput from "@/components/AutoFormatInput/AutoFormatInput";
export default {
  name: "AutoFormatInputView",
  components: {
    AutoFormatInput,
  },
};
</script>