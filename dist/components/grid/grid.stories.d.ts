import UiGrid from "./grid.vue";
import { AbstractTemplate } from "../../tools/story";
export declare const Default: AbstractTemplate;
declare const _default: {
    component: import("vue").VueConstructor<UiGrid>;
    title: string;
    argTypes: {
        justify: {
            control: {
                type: string;
                options: string[];
            };
        };
        alignItems: {
            control: {
                type: string;
                options: string[];
            };
        };
        wrap: {
            control: {
                type: string;
                options: string[];
            };
        };
        direction: {
            control: {
                type: string;
                options: string[];
            };
        };
    };
};
export default _default;
