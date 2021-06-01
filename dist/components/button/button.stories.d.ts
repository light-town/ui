import { AbstractTemplate } from "../../tools/story";
export declare const Default: AbstractTemplate;
declare const _default: {
    component: import("vue/types/vue").ExtendedVue<import("vue").default, unknown, unknown, unknown, {
        title: string;
        type: string;
        component: string;
        variant: string;
        loading: boolean;
    }>;
    title: string;
    argTypes: {
        type: {
            control: {
                type: string;
                options: string[];
            };
        };
        component: {
            control: {
                type: string;
                options: string[];
            };
        };
        variant: {
            control: {
                type: string;
                options: string[];
            };
        };
    };
};
export default _default;
