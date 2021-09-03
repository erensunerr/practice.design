import {defaultTheme, GlobalStyle} from '../src/components/styles';
import {ThemeProvider} from 'styled-components';
import {UserContextProvider} from "../src/components/UserContext";

export const parameters = {
  actions: { argTypesRegex: "^(on|handle)[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => (
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <Story />
      </ThemeProvider>
  )
]