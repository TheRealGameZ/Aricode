<template>
  <under-construction></under-construction>
</template>

<script>

import UnderConstruction from "@/components/UnderConstruction.vue";

export default {
  name: 'HelloWorld',
  components: {UnderConstruction},
  props: {
    msg: String
  }
}
</script>