import { avatarIds } from '@core/utils/get-avatar';
import { getRandomArrayElement } from '@core/utils/get-random-array-element';

export const appointmentTypes = {
  'Routine Checkup': 'Routine Checkup',
  'Pregnant Yoga': 'Pregnant Yoga',
  Consultant: 'Consultant',
  Training: 'Training',
};
export const appointmentStatuses = {
  Scheduled: 'Scheduled',
  Waiting: 'Waiting',
};

export type Type = keyof typeof appointmentTypes;
export type StatusType = keyof typeof appointmentStatuses;

// export const appointmentData = [
//   {
//     id: '3416',
//     patient: {
//       name: 'Kristie Ziemann',
//       email: 'kristie@example.com',
//     },
//     doctor: {
//       name: 'Dr. Johnnie Kassulke',
//       email: 'johnnie.kassulke@example.com',
//       avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars/avatar-${getRandomArrayElement(
//         avatarIds
//       )}.webp`,
//     },
//     appointType: 'Routine Checkup',
//     date: '2022-11-10T06:22:01.621Z',
//     status: 'Scheduled',
//     amount: 45.54,
//     duration: 90,
//     address: '1250 E Apache Blvd, Arkansas, USA',
//   },
//   {
//     id: '3417',
//     patient: {
//       name: 'Susie Beatty',
//       email: 'susie@example.com',
//     },
//     doctor: {
//       name: 'Dr. Marcos McGlynn',
//       email: 'marcos@example.com',
//       avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars/avatar-${getRandomArrayElement(
//         avatarIds
//       )}.webp`,
//     },
//     appointType: 'Consultant',
//     date: '2023-02-06T17:46:26.713Z',
//     status: 'Waiting',
//     amount: 45.54,
//     duration: 120,
//     address: '1250 E Apache Blvd, Arkansas, USA',
//   },
//   {
//     id: '3418',
//     patient: {
//       name: 'Marcos McGlynn',
//       email: 'marcos@example.com',
//     },
//     doctor: {
//       name: 'Dr. Omar Haag',
//       email: 'omar@example.com',
//       avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars/avatar-${getRandomArrayElement(
//         avatarIds
//       )}.webp`,
//     },
//     appointType: 'Training',
//     date: '2022-03-06T05:10:57.625Z',
//     status: 'Waiting',
//     amount: 45.54,
//     duration: 25,
//     address: '1250 E Apache Blvd, Arkansas, USA',
//   },
//   {
//     id: '3419',
//     patient: {
//       name: 'Omar Haag',
//       email: 'omar@example.com',
//     },
//     doctor: {
//       name: 'Dr. Susie Beatty',
//       email: 'susie@example.com',
//       avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars/avatar-${getRandomArrayElement(
//         avatarIds
//       )}.webp`,
//     },
//     appointType: 'Pregnant Yoga',
//     date: '2021-09-27T21:47:53.304Z',
//     status: 'Scheduled',
//     amount: 45.54,
//     duration: 10,
//     address: '1250 E Apache Blvd, Arkansas, USA',
//   },
//   {
//     id: '3420',
//     patient: {
//       name: 'Johnnie Kassulke',
//       email: 'johnnie.kassulke@example.com',
//     },
//     doctor: {
//       name: 'Dr. Kristie Ziemann',
//       email: 'kristie@example.com',
//       avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars/avatar-${getRandomArrayElement(
//         avatarIds
//       )}.webp`,
//     },
//     appointType: 'Training',
//     date: '2021-11-26T06:34:48.311Z',
//     status: 'Waiting',
//     amount: 45.54,
//     duration: 90,
//     address: '1250 E Apache Blvd, Arkansas, USA',
//   },
//   {
//     id: '3421',
//     patient: {
//       name: 'Kristie Ziemann',
//       email: 'kristie@example.com',
//     },
//     doctor: {
//       name: 'Dr. Johnnie Kassulke',
//       email: 'johnnie.kassulke@example.com',
//       avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars/avatar-${getRandomArrayElement(
//         avatarIds
//       )}.webp`,
//     },
//     appointType: 'Pregnant Yoga',
//     date: '2022-11-10T06:22:01.621Z',
//     status: 'Waiting',
//     amount: 45.54,
//     duration: 30,
//     address: '1250 E Apache Blvd, Arkansas, USA',
//   },
//   {
//     id: '3422',
//     patient: {
//       name: 'Omar Haag',
//       email: 'omar@example.com',
//     },
//     doctor: {
//       name: 'Dr. Marcos McGlynn',
//       email: 'marcos@example.com',
//       avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars/avatar-${getRandomArrayElement(
//         avatarIds
//       )}.webp`,
//     },
//     appointType: 'Routine Checkup',
//     date: '2023-02-06T17:46:26.713Z',
//     status: 'Scheduled',
//     amount: 45.0,
//     duration: 60,
//     address: '1250 E Apache Blvd, Arkansas, USA',
//   },
//   {
//     id: '3423',
//     patient: {
//       name: 'Johnnie Kassulke',
//       email: 'johnnie.kassulke@example.com',
//     },
//     doctor: {
//       name: 'Dr. Omar Haag',
//       email: 'omar@example.com',
//       avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars/avatar-${getRandomArrayElement(
//         avatarIds
//       )}.webp`,
//     },
//     appointType: 'Routine Checkup',
//     date: '2022-03-06T05:10:57.625Z',
//     status: 'Waiting',
//     amount: 45.54,
//     duration: 25,
//     address: '1250 E Apache Blvd, Arkansas, USA',
//   },
//   {
//     id: '3424',
//     patient: {
//       name: 'Johnnie Kassulke',
//       email: 'johnnie.kassulke@example.com',
//     },
//     doctor: {
//       name: 'Dr. Susie Beatty',
//       email: 'susie@example.com',
//       avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars/avatar-${getRandomArrayElement(
//         avatarIds
//       )}.webp`,
//     },
//     appointType: 'Routine Checkup',
//     date: '2021-09-27T21:47:53.304Z',
//     status: 'Waiting',
//     amount: 55.54,
//     duration: 120,
//     address: '1250 E Apache Blvd, Arkansas, USA',
//   },
//   {
//     id: '3425',
//     patient: {
//       name: 'Johnnie Kassulke',
//       email: 'johnnie.kassulke@example.com',
//     },
//     doctor: {
//       name: 'Dr. Kristie Ziemann',
//       email: 'kristie@example.com',
//       avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars/avatar-${getRandomArrayElement(
//         avatarIds
//       )}.webp`,
//     },
//     appointType: 'Pregnant Yoga',
//     date: '2021-11-26T06:34:48.311Z',
//     status: 'Waiting',
//     amount: 45.54,
//     duration: 10,
//     address: '1250 E Apache Blvd, Arkansas, USA',
//   },
//   {
//     id: '3426',
//     patient: {
//       name: 'Johnnie Kassulke',
//       email: 'johnnie.kassulke@example.com',
//     },
//     doctor: {
//       name: 'Dr. Johnnie Kassulke',
//       email: 'johnnie.kassulke@example.com',
//       avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars/avatar-${getRandomArrayElement(
//         avatarIds
//       )}.webp`,
//     },
//     appointType: 'Training',
//     date: '2022-11-10T06:22:01.621Z',
//     status: 'Waiting',
//     amount: 35.0,
//     duration: 35,
//     address: '1250 E Apache Blvd, Arkansas, USA',
//   },
//   {
//     id: '3527',
//     patient: {
//       name: 'Johnnie Kassulke',
//       email: 'johnnie.kassulke@example.com',
//     },
//     doctor: {
//       name: 'Dr. Marcos McGlynn',
//       email: 'marcos@example.com',
//       avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars/avatar-${getRandomArrayElement(
//         avatarIds
//       )}.webp`,
//     },
//     appointType: 'Training',
//     date: '2023-02-06T17:46:26.713Z',
//     status: 'Waiting',
//     amount: 45.54,
//     duration: 15,
//     address: '1250 E Apache Blvd, Arkansas, USA',
//   },
//   {
//     id: '3428',
//     patient: {
//       name: 'Susie Beatty',
//       email: 'susie@example.com',
//     },
//     doctor: {
//       name: 'Dr. Omar Haag',
//       email: 'omar@example.com',
//       avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars/avatar-${getRandomArrayElement(
//         avatarIds
//       )}.webp`,
//     },
//     appointType: 'Training',
//     date: '2022-03-06T05:10:57.625Z',
//     status: 'Scheduled',
//     amount: 45.54,
//     duration: 25,
//     address: '1250 E Apache Blvd, Arkansas, USA',
//   },
//   {
//     id: '3429',
//     patient: {
//       name: 'Marcos McGlynn',
//       email: 'marcos@example.com',
//     },
//     doctor: {
//       name: 'Dr. Susie Beatty',
//       email: 'susie@example.com',
//       avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars/avatar-${getRandomArrayElement(
//         avatarIds
//       )}.webp`,
//     },
//     appointType: 'Training',
//     date: '2021-09-27T21:47:53.304Z',
//     status: 'Scheduled',
//     amount: 50.54,
//     duration: 90,
//     address: '1250 E Apache Blvd, Arkansas, USA',
//   },
//   {
//     id: '3430',
//     patient: {
//       name: 'Johnnie Kassulke',
//       email: 'johnnie.kassulke@example.com',
//     },
//     doctor: {
//       name: 'Dr. Kristie Ziemann',
//       email: 'kristie@example.com',
//       avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars/avatar-${getRandomArrayElement(
//         avatarIds
//       )}.webp`,
//     },
//     appointType: 'Consultant',
//     date: '2021-11-26T06:34:48.311Z',
//     status: 'Waiting',
//     amount: 45.54,
//     duration: 120,
//     address: '1200 E Apache Blvd, Arkansas, USA',
//   },
// ];


