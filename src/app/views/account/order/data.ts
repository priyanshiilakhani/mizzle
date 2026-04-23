export type OrderType = {
  id: number;
  image: string;
  orderNo: string;
  title: string;
  size: string;
  shippedDate: string;
  status: string;
  statusIcon: string;
  statusClass: string;
  amount: string;
  showTrack?: boolean;
  trackText?: string;
  transitStatus?: string;
  transitText?: string;
  transitLocation?: string;
  gridCols: string; 
}

export const orderData: OrderType[] = [
  {
    id: 1,
    image: 'assets/images/shop/02.png',
    orderNo: '#458795',
    title: 'Round neck cotton t-shirt',
    size: 'L',
    shippedDate: '10 Nov, 2023',
    status: 'Delivered',
    statusIcon: 'circle-check',
    statusClass: 'text-success',
    amount: '$103.00',
    gridCols: 'md:grid-cols-3',
  },
  {
    id: 2,
    image: 'assets/images/shop/03.png',
    orderNo: '#548762',
    title: 'Men baseball cap',
    size: 'S',
    shippedDate: '05 Nov, 2023',
    status: 'Cancelled',
    statusIcon: 'circle-x',
    statusClass: 'text-danger',
    amount: '$115.00',
    gridCols: 'md:grid-cols-3',
  },
  {
    id: 3,
    image: 'assets/images/shop/01.png',
    orderNo: '#248795',
    title: 'Woman skincare drops',
    size: 'S',
    shippedDate: '05 Nov, 2023',
    status: 'Processing',
    statusIcon: 'circle-check',
    statusClass: 'text-warning',
    amount: '$98.00',
    showTrack: true,
    trackText: 'Track order',
    transitStatus: 'In Transit',
    transitText: 'circle-check',
    transitLocation: 'Expected at NY,USA',
    gridCols: 'md:grid-cols-4',
  },
];
