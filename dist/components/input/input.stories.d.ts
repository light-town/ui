import { AbstractTemplate } from "../../tools/story";
export declare const Default: AbstractTemplate;
declare const _default: {
    component: import("vue/types/vue").ExtendedVue<import("vue").default, unknown, {
        handleInput(e: InputEvent): void;
    }, unknown, {
        type: string;
        placeholder: string;
        value: string;
    }>;
    title: string;
    argTypes: {
        type: {
            control: {
                type: string;
                options: string[];
            };
        };
    };
};
export default _default;
