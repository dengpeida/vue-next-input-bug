<template>
  <a-pageheader> aaa </a-pageheader>
</template>

<script lang='ts'>
import { PageHeader } from "ant-design-vue";
import { reactive, toRefs, defineComponent } from "vue";

export default defineComponent({
  name: "Header",
  components: { "a-pageheader": PageHeader },
  setup() {
    const state = reactive({
      count: 0,
    });
    const a:string = ''

    return {
      ...toRefs(state),
    };
  },
});
</script>

<style lang="scss" scoped>
</style>