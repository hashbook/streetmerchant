import {Store} from './store';

export const AmazonEs: Store = {
  backoffStatusCodes: [403, 429, 503],
  currency: '€',
  labels: {
    captcha: {
      container: 'body',
      text: ['introduzca los caracteres que ve a continuación'],
    },
    inStock: {
      container: '#desktop_buybox',
      text: ['añadir a la cesta'],
    },
    maxPrice: {
      container: '#priceblock_ourprice',
      euroFormat: true,
    },
    outOfStock: [
      {
        container: '#availability',
        text: ['No disponible'],
      },
    ],
  },
  links: [
    {
      brand: 'test:brand',
      cartUrl:
        'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B07PW9VBK5&Quantity.1=1',
      model: 'test:model',
      series: 'test:series',
      url: 'https://www.amazon.es/dp/B07PW9VBK5',
    },
	{
      brand: 'asus',
      cartUrl:
        'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B08L8LG4M3&Quantity.1=1',
      model: 'dual',
      series: '3070',
      url: 'https://www.amazon.es/dp/B08L8LG4M3',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B08L8HPKR6&Quantity.1=1',
      model: 'dual',
      series: '3070',
      url: 'https://www.amazon.es/dp/B08L8HPKR6',
    },
    {
      brand: 'evga',
      cartUrl:
        'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B08LW46GH2&Quantity.1=1',
      model: 'xc3 black',
      series: '3070',
      url: 'https://www.amazon.es/dp/B08LW46GH2',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B08L8JNTXQ&Quantity.1=1',
      model: 'strix',
      series: '3070',
      url: 'https://www.amazon.es/dp/B08L8JNTXQ',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B08L8KC1J7&Quantity.1=1',
      model: 'tuf',
      series: '3070',
      url: 'https://www.amazon.es/dp/B08L8KC1J7',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B08KY266MG&Quantity.1=1',
      model: 'gaming oc',
      series: '3070',
      url: 'https://www.amazon.es/dp/B08KY266MG',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B08KWN2LZG&Quantity.1=1',
      model: 'gaming',
      series: '3070',
      url: 'https://www.amazon.es/dp/B08KWN2LZG',
    },
    {
      brand: 'pny',
      cartUrl:
        'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B08HBJB7YD&Quantity.1=1',
      model: 'xlr8 revel',
      series: '3070',
      url: 'https://www.amazon.es/dp/B08HBJB7YD',
    },
    {
      brand: 'pny',
      cartUrl:
        'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B08HBF5L3K&Quantity.1=1',
      model: 'xlr8 uprising',
      series: '3070',
      url: 'https://www.amazon.es/dp/B08HBF5L3K',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B08KWPDXJZ&Quantity.1=1',
      model: 'ventus 2x oc',
      series: '3070',
      url: 'https://www.amazon.es/dp/B08KWPDXJZ',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B08KWLMZV4&Quantity.1=1',
      model: 'ventus 3x oc',
      series: '3070',
      url: 'https://www.amazon.es/dp/B08KWLMZV4',
    },
    {
      brand: 'zotac',
      cartUrl:
        'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B08LF1CWT2&Quantity.1=1',
      model: 'twin edge oc',
      series: '3070',
      url: 'https://www.amazon.es/dp/B08LF1CWT2',
    },
    {
      brand: 'zotac',
      cartUrl:
        'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B08LF32LJ6&Quantity.1=1',
      model: 'gaming',
      series: '3070',
      url: 'https://www.amazon.es/dp/B08LF32LJ6',
    },
    {
      brand: 'evga',
      cartUrl:
        'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B08L8L71SM&Quantity.1=1',
      model: 'xc3 ultra',
      series: '3070',
      url: 'https://www.amazon.es/dp/B08L8L71SM',
    },
    {
      brand: 'evga',
      cartUrl:
        'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B08WM28PVH&Quantity.1=1',
      model: 'xc gaming',
      series: '3060',
      url: 'https://www.amazon.es/dp/B08WM28PVH',
    },
    {
      brand: 'evga',
      cartUrl:
        'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B08L8L9TCZ&Quantity.1=1',
      model: 'ftw3 ultra',
      series: '3070',
      url: 'https://www.amazon.es/dp/B08L8L9TCZ',
    },
    {
      brand: 'evga',
      cartUrl:
        'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B08LW46GH2&Quantity.1=1',
      model: 'xc3 black',
      series: '3070',
      url: 'https://www.amazon.es/dp/B08LW46GH2',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B08KY266MG&Quantity.1=1',
      model: 'gaming oc',
      series: '3070',
      url: 'https://www.amazon.es/dp/B08KY266MG',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B08M13DXSZ&Quantity.1=1',
      model: 'vision oc',
      series: '3070',
      url: 'https://www.amazon.es/dp/B08M13DXSZ',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B08M4YFNX2&Quantity.1=1',
      model: 'gaming oc',
      series: '3070',
      url: 'https://www.amazon.es/dp/B08M4YFNX2',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B08KXZV626&Quantity.1=1',
      model: 'eagle',
      series: '3070',
      url: 'https://www.amazon.es/dp/B08KXZV626',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B08KY322TH&Quantity.1=1',
      model: 'eagle oc',
      series: '3070',
      url: 'https://www.amazon.es/dp/B08KY322TH',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B08HM4V2DH&Quantity.1=1',
      model: 'gaming x trio',
      series: '3080',
      url: 'https://www.amazon.es/dp/B08HM4V2DH',
    },
    {
      brand: 'evga',
      cartUrl:
        'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B08HGYXP4C&Quantity.1=1',
      model: 'ftw3 ultra',
      series: '3080',
      url: 'https://www.amazon.es/dp/B08HGYXP4C',
    },
    {
      brand: 'evga',
      cartUrl:
        'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B08HJ9XFNM&Quantity.1=1',
      model: 'xc3 ultra',
      series: '3080',
      url: 'https://www.amazon.es/dp/B08HJ9XFNM',
    },
    {
      brand: 'evga',
      cartUrl:
        'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B08HGBYWQ6&Quantity.1=1',
      model: 'ftw3',
      series: '3080',
      url: 'https://www.amazon.es/dp/B08HGBYWQ6',
    },
    {
      brand: 'evga',
      cartUrl:
        'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B08HGLN78Q&Quantity.1=1',
      model: 'xc3',
      series: '3080',
      url: 'https://www.amazon.es/dp/B08HGLN78Q',
    },
    {
      brand: 'evga',
      cartUrl:
        'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B08HH1BMQQ&Quantity.1=1',
      model: 'xc3 black',
      series: '3080',
      url: 'https://www.amazon.es/dp/B08HH1BMQQ',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B08HLZXHZY&Quantity.1=1',
      model: 'gaming oc',
      series: '3080',
      url: 'https://www.amazon.es/dp/B08HLZXHZY',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B08HHZVZ3N&Quantity.1=1',
      model: 'eagle oc',
      series: '3080',
      url: 'https://www.amazon.es/dp/B08HHZVZ3N',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B08HN37VQK&Quantity.1=1',
      model: 'tuf',
      series: '3080',
      url: 'https://www.amazon.es/dp/B08HN37VQK',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B08HN4DSTC&Quantity.1=1',
      model: 'tuf oc',
      series: '3080',
      url: 'https://www.amazon.es/dp/B08HN4DSTC',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B08HN6KYS3&Quantity.1=1',
      model: 'strix oc',
      series: '3080',
      url: 'https://www.amazon.es/dp/B08HN6KYS3',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B08HM4M621&Quantity.1=1',
      model: 'ventus 3x oc',
      series: '3080',
      url: 'https://www.amazon.es/dp/B08HM4M621',
    },
    {
      brand: 'zotac',
      cartUrl:
        'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B08HR1NPPQ&Quantity.1=1',
      model: 'trinity',
      series: '3080',
      url: 'https://www.amazon.es/dp/B08HR1NPPQ',
    },
    {
      brand: 'amd',
      cartUrl:
        'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B08166SLDF&Quantity.1=1',
      model: '5600x',
      series: 'ryzen5600',
      url: 'https://www.amazon.es/dp/B08166SLDF',
    },
    {
      brand: 'amd',
      cartUrl:
        'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B0815XFSGK&Quantity.1=1',
      model: '5800x',
      series: 'ryzen5800',
      url: 'https://www.amazon.es/dp/B0815XFSGK',
    },
    {
      brand: 'amd',
      cartUrl:
        'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B08164VTWH&Quantity.1=1',
      model: '5900x',
      series: 'ryzen5900',
      url: 'https://www.amazon.es/dp/B08164VTWH',
    },
    {
      brand: 'amd',
      cartUrl:
        'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B0815Y8J9N&Quantity.1=1',
      model: '5950x',
      series: 'ryzen5950',
      url: 'https://www.amazon.es/dp/B0815Y8J9N',
    },
    {
      brand: 'sony',
      cartUrl:
        'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B08KKJ37F7&Quantity.1=1',
      model: 'ps5 console',
      series: 'sonyps5c',
      url: 'https://www.amazon.es/dp/B08KKJ37F7',
    },
    {
      brand: 'sony',
      cartUrl:
        'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B08KJF2D25&Quantity.1=1',
      model: 'ps5 digital',
      series: 'sonyps5de',
      url: 'https://www.amazon.es/dp/B08KJF2D25',
    },
    {
      brand: 'microsoft',
      cartUrl:
        'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B08H93ZRLL&Quantity.1=1',
      model: 'xbox series x',
      series: 'xboxsx',
      url: 'https://www.amazon.es/dp/B08H93ZRLL',
    },
    {
      brand: 'microsoft',
      cartUrl:
        'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B087VM5XC6&Quantity.1=1',
      model: 'xbox series s',
      series: 'xboxss',
      url: 'https://www.amazon.es/dp/B087VM5XC6',
    },
  ],
  name: 'amazon-es',
};
