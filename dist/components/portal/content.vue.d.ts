import Vue from "vue";
interface Data {
    localX: string;
    localY: string;
    show: boolean;
}
interface Methods {
    updatePos: () => void;
}
interface Computed {
    root: any;
}
interface Props {
    anchor: any;
    position: string;
    contentClass: string;
    x: number;
    y: number;
}
declare const _default: import("vue/types/vue").ExtendedVue<Vue, Data, Methods, Computed, Props>;
export default _default;
