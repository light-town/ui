import { VueConstructor } from "vue";
export declare type Story = (args: any[], options: {
    argTypes: any[];
}) => {
    components: Record<string, VueConstructor>;
    props: string[];
    template: string;
};
export declare type AbstractTemplate = {
    args?: Record<string, any>;
    [key: string]: any;
};
export declare const Default: AbstractTemplate;
declare const _default: {
    component: import("vue/types/vue").ExtendedVue<import("vue").default, unknown, unknown, unknown, {
        message: string;
        variant: string;
    }>;
    title: string;
    argTypes: {
        variant: {
            control: {
                type: string;
                options: string[];
            };
        };
    };
};
export default _default;
