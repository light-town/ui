import { VueConstructor } from "vue";

export type Story = (
  args: any[],
  options: { argTypes: any[] }
) => {
  components: Record<string, VueConstructor>;
  props: string[];
  template: string;
};

export type AbstractTemplate = {
  args?: Record<string, any>;
  [key: string]: any;
};
