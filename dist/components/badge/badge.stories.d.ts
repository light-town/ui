import { AbstractTemplate } from "../../tools/story";
export declare const Default: AbstractTemplate;
declare const _default: {
    component: import("vue/types/vue").ExtendedVue<import("vue").default, unknown, unknown, unknown, {
        variant: string;
        color: string;
        title: string;
    }>;
    title: string;
    argTypes: {
        variant: {
            control: {
                type: string;
                options: string[];
            };
        };
        color: {
            control: {
                type: string;
                options: string[];
            };
        };
    };
};
export default _default;
