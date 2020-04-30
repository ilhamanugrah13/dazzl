export function defaultMoneyFormat (num, cur = 'IDR', hidePrefix) {
  const currencies = [{
    code: 'IDR',
    prefix: 'Rp ',
    separator: '.'
  },
  {
    code: 'USD',
    prefix: '$ ',
    separator: ','
  },
  {
    code: 'IDR-comma',
    prefix: 'Rp',
    separator: ','
  }]
  const selectedCurrency = currencies.find(e => e.code.toLowerCase() === cur.toLowerCase())
  if (!selectedCurrency || num.toString().length === 0) {
    return num
  }

  return (!hidePrefix ? selectedCurrency.prefix : '') +
  (num
    .toString()
    .replace(/[^0-9]+/g, '')
    .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, `$1${selectedCurrency.separator}`))
}
