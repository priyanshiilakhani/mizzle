const product3 = 'assets/images/products/03.png'
const product4 = 'assets/images/products/04.png'
const product5 = 'assets/images/products/05.png'


export type TechnicalType = {
  title: string;
  description: string;
  icon: string;
  align?: 'start' | 'end';
  extraClass?: string;
}

export const technicalLeftData: TechnicalType[] = [
  {
    title: 'Audio Specification',
    description:
      '(Custom high-excursion, Noise Cancellation, Adaptive Transparency, Adaptive EQ)',
    icon: 'volume-2',
    align: 'end',
  },
  {
    title: 'Physical Units',
    description:
      'Height: 1.78", Width: 2.39", Depth: 0.85", Weight: 1.79 oz',
    icon: 'ruler',
    align: 'end',
    extraClass: 'me-10',
  },
  {
    title: 'Immersive Sound',
    description:
      'Personalized Spatial Audio with dynamic head tracking',
    icon: 'audio-lines',
    align: 'end',
  },
];

export const technicalRightData: TechnicalType[] = [
  {
    title: 'Included In Box',
    description:
      'AirPods Pro, Charging Case, USB-C Cable, Documentation',
    icon: 'package',
  },
  {
    title: 'Best Battery Life',
    description:
      'Up to 30h listening, Up to 24h talk time',
    icon: 'battery-charging',
    extraClass: 'lg:ms-10',
  },
  {
    title: 'Sensors',
    description:
      'Dual microphones, Skin-detect sensor, Touch control',
    icon: 'fingerprint-pattern',
  },
];

export type FeatureType = {
  text: string;
  alignStart?: boolean; // for lg:items-center items-start case
}
  
export const featureData: FeatureType[] = [
  {
    text: 'Press once to play, pause or answer a phone call',
    alignStart: true
  },
  {
    text: 'Press twice to skip forward'
  },
  {
    text: 'Press three times to skip back'
  },
  {
    text: 'Press and hold to switch between Active Noise Cancellation.',
    alignStart: true
  },
  {
    text: 'Swipe up or down to adjust volume'
  }
];

export type ProductType = {
  image: string;
  name: string;
  price: number;
  oldPrice?: number;
}

export const productData: ProductType[] = [
  {
    image: product3,
    name: 'Airpods Drop 2',
    price: 225,
    oldPrice: 305
  },
  {
    image: product4,
    name: 'Airpods pro Drop',
    price: 350
  },
  {
    image: product5,
    name: 'Airpods pro max',
    price: 315,
    oldPrice: 350
  },
  {
    image: product4,
    name: 'Airpods pro Drop',
    price: 350
  },
  {
    image: product5,
    name: 'Airpods pro 2.0',
    price: 285
  }
];

export type FeatureCardType = {
  icon: string;
  title: string;
  description: string;
  className? : string;
}

export const featureCardData: FeatureCardType[] = [
  {
    icon: 'flame',
    title: 'Seamless Connectivity',
    description: 'Effortlessly pair your AirPods with your devices for a hassle-free listening.',
    className: 'fill-primary'
  },
  {
    icon: 'truck',
    title: 'Get flexible delivery',
    description: 'Get free delivery or pickup at your Airpods store.'
  },
  {
    icon: 'headset',
    title: 'Accessories and Customization',
    description: 'Explore a range of accessories and customization options to your AirPods.'
  },
  {
    icon: 'shield-check',
    title: 'Worry-Free Warranty',
    description: 'Rest easy with a comprehensive warranty that covers your AirPods against defects.'
  }
];
