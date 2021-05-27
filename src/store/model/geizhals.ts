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
      model: 'amp holo',
      series: '3070',
      url:
        'https://geizhals.at/zotac-gaming-geforce-rtx-3070-amp-holo-zt-a30700f-10p-a2452151.html?hloc=at&hloc=de&hloc=eu&hloc=pl&hloc=uk',
    },
	{
      brand: 'asus',
      model: 'strix oc',
      series: '3070',
      url:
        'https://geizhals.at/asus-rog-strix-geforce-rtx-3070-oc-a2406734.html?hloc=at&hloc=de&hloc=eu&hloc=pl&hloc=uk',
    },
	{
      brand: 'asus',
      model: 'tuf oc',
      series: '3070',
      url:
        'https://geizhals.at/asus-tuf-gaming-geforce-rtx-3070-oc-a2406749.html?hloc=at&hloc=de&hloc=eu&hloc=pl&hloc=uk',
    },
	{
      brand: 'zotac',
      model: 'twin edge oc',
      series: '3070',
      url:
        'https://geizhals.at/zotac-gaming-geforce-rtx-3070-twin-edge-oc-white-edition-zt-a30700j-10p-a2450371.html?hloc=at&hloc=de&hloc=eu&hloc=pl&hloc=uk',
    },
	{
      brand: 'gigabyte',
      model: 'master',
      series: '3070',
      url:
        'https://geizhals.at/gigabyte-aorus-geforce-rtx-3070-master-8g-gv-n3070aorus-m-8gd-a2406973.html?hloc=at&hloc=de&hloc=eu&hloc=pl&hloc=uk',
    },
	{
      brand: 'msi',
      model: 'suprim',
      series: '3070',
      url:
        'https://geizhals.at/msi-geforce-rtx-3070-suprim-8g-a2430309.html?hloc=at&hloc=de&hloc=eu&hloc=pl&hloc=uk',
    },
	{
      brand: 'evga',
      model: 'ftw3 ultra',
      series: '3070',
      url:
        'https://geizhals.at/evga-geforce-rtx-3070-ftw3-ultra-gaming-08g-p5-3767-kr-a2412839.html?hloc=at&hloc=de&hloc=eu&hloc=pl&hloc=uk',
    },
	{
      brand: 'evga',
      model: 'xc3 ultra',
      series: '3070',
      url:
        'https://geizhals.at/evga-geforce-rtx-3070-xc3-ultra-black-gaming-08g-p5-3755-kr-a2412824.html?hloc=at&hloc=de&hloc=eu&hloc=pl&hloc=uk',
    },
	{
      brand: 'kfa2',
      model: 'ex oc',
      series: '3070',
      url:
        'https://geizhals.at/kfa-geforce-rtx-3070-ex-1-click-oc-37nsl6md1tbk-a2413075.html?hloc=at&hloc=de&hloc=eu&hloc=pl&hloc=uk',
    },
	{
      brand: 'inno3d',
      model: 'ichill x4',
      series: '3070',
      url:
        'https://geizhals.at/inno3d-geforce-rtx-3070-ichill-x4-c30704-08d6x-1710va35-a2408396.html?hloc=at&hloc=de&hloc=eu&hloc=pl&hloc=uk',
    },
	{
      brand: 'inno3d',
      model: 'twin x2 oc',
      series: '3070',
      url:
        'https://geizhals.at/inno3d-geforce-rtx-3070-twin-x2-oc-n30702-08d6x-1710va32l-a2429903.html?hloc=at&hloc=de&hloc=eu&hloc=pl&hloc=uk',
    },
	{
      brand: 'msi',
      model: 'x trio',
      series: '3070',
      url:
        'https://geizhals.at/msi-geforce-rtx-3070-gaming-x-trio-a2364398.html?hloc=at&hloc=de&hloc=eu&hloc=pl&hloc=uk',
    },
	{
      brand: 'zotac',
      model: 'twin edge oc',
      series: '3070',
      url:
        'https://geizhals.at/zotac-gaming-geforce-rtx-3070-twin-edge-oc-zt-a30700h-10p-a2406926.html?hloc=at&hloc=de&hloc=eu&hloc=pl&hloc=uk',
    },
	{
      brand: 'gigabyte',
      model: 'oc',
      series: '3070',
      url:
        'https://geizhals.at/gigabyte-geforce-rtx-3070-gaming-oc-8g-gv-n3070gaming-oc-8gd-a2406936.html?hloc=at&hloc=de&hloc=eu&hloc=pl&hloc=uk',
    },
	{
      brand: 'asus',
      model: 'dual fan',
      series: '3070',
      url:
        'https://geizhals.at/asus-dual-geforce-rtx-3070-oc-a2366124.html?hloc=at&hloc=de&hloc=eu&hloc=pl&hloc=uk',
    },
	{
      brand: 'gigabyte',
      model: 'vision oc',
      series: '3070',
      url:
        'https://geizhals.at/gigabyte-geforce-rtx-3070-vision-oc-8g-gv-n3070vision-oc-8gd-a2406952.html?hloc=at&hloc=de&hloc=eu&hloc=pl&hloc=uk',
    },
	{
      brand: 'msi',
      model: 'suprim x',
      series: '3070',
      url:
        'https://geizhals.at/msi-geforce-rtx-3070-suprim-x-8g-a2430243.html?hloc=at&hloc=de&hloc=eu&hloc=pl&hloc=uk',
    },
	{
      brand: 'palit',
      model: 'gaming pro',
      series: '3070',
      url:
        'https://geizhals.at/palit-geforce-rtx-3070-gamingpro-oc-ne63070s19p2-1041a-a2381057.html?hloc=at&hloc=de&hloc=eu&hloc=pl&hloc=uk',
    },
	{
      brand: 'asus',
      model: 'strix oc white',
      series: '3070',
      url:
        'https://geizhals.at/asus-rog-strix-geforce-rtx-3070-oc-white-90yv0fr5-m0na00-a2446497.html?hloc=at&hloc=de&hloc=eu&hloc=pl&hloc=uk',
    },
	{
      brand: 'msi',
      model: 'ventus 2x oc',
      series: '3070',
      url:
        'https://geizhals.at/msi-geforce-rtx-3070-ventus-2x-oc-a2364400.html?hloc=at&hloc=de&hloc=eu&hloc=pl&hloc=uk',
    },
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
