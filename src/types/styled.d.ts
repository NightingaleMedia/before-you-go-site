import '@emotion/react'

import {
  Theme as MaterialUITheme,
  ThemeOptions,
  TypographyVariantsOptions,
} from '@mui/material/styles'

declare module '@mui/material/styles' {
  interface TypographyVariants {
    special: React.CSSProperties
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    special?: React.CSSProperties
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    special: true
  }
}

// interface Type extends TypographyVariantsOptions {
//   special: {
//     [x: string]: any
//   }
// }
// interface MyTheme extends ThemeOptions {
//   typography: Type
// }

declare module '@emotion/react' {
  export interface Theme extends MaterialUiTheme {
    [x: string]: any
  }
}
