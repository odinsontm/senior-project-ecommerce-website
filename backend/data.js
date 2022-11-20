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
      image: '/images/jacket.jpg',
      price: 55,
      countInStock: 10,
      rating: 4.5,
      numReviews: 9,
      description:
        'Nunc pulvinar sapien et ligula ullamcorper. Auctor urna nunc id cursus metus aliquam eleifend mi in. Aliquam eleifend mi in nulla posuere sollicitudin. Habitasse platea dictumst quisque sagittis purus sit amet. Laoreet sit amet cursus sit amet dictum. Condimentum mattis pellentesque id nibh tortor id aliquet lectus proin. Justo eget magna fermentum iaculis eu non. Faucibus a pellentesque sit amet porttitor eget dolor morbi. A scelerisque purus semper eget duis. Pretium aenean pharetra magna ac placerat. Aliquam purus sit amet luctus venenatis lectus magna fringilla. Blandit massa enim nec dui nunc mattis. Egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien. Quam lacus suspendisse faucibus interdum. Iaculis at erat pellentesque adipiscing commodo elit. Mi bibendum neque egestas congue. Mattis aliquam faucibus purus in.',
      isFeatured: true,
    },
    {
      name: 'PRO SERIES Hoodie',
      slug: 'PRO-hoodie',
      category: 'hoods',
      image: '/images/p2.jpg',
      price: 45,
      countInStock: 0,
      rating: 4.5,
      numReviews: 10,
      description:
        'Eu consequat ac felis donec et odio pellentesque diam. Purus non enim praesent elementum facilisis leo. Integer eget aliquet nibh praesent tristique magna. Adipiscing elit pellentesque habitant morbi tristique. Enim nec dui nunc mattis enim. Enim nunc faucibus a pellentesque sit amet porttitor eget dolor. Porta lorem mollis aliquam ut porttitor. Tincidunt arcu non sodales neque sodales ut etiam sit amet. Aliquet bibendum enim facilisis gravida neque convallis a cras semper. Pellentesque diam volutpat commodo sed. Interdum varius sit amet mattis. Dictum varius duis at consectetur lorem donec massa. Cras fermentum odio eu feugiat pretium nibh ipsum. Ridiculus mus mauris vitae ultricies. Risus nec feugiat in fermentum posuere urna nec. Sollicitudin aliquam ultrices sagittis orci a scelerisque purus. Elementum pulvinar etiam non quam lacus suspendisse faucibus interdum posuere. Malesuada fames ac turpis egestas sed tempus urna. Eget nulla facilisi etiam dignissim. Varius quam quisque id diam vel quam elementum pulvinar.',
      isFeatured: true,
    },
    {
      name: 'PRO SERIES Shirt',
      slug: 'pro-shirt',
      category: 'shirts',
      image: '/images/bmx3.jpg',
      price: 25,
      countInStock: 10,
      rating: 5,
      numReviews: 100,
      description:
        'Eget lorem dolor sed viverra ipsum nunc aliquet. Quis ipsum suspendisse ultrices gravida dictum fusce ut placerat orci. Arcu dictum varius duis at. Risus commodo viverra maecenas accumsan lacus vel facilisis. Auctor elit sed vulputate mi sit. Ornare quam viverra orci sagittis eu volutpat odio. Viverra accumsan in nisl nisi scelerisque eu ultrices. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. Sed turpis tincidunt id aliquet risus feugiat. Potenti nullam ac tortor vitae purus faucibus ornare. In mollis nunc sed id semper risus. Dui vivamus arcu felis bibendum ut tristique et egestas. Ultrices gravida dictum fusce ut placerat. Aliquam sem fringilla ut morbi tincidunt. Neque laoreet suspendisse interdum consectetur libero id faucibus nisl. Molestie a iaculis at erat pellentesque adipiscing commodo elit at.',
      isFeatured: true,
    },
    {
      name: 'PRO SERIES Short',
      slug: 'pro-short',
      category: 'pants',
      image: '/images/miata.jpg',
      price: 35,
      countInStock: 10,
      rating: 5,
      numReviews: 100,
      description:
        'Massa massa ultricies mi quis hendrerit dolor magna eget. Cursus in hac habitasse platea. Turpis cursus in hac habitasse platea dictumst quisque sagittis purus. Vitae turpis massa sed elementum tempus egestas sed. Hendrerit dolor magna eget est. Proin sagittis nisl rhoncus mattis rhoncus. Dolor sit amet consectetur adipiscing elit pellentesque. Sed nisi lacus sed viverra tellus in hac. Nunc vel risus commodo viverra maecenas accumsan. Amet purus gravida quis blandit turpis cursus in hac. Odio aenean sed adipiscing diam donec adipiscing tristique risus nec. In egestas erat imperdiet sed euismod nisi. Aenean pharetra magna ac placerat. Orci ac auctor augue mauris augue neque gravida. Vulputate enim nulla aliquet porttitor. Ut tellus elementum sagittis vitae et leo duis ut diam. A erat nam at lectus urna. Et netus et malesuada fames ac turpis. Nulla facilisi morbi tempus iaculis urna id volutpat lacus.',
      isFeatured: true,
    },
    {
      name: 'PRO SERIES Skateboard',
      slug: 'pro-skate',
      category: 'accessories',
      image: '/images/skate.jpg',
      price: 65,
      countInStock: 5,
      rating: 5,
      numReviews: 25,
      description:
        'Nulla at volutpat diam ut venenatis tellus in. Ac orci phasellus egestas tellus. Turpis nunc eget lorem dolor sed viverra ipsum. Amet commodo nulla facilisi nullam vehicula ipsum a. Urna nec tincidunt praesent semper feugiat nibh sed pulvinar proin. Pharetra magna ac placerat vestibulum lectus mauris ultrices eros. Enim ut tellus elementum sagittis. Aenean sed adipiscing diam donec. At imperdiet dui accumsan sit amet nulla facilisi morbi. Amet risus nullam eget felis eget. Sit amet aliquam id diam maecenas ultricies. Cursus sit amet dictum sit amet justo donec enim diam. Nullam ac tortor vitae purus faucibus ornare. Diam vel quam elementum pulvinar etiam non. Id faucibus nisl tincidunt eget. Sed vulputate odio ut enim blandit volutpat maecenas volutpat blandit. Sit amet volutpat consequat mauris nunc congue.',
      isFeatured: false,
    },
    {
      name: 'PRO SERIES Hat',
      slug: 'pro-hat',
      category: 'accessories',
      image: '/images/hat.jpg',
      price: 22,
      countInStock: 15,
      rating: 4.5,
      numReviews: 50,
      description:
        'Etiam non quam lacus suspendisse faucibus interdum posuere lorem. Pretium viverra suspendisse potenti nullam ac tortor vitae purus faucibus. Id donec ultrices tincidunt arcu non sodales neque sodales. Adipiscing elit pellentesque habitant morbi tristique. Tellus molestie nunc non blandit massa enim nec dui nunc. Mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Porttitor leo a diam sollicitudin tempor. Placerat in egestas erat imperdiet sed euismod nisi. Tellus in hac habitasse platea dictumst vestibulum. Nisi porta lorem mollis aliquam.',
      isFeatured: false,
    },
    {
      name: 'PRO SERIES Pants',
      slug: 'pro-pant',
      category: 'pants',
      image: '/images/bmx.jpg',
      price: 25,
      countInStock: 15,
      rating: 5,
      numReviews: 50,
      description:
        'Rhoncus urna neque viverra justo. At consectetur lorem donec massa sapien. Penatibus et magnis dis parturient montes nascetur ridiculus. Orci nulla pellentesque dignissim enim sit amet. Egestas tellus rutrum tellus pellentesque eu tincidunt. Tortor aliquam nulla facilisi cras fermentum. In ornare quam viverra orci sagittis. Id faucibus nisl tincidunt eget nullam non nisi. Nec ullamcorper sit amet risus nullam eget felis eget. Bibendum arcu vitae elementum curabitur vitae nunc sed. Magna sit amet purus gravida quis blandit turpis cursus in.',
      isFeatured: false,
    },
    {
      name: 'PRO SERIES Button-Up T-Shirt',
      slug: 'pro-button-up',
      category: 'shirts',
      image: '/images/bmx2.jpg',
      price: 35,
      countInStock: 15,
      rating: 5,
      numReviews: 50,
      description:
        'Nulla at volutpat diam ut venenatis tellus in. Ac orci phasellus egestas tellus. Turpis nunc eget lorem dolor sed viverra ipsum. Amet commodo nulla facilisi nullam vehicula ipsum a. Urna nec tincidunt praesent semper feugiat nibh sed pulvinar proin. Pharetra magna ac placerat vestibulum lectus mauris ultrices eros. Enim ut tellus elementum sagittis. Aenean sed adipiscing diam donec. At imperdiet dui accumsan sit amet nulla facilisi morbi. Amet risus nullam eget felis eget. Sit amet aliquam id diam maecenas ultricies. Cursus sit amet dictum sit amet justo donec enim diam. Nullam ac tortor vitae purus faucibus ornare. Diam vel quam elementum pulvinar etiam non. Id faucibus nisl tincidunt eget. Sed vulputate odio ut enim blandit volutpat maecenas volutpat blandit. Sit amet volutpat consequat mauris nunc congue.',
      isFeatured: false,
    },
    {
      name: 'PRO SERIES Poster',
      slug: 'pro-poster',
      category: 'misc',
      image: '/images/poster.jpg',
      price: 65,
      countInStock: 5,
      rating: 4.5,
      numReviews: 4,
      description:
        'Rhoncus urna neque viverra justo. At consectetur lorem donec massa sapien. Penatibus et magnis dis parturient montes nascetur ridiculus. Orci nulla pellentesque dignissim enim sit amet. Egestas tellus rutrum tellus pellentesque eu tincidunt. Tortor aliquam nulla facilisi cras fermentum. In ornare quam viverra orci sagittis. Id faucibus nisl tincidunt eget nullam non nisi. Nec ullamcorper sit amet risus nullam eget felis eget. Bibendum arcu vitae elementum curabitur vitae nunc sed. Magna sit amet purus gravida quis blandit turpis cursus in.',
      isFeatured: false,
    },
  ],
};

export default data;
