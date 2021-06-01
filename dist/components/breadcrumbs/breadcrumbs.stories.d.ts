import { AbstractTemplate } from "../../tools/story";
export declare const Default: AbstractTemplate;
declare const _default: {
    component: import("vue/types/vue").ExtendedVue<import("vue").default, unknown, {
        handleItemClick(e: MouseEvent, item: any, click: any): void;
    }, {
        visibleItems: any[];
        hiddenItems: any[];
        short: boolean;
        lastItem: any;
    }, {
        items: unknown[];
        uniqueKey: string;
        labelKey: string;
    }>;
    title: string;
};
export default _default;