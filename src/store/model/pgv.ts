import {Store} from './store';

export const pgv: Store = {
  currency: '€',
  labels: {
    inStock: {
      container: '.Lagertext_gruen',
      text: ['lagernd'],
    },
    maxPrice: {
      container: 'div[id="preisschildpreis"]',
      euroFormat: true,
    },
    outOfStock: {
      container: '.pshipping',
      text: ['auf Bestellung'],
    },
  },
  links: [
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url:
        'https://www.pgv.at/shop/Zotac_Gaming_GeForce_RTX_3060_Twin_Edge_OC_12GB.pid.VGA59961.cid.1037.htm',
    },
    {
      brand: 'zotac',
      model: 'twin edge oc',
      series: '3060',
      url:
        'https://www.pgv.at/shop/Zotac_Gaming_GeForce_RTX_3060_Twin_Edge_OC_12GB.pid.VGA59961.cid.1037.htm',
    },
    // #endregion
  ],
  name: 'pgv',
};