export const appointmentData = [
  {
    id: '6322',
    name: 'Joanne Batz',
    number: '023434343434',
    appointType: 'Phone Call',
    gender: 'Male',
    email: 'Izabella44@gmail.com',
    avatar:
      'https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-02.webp',
    items: 93,
    price: '202.00',
    doctor: {
      name: 'Dr. Johnnie Kassulke',
      email: 'johnnie.kassulke@example.com',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    patient: {
      name: 'Kristie Ziemann',
      email: 'kristie@example.com',
    },
    appointStatus: 'Schedule',
    date: '2022-11-10T06:22:01.621Z',
    status: 'Paid',
    createdAt: '2023-08-10T14:10:56.495Z',
    updatedAt: '2023-08-07T12:18:04.534Z',
    products: [
      {
        id: '0o02051402',
        name: 'Tasty Metal Shirt',
        category: 'Shoes',
        image:
          'https://isomorphic-furyroad.s3.amazonaws.com/public/products/modern/7.webp',
        price: '410.00',
        quantity: 2,
      },
      {
        id: '0o02374305',
        name: 'Rustic Steel Computer',
        category: 'Shoes',
        image:
          'https://isomorphic-furyroad.s3.amazonaws.com/public/products/modern/6.webp',
        price: '948.00',
        quantity: 1,
      },
    ],
  },
  {
    id: '8216',
    name: 'Kara Goodwin',
    number: '023434343434',
    appointType: 'Zoom',
    gender: 'Male',
    email: 'Milford67@gmail.com',
    avatar:
      'https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-01.webp',
    items: 57,
    price: '329.00',
    doctor: {
      name: 'Dr. Johnnie Kassulke',
      email: 'johnnie.kassulke@example.com',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    patient: {
      name: 'Kristie Ziemann',
      email: 'kristie@example.com',
    },
    appointStatus: 'Waiting',
    date: '2022-11-10T06:22:01.621Z',
    status: 'Unpaid',
    createdAt: '2023-06-25T13:48:55.907Z',
    updatedAt: '2023-08-12T11:04:54.639Z',
    products: [
      {
        id: '0o17477064',
        name: 'Modern Cotton Gloves',
        category: 'Watch',
        image:
          'https://isomorphic-furyroad.s3.amazonaws.com/public/products/modern/5.webp',
        price: '342.00',
        quantity: 3,
      },
      {
        id: '0o02374305',
        name: 'Rustic Steel Computer',
        category: 'Shoes',
        image:
          'https://isomorphic-furyroad.s3.amazonaws.com/public/products/modern/6.webp',
        price: '948.00',
        quantity: 1,
      },
    ],
  },
  {
    id: '5881',
    name: 'Mr. Irvin Farrell',
    number: '023434343434',
    appointType: 'F2F',
    gender: 'Male',
    email: 'Chanel21@yahoo.com',
    avatar:
      'https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-15.webp',
    items: 91,
    price: '263.00',
    doctor: {
      name: 'Dr. Johnnie Kassulke',
      email: 'johnnie.kassulke@example.com',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    patient: {
      name: 'Kristie Ziemann',
      email: 'kristie@example.com',
    },
    appointStatus: 'Cancelled',
    date: '2022-11-10T06:22:01.621Z',
    status: 'Refunded',
    createdAt: '2023-07-10T17:48:56.737Z',
    updatedAt: '2023-08-13T06:10:40.908Z',
    products: [
      {
        id: '0o17477064',
        name: 'Modern Cotton Gloves',
        category: 'Watch',
        image:
          'https://isomorphic-furyroad.s3.amazonaws.com/public/products/modern/5.webp',
        price: '342.00',
        quantity: 3,
      },
    ],
  },
  {
    id: '5881',
    name: 'Mr. Irvin Farrell',
    number: '023434343434',
    appointType: 'Skype',
    gender: 'Male',
    email: 'Chanel21@yahoo.com',
    avatar:
      'https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-15.webp',
    items: 91,
    price: '263.00',
    doctor: {
      name: 'Dr. Johnnie Kassulke',
      email: 'johnnie.kassulke@example.com',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    patient: {
      name: 'Kristie Ziemann',
      email: 'kristie@example.com',
    },
    appointStatus: 'Schedule',
    date: '2022-11-10T06:22:01.621Z',
    status: 'Paid',
    createdAt: '2023-07-10T17:48:56.737Z',
    updatedAt: '2023-08-13T06:10:40.908Z',
    products: [
      {
        id: '0o17477064',
        name: 'Modern Cotton Gloves',
        category: 'Watch',
        image:
          'https://isomorphic-furyroad.s3.amazonaws.com/public/products/modern/5.webp',
        price: '342.00',
        quantity: 3,
      },
    ],
  },
  {
    id: '5881',
    name: 'Mr. Irvin Farrell',
    number: '023434343434',
    appointType: 'Teams',
    gender: 'Male',
    email: 'Chanel21@yahoo.com',
    avatar:
      'https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-15.webp',
    items: 91,
    price: '263.00',
    doctor: {
      name: 'Dr. Johnnie Kassulke',
      email: 'johnnie.kassulke@example.com',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    patient: {
      name: 'Kristie Ziemann',
      email: 'kristie@example.com',
    },
    appointStatus: 'Cancelled',
    date: '2022-11-10T06:22:01.621Z',
    status: 'Unpaid',
    createdAt: '2023-07-10T17:48:56.737Z',
    updatedAt: '2023-08-13T06:10:40.908Z',
    products: [
      {
        id: '0o17477064',
        name: 'Modern Cotton Gloves',
        category: 'Watch',
        image:
          'https://isomorphic-furyroad.s3.amazonaws.com/public/products/modern/5.webp',
        price: '342.00',
        quantity: 3,
      },
    ],
  },
  {
    id: '5881',
    name: 'Mr. Irvin Farrell',
    number: '023434343434',
    appointType: 'Other',
    gender: 'Male',
    email: 'Chanel21@yahoo.com',
    avatar:
      'https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-15.webp',
    items: 91,
    price: '263.00',
    doctor: {
      name: 'Dr. Johnnie Kassulke',
      email: 'johnnie.kassulke@example.com',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    patient: {
      name: 'Kristie Ziemann',
      email: 'kristie@example.com',
    },
    appointStatus: 'Cancelled',
    date: '2022-11-10T06:22:01.621Z',
    status: 'Unpaid',
    createdAt: '2023-07-10T17:48:56.737Z',
    updatedAt: '2023-08-13T06:10:40.908Z',
    products: [
      {
        id: '0o17477064',
        name: 'Modern Cotton Gloves',
        category: 'Watch',
        image:
          'https://isomorphic-furyroad.s3.amazonaws.com/public/products/modern/5.webp',
        price: '342.00',
        quantity: 3,
      },
    ],
  },
];
