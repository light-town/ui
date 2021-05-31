import { AbstractTemplate } from "../../tools/story";
export declare const Default: AbstractTemplate;
declare const _default: {
    component: import("vue/types/vue").ExtendedVue<import("vue").default, unknown, unknown, {
        firstNameSymbol: string;
    }, {
        src: string;
        alt: string;
        name: string;
        size: number;
    }>;
    title: string;
    argTypes: {
        size: {
            control: {
                type: string;
                options: number[];
            };
        };
    };
};
export default _default;
