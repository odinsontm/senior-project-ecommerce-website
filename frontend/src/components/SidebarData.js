/**
 * Data used inside the sidebar, can edit easier using a data file.
 */

export const SidebarData = [
  {
    title: 'HOME',
    path: '/',
  },
  {
    title: 'PRODUCTS',
    path: '#',
    subNav: [
      {
        title: 'ALL',
        path: '/products/all',
      },
      {
        title: 'FEATURED',
        path: '/products/featured',
      },
      {
        title: 'NEW',
        path: '/products/new',
      },
    ],
  },
  {
    title: 'ABOUT',
    path: '/about',
  },
];
