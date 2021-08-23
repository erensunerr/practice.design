export const parameters = {
  actions: { argTypesRegex: "^(on|handle)[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}