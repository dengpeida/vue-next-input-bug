declare module '@vue/runtime-core' {
    import { Store } from 'vuex';
    export interface ComponentCustomProperties { $store: Store<any>; }
}