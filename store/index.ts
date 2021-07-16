import { createStore, Store } from 'vuex';
const store = createStore(
  {
    state() {
      return { count: 0, };
    },
    mutations: {
      increment(state: any) { state.count++; },
    },
    actions: {
      increment(context) { context.commit('increment'); },
    },
  }
)
export default store;