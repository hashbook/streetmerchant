import {Store} from './store';

export const geizhals: Store = {
  currency: '€',
  labels: {
    inStock: {
      container: 'div[class="offer__delivery-time"]',
      text: ['lagernd', 'Auf Lager'],
    },
    maxPrice: {
      container: '#offer__price-0 > span',
      euroFormat: true,
    },
    outOfStock: {
      container: 'div[class="offer__delivery-time"]',
      text: ['auf Bestellung'],
    },
  },
  links: [
    {
      brand: 'zotac',
      model: 'amp white',
      series: '3060',
      url:
        'https://geizhals.at/zotac-geforce-rtx-3060-amp-white-edition-zt-a30600f-10p-a2477362.html?hloc=at&hloc=de&hloc=pl&hloc=uk&hloc=eu',
    },
	{
      brand: 'zotac',
      model: 'twin edge oc',
      series: '3060',
      url:
        'https://geizhals.at/zotac-geforce-rtx-3060-twin-edge-oc-zt-a30600h-10m-a2477020.html?hloc=at&hloc=de&hloc=pl&hloc=uk&hloc=eu',
    },
	{
      brand: 'msi',
      model: 'gaming x',
      series: '3060',
      url:
        'https://geizhals.at/msi-geforce-rtx-3060-gaming-x-12g-a2473949.html?hloc=at&hloc=de&hloc=pl&hloc=uk&hloc=eu',
    },
	{
      brand: 'inno3d',
      model: 'ichill x3 red',
      series: '3060',
      url:
        'https://geizhals.at/inno3d-geforce-rtx-3060-ichill-x3-red-c30603-12d6x-1671va39a-a2476867.html?hloc=at&hloc=de&hloc=eu&hloc=pl&hloc=uk',
    },
	{
      brand: 'gigabyte',
      model: 'gaming oc',
      series: '3060',
      url:
        'https://geizhals.at/gigabyte-geforce-rtx-3060-gaming-oc-12g-gv-n3060gaming-oc-12gd-a2476446.html?hloc=at&hloc=de&hloc=eu&hloc=pl&hloc=uk',
    },
	{
      brand: 'kfa2',
      model: 'ex oc',
      series: '3060',
      url:
        'https://geizhals.at/kfa-geforce-rtx-3060-ex-1-click-oc-36nol7md2nek-a2493159.html?hloc=at&hloc=de&hloc=eu&hloc=pl&hloc=uk',
    },
	{
      brand: 'pny',
      model: 'xlr8 epic x',
      series: '3060',
      url:
        'https://geizhals.at/pny-geforce-rtx-3060-xlr8-gaming-revel-epic-x-rgb-single-fan-vcg306012sfxppb-a2478498.html?hloc=at&hloc=de&hloc=eu&hloc=pl&hloc=uk',
    },
	{
      brand: 'msi',
      model: 'ventus 3x oc',
      series: '3060',
      url:
        'https://geizhals.at/msi-geforce-rtx-3060-ventus-3x-12g-oc-a2473951.html?hloc=at&hloc=de&hloc=eu&hloc=pl&hloc=uk',
    },
	{
      brand: 'asus',
      model: 'strix oc',
      series: '3060',
      url:
        'https://geizhals.at/asus-rog-strix-geforce-rtx-3060-oc-a2469614.html?hloc=at&hloc=de&hloc=eu&hloc=pl&hloc=uk',
    },
	{
      brand: 'evga',
      model: 'xc gaming',
      series: '3060',
      url:
        'https://geizhals.at/evga-geforce-rtx-3060-xc-gaming-12g-p5-3657-kr-a2482442.html?hloc=at&hloc=de&hloc=eu&hloc=pl&hloc=uk',
    },
	{
      brand: 'kfa2',
      model: 'gaming oc',
      series: '3060',
      url:
        'https://geizhals.at/kfa-geforce-rtx-3060-1-click-oc-36nol7md1vok-a2494670.html?hloc=at&hloc=de&hloc=eu&hloc=pl&hloc=uk',
    },
	{
      brand: 'asus',
      model: 'tuf oc',
      series: '3060',
      url:
        'https://geizhals.at/asus-tuf-gaming-geforce-rtx-3060-oc-90yv0gc0-m0na00-a2469616.html?hloc=at&hloc=de&hloc=eu&hloc=pl&hloc=uk',
    },
	{
      brand: 'msi',
      model: 'gaming x trio',
      series: '3060',
      url:
        'https://geizhals.at/msi-geforce-rtx-3060-gaming-x-trio-12g-a2473948.html?hloc=at&hloc=de&hloc=eu&hloc=pl&hloc=uk',
    },
	{
      brand: 'gigabyte',
      model: 'aorus elite',
      series: '3060',
      url:
        'https://geizhals.at/gigabyte-aorus-geforce-rtx-3060-elite-12g-gv-n3060aorus-e-12gd-a2482127.html?hloc=at&hloc=de&hloc=eu&hloc=pl&hloc=uk',
    },
	{
      brand: 'inno3d',
      model: 'twin x2',
      series: '3060',
      url:
        'https://geizhals.at/gigabyte-aorus-geforce-rtx-3060-elite-12g-gv-n3060aorus-e-12gd-a2482127.html?hloc=at&hloc=de&hloc=eu&hloc=pl&hloc=uk',
    },
    // #endregion
  ],
  name: 'geizhals',
};
