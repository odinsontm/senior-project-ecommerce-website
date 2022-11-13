import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Thor',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'Test1',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: 'PRO SERIES Jacket',
      slug: 'PRO-jacket',
      category: 'outerwear',
      image: '/images/p1.jpg',
      price: 55,
      countInStock: 10,
      rating: 4.5,
      numReviews: 9,
      description: 'very nice jacket',
    },
    {
      name: 'PRO SERIES hoodie',
      slug: 'PRO-hoodie',
      category: 'hoods',
      image: '/images/p2.jpg',
      price: 45,
      countInStock: 0,
      rating: 4.5,
      numReviews: 10,
      description: 'very cool hoodie. much nice',
    },
    {
      name: 'PRO SERIES Shirt',
      slug: 'pro-shirt',
      category: 'shirts',
      image: '/images/p3.jpg',
      price: 25,
      countInStock: 10,
      rating: 5,
      numReviews: 100,
      description: 'cool shirt, much wow, awesome!',
    },
  ],
};

export default data;
