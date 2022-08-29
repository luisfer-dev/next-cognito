import { SnackbarProvider } from 'notistack'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

import { Auth } from 'aws-amplify'
import awsConfig from './aws-exports.js'

Auth.configure(awsConfig)

import 'styles/globals.css'

const darkTheme = createTheme({
  palette: {
    mode: 'dark'
  }
})

const App = ({ Component, pageProps }) => {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <SnackbarProvider maxSnack={3}>
          <CssBaseline />
          <Component {...pageProps} />
        </SnackbarProvider>
      </ThemeProvider>
    </>
  )
}

export default App
