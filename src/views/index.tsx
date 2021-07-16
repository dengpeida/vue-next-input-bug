import { withModifiers, defineComponent, ref } from "vue";

 export default defineComponent({
  setup() {
    let count = ref(0);
    let text = ref('')

    setInterval(()=>{
      count.value += 1
    },1000)



    return () => (
      <div>
        <div>{count.value}</div>
        <input v-model={[text.value,'value']} type="text" />
      </div>
    );
  },
});