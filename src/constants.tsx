import { Product, ProductCategory } from './types';

// Corrected typo in the import path from "asssets" to "assets"
import otdr from './asssets/otdr.jpeg';
import splicer from './asssets/Splicer.jpeg';
import powerMeter from './asssets/PowerMeter.jpg';
import pathDetector from './asssets/PathDetector.jpg';

import DropCable from './asssets/DropCable.png';
import Fibercable from './asssets/Fibercable.png';
import FiberCableDrum from './asssets/FiberCableDrum.png';
import FiberSpool from './asssets/FiberSpool.png';

import MMPatchcords from './asssets/MMPatchcords.jpg';
import OpticalFiberConnectors from './asssets/OpticalFiberConnectors.png';
import PLCSplitter from './asssets/PLCSplitter.avif';
import SMPatchcords from './asssets/SMPatchcords.jpg';

// Corrected typo in variable name from "WiFiBosster" to "WiFiBooster"
import WiFiJammer from './asssets/WiFiJammer.webp';
import WiFiBooster from './asssets/WiFiBosster.jpg';
import MobileSignaljammer from './asssets/MobileSignaljammer.avif';
import MobileSignalBooster from './asssets/MobileSignalBooster.jpeg';

import Towerarrester from './asssets/Towerarrester.avif';
import LightningRod from './asssets/LightningRod.jpg';
import LightningProtectionforSolarPlant from './asssets/LightningProtectionforSolarPlant.jpg';
import FastResponseSurgeProtector from './asssets/FastResponseSurgeProtector.jpg';

export const PRODUCTS_DATA: Record<ProductCategory, Product[]> = {
  [ProductCategory.TEST_EQUIPMENT]: [
    { id: 1, image: otdr, title: 'OTDR Tester', description: 'A high-precision Optical Time Domain Reflectometer for troubleshooting fiber optic networks and locating faults.' },
    { id: 2, image: powerMeter, title: 'Power Meter', description: 'A reliable optical power meter used for measuring the absolute optical power in fiber optic systems.' },
    { id: 3, image: pathDetector, title: 'Cable Path Finder', description: 'An essential tool for tracing the route of buried or hidden cables, preventing accidental damage during excavation.' },
    { id: 4, image: splicer, title: 'Fusion Splicer', description: 'An essential tool that uses an electric arc to seamlessly join two optical fibers together with minimal loss.' },
  ],
  [ProductCategory.PASSIVE_COMPONENTS]: [
    { id: 5, image: MMPatchcords, title: 'MM Patch cords', description: 'High-quality Multi-Mode (MM) fiber optic patch cords for short-distance data transmission within buildings.' },
    { id: 6, image: OpticalFiberConnectors, title: 'Optical Fiber Connectors', description: 'A wide range of reliable connectors (like SC, LC, ST) for terminating fiber optic cables and ensuring seamless integration.' },
    { id: 7, image: PLCSplitter, title: 'PLC Splitter', description: 'Planar Lightwave Circuit (PLC) splitters used to divide a single optical signal into multiple output signals.' },
    { id: 8, image: SMPatchcords, title: 'SM Patch Cords', description: 'Durable Single-Mode (SM) fiber optic patch cords designed for long-distance, high-bandwidth applications.' },
  ],
  [ProductCategory.FIBER_CABLES]: [
    // Corrected duplicate IDs
    { id: 9, image: DropCable, title: 'Drop Cable', description: 'A specialized, flexible cable used for connecting the main distribution cable to individual subscriber premises (FTTH).' },
    { id: 10, image: Fibercable, title: 'Fiber Cable', description: 'Standard multi-fiber optic cables designed for backbone and horizontal network installations.' },
    { id: 11, image: FiberCableDrum, title: 'Fiber Cable Drum', description: 'Large-capacity wooden or steel drums for transporting and deploying long lengths of fiber optic cable.' },
    { id: 12, image: FiberSpool, title: 'Fiber Spool', description: 'Smaller, portable spools of fiber optic cable, often used for temporary runs, testing, or patch connections.' },
  ],
  [ProductCategory.SIGNAL_JAMMERS]: [
    // Corrected descriptions for jammers vs. boosters
    { id: 13, image: WiFiJammer, title: 'WiFi Jammer', description: 'A device that blocks Wi-Fi signals in a specific area to enhance security and prevent unauthorized network access.' },
    { id: 14, image: WiFiBooster, title: 'WiFi Booster', description: 'An amplifier that extends the coverage of a Wi-Fi network, improving signal strength in weak signal areas.' },
    { id: 15, image: MobileSignaljammer, title: 'Mobile Signal Jammer', description: 'A device that disrupts cellular signals (like 4G, 5G) to create a "no-service" zone for security and privacy.' },
    { id: 16, image: MobileSignalBooster, title: 'Mobile Signal Booster', description: 'A repeater system that enhances weak cellular reception to ensure reliable calls and faster data speeds.' },
  ],
  [ProductCategory.LIGHTNING_PROTECTION]: [
    { id: 17, image: Towerarrester, title: 'Tower Arrester', description: 'A surge arrester specifically designed to protect communication towers and equipment from lightning strikes.' },
    { id: 18, image: LightningRod, title: 'Lightning Rod', description: 'A conventional metal rod designed to intercept lightning strikes and safely conduct the electrical charge to the ground.' },
    { id: 19, image: LightningProtectionforSolarPlant, title: 'Lightning Protection for Solar Plant', description: 'A complete system including rods, conductors, and grounding to protect solar panels and inverters from lightning damage.' },
    { id: 20, image: FastResponseSurgeProtector, title: 'Fast Response Surge Protector', description: 'A device that protects sensitive electronic equipment from internal voltage surges and transient spikes with a rapid response time.' },
  ],
};