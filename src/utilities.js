export const currencyFormatter = new Intl.NumberFormat(undefined, {
  currency: 'eur',
  style: 'currency',
  minimumFractionDigits: 0 // set default decimal value to no value.
}) // Intl = Internationalization (undefined = refers to client locale)