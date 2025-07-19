
export interface Product {
  id: number;
  image: string;
  title: string;
  description: string;
}

export enum ProductCategory {
  TEST_EQUIPMENT = 'Test & Measuring Equipments',
  PASSIVE_COMPONENTS = 'Passive Component Products',
  FIBER_CABLES = 'Optical Fiber Cables',
  SIGNAL_JAMMERS = 'Signal Jammers & Boosters',
  LIGHTNING_PROTECTION = 'Lightning Protection Systems',
}
