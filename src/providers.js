import React from "react"
import { ThemeProvider } from "emotion-theming"
import { theme } from "src/theme"

function Providers({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default Providers
