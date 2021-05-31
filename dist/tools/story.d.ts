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
