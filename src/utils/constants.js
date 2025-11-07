export const DEVICE_TYPES = [
  { value: 'smartphone', label: 'Smartphone' },
  { value: 'tablet', label: 'Tablet' },
  { value: 'laptop', label: 'Laptop' }
]

export const BRANDS = {
  smartphone: ['Apple', 'Samsung', 'Huawei', 'Xiaomi', 'OnePlus', 'Google'],
  tablet: ['Apple', 'Samsung', 'Huawei', 'Lenovo'],
  laptop: ['Apple', 'Dell', 'HP', 'Lenovo', 'Asus']
}

export const MODELS = {
  Apple: {
    smartphone: ['iPhone 15 Pro', 'iPhone 15', 'iPhone 14 Pro', 'iPhone 14', 'iPhone 13', 'iPhone 12'],
    tablet: ['iPad Pro 12.9"', 'iPad Pro 11"', 'iPad Air', 'iPad'],
    laptop: ['MacBook Pro 16"', 'MacBook Pro 14"', 'MacBook Air 15"', 'MacBook Air 13"']
  },
  Samsung: {
    smartphone: ['Galaxy S24 Ultra', 'Galaxy S24+', 'Galaxy S24', 'Galaxy S23', 'Galaxy A54'],
    tablet: ['Galaxy Tab S9', 'Galaxy Tab A9', 'Galaxy Tab S8']
  }
}

export const REPAIR_TYPES = [
  { id: 'screen', name: 'Screen Repair', price: 89 },
  { id: 'battery', name: 'Battery Replacement', price: 59 },
  { id: 'camera', name: 'Camera Repair', price: 79 },
  { id: 'charging', name: 'Charging Port', price: 49 },
  { id: 'back', name: 'Back Cover', price: 39 },
  { id: 'water', name: 'Water Damage', price: 99 },
  { id: 'software', name: 'Software Issues', price: 29 }
]

export const DELIVERY_OPTIONS = [
  { value: 'standard', label: 'Standard Delivery', price: 5 },
  { value: 'express', label: 'Express Delivery', price: 12 },
  { value: 'pickup', label: 'In-store Pickup', price: 0 }
]

export const SAMPLE_PRODUCTS = [
  {
    id: 1,
    name: 'Anti-shock Case iPhone 15',
    price: 24.99,
    category: 'Protection',
    image: '/images/case-iphone15.jpg',
    rating: 4.5
  },
  {
    id: 2,
    name: 'Tempered Glass Screen Protector',
    price: 12.99,
    category: 'Protection',
    image: '/images/screen-protector.jpg',
    rating: 4.8
  },
  {
    id: 3,
    name: 'USB-C Fast Charger 30W',
    price: 19.99,
    category: 'Chargers',
    image: '/images/usb-c-charger.jpg',
    rating: 4.6
  },
  {
    id: 4,
    name: 'Wireless Charging Pad',
    price: 29.99,
    category: 'Chargers',
    image: '/images/wireless-charger.jpg',
    rating: 4.4
  }
]