import {Store} from './store';

export const mimovrste: Store = {
  currency: '€',
  labels: {
    inStock: {
      container: 'h3[class="availability-box__status availability-box__status--available"]',
      text: ['Na zalogi', 'Pri dobavitelju', 'Na zalogi v trgovini', 'zadnji kos', 'Na zalogi v skladišču'],
    },
    maxPrice: {
	container: 'span[class="price__wrap__box__final"]',
      euroFormat: true,
    },
    outOfStock: {
      container: 'h3[class="availability-box__status availability-box__status--available"]',
      text: ['Trenutno ni na zalogi'],
    },
  },
  links: [
    {
      brand: 'pny',
      model: 'xlr8 epic x',
      series: '3060',
      url:
        'https://www.mimovrste.com/graficne-kartice-gaming/pny-geforce-rtx-3060-epic-x-rgb-dual-fan-xlr8-graficna-kartica-12-gb-gddr6-pcie-x16-3xdp-1xhdmi',
    },
	{
      brand: 'pny',
      model: 'single fan',
      series: '3060',
      url:
        'https://www.mimovrste.com/graficne-kartice-nvidia/pny-geforce-rtx-3060-epic-x-rgb-single-fan-xlr8-graficna-kartica-12-gb-gddr6-pcie-x16-3xdp-1xhdmi',
    },
	{
      brand: 'gigabyte',
      model: 'gaming oc',
      series: '3060',
      url:
        'https://www.mimovrste.com/graficne-kartice-nvidia/gigabyte-gaming-oc-geforce-rtx-3060-graficna-kartica-12-gb-gddr6',
    },
	{
      brand: 'gigabyte',
      model: 'vision oc',
      series: '3060',
      url:
        'https://www.mimovrste.com/graficne-kartice-nvidia/gigabyte-geforce-rtx-3060-vision-oc-12g-graficna-kartica-12-gb-gddr6',
    },
	{
      brand: 'palit',
      model: 'single fan',
      series: '3060',
      url:
        'https://www.mimovrste.com/graficne-kartice-nvidia/palit-stormx-geforce-rtx-3060-graficna-kartica-12-gb-gddr6',
    },
	{
      brand: 'evga',
      model: 'xc gaming',
      series: '3060',
      url:
        'https://www.mimovrste.com/graficne-kartice-nvidia/evga-geforce-rtx-3060-xc-gaming-graficna-kartica-12-gb-gddr6',
    },
	{
      brand: 'palit',
      model: 'dual oc',
      series: '3060',
      url:
        'https://www.mimovrste.com/graficne-kartice-nvidia/palit-geforce-rtx-3060-graficna-kartica-dual-oc-12-gb-gddr6',
    },
	{
      brand: 'inno3d',
      model: 'twin x2 oc',
      series: '3060',
      url:
        'https://www.mimovrste.com/graficne-kartice-nvidia/inno3d-geforce-rtx-3060-twin-x2-oc-graficna-kartica-12-gb-gddr6-n30602-12d6x-11902120',
    },
	{
      brand: 'inno3d',
      model: 'twin x2 oc',
      series: '3060',
      url:
        'https://www.mimovrste.com/graficne-kartice-nvidia/inno3d-geforce-rtx-3060-twin-x2-oc-graficna-kartica-12-gb-gddr6-n30602-12d6x-11902120',
    },
	{
      brand: 'asus',
      model: 'strix oc',
      series: '3060',
      url:
        'https://www.mimovrste.com/graficne-kartice-nvidia/asus-rog-strix-geforce-rtx-3060-oc-graficna-kartica-12-gb-gddr6-90yv0gc2-m0na00',
    },
	{
      brand: 'palit',
      model: 'dual',
      series: '3060',
      url:
        'https://www.mimovrste.com/graficne-kartice-nvidia/palit-geforce-rtx-3060-dual-graficna-kartica-12-gb-gddr6-ne63060019k9-190ad',
    },
  ],
  name: 'mimovrste',
};