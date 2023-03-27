export const broadbandPlan = [
  {
    id: 1,
    price: 589,
    bandwidth: 40,
    validity: 1,
    plan_type: 'normal',
  },
  {
    id: 2,
    price: 2829,
    original_price: 2997,
    bandwidth: 100,
    validity: 12,
    plan_type: 'save',
  },
  {
    id: 3,
    price: 6820,
    bandwidth: 200,
    validity: 6,
    plan_type: 'save',
    original_price: 7200,
  },
  {
    id: 4,
    price: 345,
    bandwidth: 20,
    validity: 1,
    last_recharge: true,
  },
  {
    id: 5,
    price: 499,
    bandwidth: 30,
    validity: 2,
    last_recharge: true,
  },
  {
    id: 6,
    price: 299,
    bandwidth: 10,
    validity: 1,
    plan_type: 'normal',
  },
];

export const walletDetail = [
  {
    img: require('../../assets/images/paytm.jpg'),
    text: 'Paytm',
    link: true,
  },
  {
    img: require('../../assets/images/amazonpay.jpeg'),
    text: 'amazonpay',
    descData: 'balance:600rs pay589rs using balance ',
    desc: true,
  },
  {
    img: require('../../assets/images/airtel.jpg'),
    text: 'airtel payment bank',
    descData: 'balance:600rs pay589rs using balance ',
    desc: true,
    coupon: true,
  },
];
export const NetBanking = [
  {
    img: require('../../assets/images/sbi.png'),
    text: 'SBI',
  },
  {
    img: require('../../assets/images/hdfc.jpeg'),
    text: 'HDFC',
  },
  {
    img: require('../../assets/images/ICIC.jpg'),
    text: 'ICIC',
  },
];
export const recomended = [
  {
    img: require('../../assets/images/ICIC.jpg'),
    text: 'ICIC',
    descData: 'XX-XXXX-X',
    desc: true,
  },
  {
    img: require('../../assets/images/amazonpay.jpeg'),
    text: 'amazonpay',
    descData: 'balance:600rs pay589rs using balance ',
    desc: true,
  },
  {
    img: require('../../assets/images/airtel.jpg'),
    text: 'airtel payment bank',
    descData: 'balance:600rs pay589rs using balance ',
    desc: true,
    coupon: true,
  },
];

export const upi = [
  {
    img: require('../../assets/images/gpay.jpg'),
    text: 'Gpay',
  },
  {
    img: require('../../assets/images/phonepay.jpg'),
    text: 'PhonePay',
  },
  {
    img: require('../../assets/images/paytm.jpg'),
    text: 'Paytym',
  },
];

export const Mbps = [
  {value: 10, name: '10 Mbps', id: 1},
  {value: 20, name: '20 Mbps', id: 2},
  {value: 40, name: '40 Mbps', id: 3},
  {value: 100, name: '100 Mbps', id: 4},
  {value: 200, name: '200 Mbps', id: 5},
];
