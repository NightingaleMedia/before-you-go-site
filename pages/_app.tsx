const useragent = require('express-useragent')
import '../src/styles/global.css'
import 'react-perfect-scrollbar/dist/css/styles.css'
import type { AppContext, AppProps } from 'next/app'
import App from 'next/app'
import { theme } from '../src/theme'
import { ThemeProvider } from '@mui/system'
import { CssBaseline } from '@mui/material'
import Footer from '../src/components/Footer'
import { GetServerSidePropsContext } from 'next'
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <Component {...pageProps} />
        {/* <Footer /> */}
      </CssBaseline>
    </ThemeProvider>
  )
}

// export async function getServerSideProps(ctx: GetServerSidePropsContext) {
//   const source = ctx.req.headers['user-agent']
//   var ua = useragent.parse(source)

//   return {
//     props: {
//       isMobile: ua.isMobile,
//       ip: ctx.req.headers['X-Forwarded-For'],
//     },
//   }
// }

// MyApp.getInitialProps = async (appContext: AppContext) => {
//   const appProps = await App.getInitialProps(appContext)
//   const { req } = appContext.ctx
//   const source = req?.headers['user-agent']

//   var ua = source ? useragent.parse(source) : { isMobile: null }

//   appProps.pageProps = {
//     isMobile: ua.isMobile,
//     ip: req?.headers['x-forwarded-for'] || req?.socket.remoteAddress || null,
//   }
//   return { ...appProps }
// }

export default MyApp
