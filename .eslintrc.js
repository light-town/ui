module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: ["plugin:vue/essential", "@vue/prettier"],
  rules: {
    "vue/experimental-script-setup-vars": "off"
  }
};
