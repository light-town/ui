import Vue from "vue";
interface Data {
    context: {
        root: any;
        items: any[];
        activeItemId: string | null;
        isAvailableShowing: boolean;
    };
}
interface Props {
    rootMenuRef: object;
    focusable: boolean;
}
declare const _default: import("vue/types/vue").ExtendedVue<Vue, Data, any, any, Props>;
export default _default;
