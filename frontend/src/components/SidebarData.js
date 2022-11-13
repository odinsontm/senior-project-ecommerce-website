import React from 'react';

export const SidebarData = [
  {
    title: 'HOME',
    path: '/',
  },
  {
    title: 'PRODUCTS',
    path: '/',
    subNav: [
      {
        title: 'ALL',
        path: '/',
      },
      {
        title: 'FEATURED',
        path: '/products/featured',
      },
      {
        title: 'NEW',
        path: '/products/featured',
      },
    ],
  },
  {
    title: 'ABOUT',
    path: '/about',
  },
];
