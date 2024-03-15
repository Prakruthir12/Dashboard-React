import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

let orders = [
  {
    id: 1,
    orderList: "Phone",
    lastName: "Hubbard",
    firstName: "Eula",
    phone: "123 456 789",
    orderDate: "01.02.2023",
    verified: "delivered",
  },
  {
    id: 2,
    orderList: "Laptop",
    lastName: "Manning",
    firstName: "Stella",
    email: "comhuhmit@gmail.com",
    phone: "123 456 789",
    orderDate: "01.02.2023",
    verified: "pending",
  },
  {
    id: 3,
    orderList: "TV",
    lastName: "Greer",
    firstName: "Mary",
    email: "ujudokon@hottmail.com",
    phone: "123 456 789",
    orderDate: "01.02.2023",
    verified: "not dispatched",
  },
  {
    id: 4,
    orderList: "Clothes, TV",
    lastName: "Williamson",
    firstName: "Mildred",
    email: "tinhavabe@gmail.com",
    phone: "123 456 789",
    orderDate: "01.02.2023",
    verified: "dispatched",
  },
  {
    id: 5,
    orderList: "Microphone",
    lastName: "Gross",
    firstName: "Jose",
    email: "gobtagbes@yahoo.com",
    phone: "123 456 789",
    orderDate: "01.02.2023",
    verified: "dispatched",
  },
  {
    id: 6,
    orderList: "AC",
    lastName: "Sharp",
    firstName: "Jeremy",
    email: "vulca.eder@mail.com",
    phone: "123 456 789",
    orderDate: "01.02.2023",
    verified: "pending",
  },
  {
    id: 7,
    orderList: "Phone",
    lastName: "Lowe",
    firstName: "Christina",
    email: "reso.bilic@gmail.com",
    phone: "123 456 789",
    orderDate: "01.02.2023",
    verified: "not dispatched",
  },
  {
    id: 8,
    orderList: "Laptop",
    lastName: "Dean",
    firstName: "Garrett",
    email: "codaic@mail.com",
    phone: "123 456 789",
    orderDate: "01.02.2023",
    verified: "delivered",
  },
  {
    id: 9,
    orderList: "AC",
    lastName: "Parsons",
    firstName: "Leah",
    email: "uzozor@gmail.com",
    phone: "123 456 789",
    orderDate: "01.02.2023",
    verified: "dispatched",
  },
  {
    id: 10,
    orderList: "Phone",
    lastName: "Reid",
    firstName: "Elnora",
    email: "tuhkabapu@gmail.com",
    phone: "123 456 789",
    orderDate: "01.02.2023",
    verified: "pending",
  },
  {
    id: 11,
    orderList: "Microphone",
    lastName: "Dunn",
    firstName: "Gertrude",
    email: "gibo@gmail.com",
    phone: "123 456 789",
    orderDate: "01.02.2023",
    verified: "delivered",
  },
  {
    id: 12,
    orderList: "TV",
    lastName: "Williams",
    firstName: "Mark",
    email: "tic.harvey@hotmail.com",
    phone: "123 456 789",
    orderDate: "01.02.2023",
    verified: "delivered",
  },
  {
    id: 13,
    orderList: "Fridge",
    lastName: "Cruz",
    firstName: "Charlotte",
    email: "ceuc@gmail.com",
    phone: "123 456 789",
    orderDate: "01.02.2023",
    verified: "dispatched",
  },
  {
    id: 14,
    orderList: "Laptop",
    lastName: "Harper",
    firstName: "Sara",
    email: "bafuv@hotmail.com",
    phone: "123 456 789",
    orderDate: "01.02.2023",
    verified: "not dispatched",
  },
  {
    id: 15,
    orderList: "Phone",
    lastName: "Griffin",
    firstName: "Eric",
    email: "ubi@gmail.com",
    phone: "123 456 789",
    orderDate: "01.02.2023",
    verified: "dispatched",
  },
];

let products = [
  {
    id: 1,
    img: "https://store.sony.com.au/on/demandware.static/-/Sites-sony-master-catalog/default/dw1b537bbb/images/PLAYSTATION5W/PLAYSTATION5W.png",
    title: "Playstation 5 Digital Edition",
    color: "white",
    producer: "Sony",
    price: "$250.99",
    inStock: true,
  },
  {
    id: 2,
    img: "https://www.pngmart.com/files/6/Dell-Laptop-PNG-Image.png",
    title: "Dell Laptop KR211822",
    color: "black",
    producer: "Dell",
    price: "$499.99",
    inStock: true,
  },
  {
    id: 3,
    img: "http://images.samsung.com/is/image/samsung/uk-led-tv-hg40ed670ck-hg40ed670ckxxu-001-front",
    title: "Samsung TV 4K SmartTV",
    color: "gray",
    producer: "Samsung",
    price: "$999.49",
    inStock: true,
  },
  {
    id: 4,
    img: "https://raylo.imgix.net/iphone-14-blue.png",
    title: "Apple Iphone 14 Pro Max",
    color: "white",
    producer: "Apple",
    price: "$799.49",
    inStock: true,
  },
  {
    id: 5,
    img: "https://www.signify.com/b-dam/signify/en-aa/about/news/2020/20200903-movie-night-essentials-popcorn-ice-cream-and-the-new-philips-hue-play-gradient-lightstrip/packaging-lighstrip.png",
    title: "Philips Hue Play Gradient",
    color: "rainbow",
    producer: "Philips",
    price: "$39.99",
  },
  {
    id: 6,
    img: "https://www.smartworld.it/wp-content/uploads/2019/09/High_Resolution_PNG-MX-Master-3-LEFT-GRAPHITE.png",
    title: "Logitech MX Master 3",
    color: "black",
    producer: "Logitech",
    price: "$59.49",
    inStock: true,
  },
  {
    id: 7,
    img: "https://www.pngarts.com/files/7/Podcast-Mic-PNG-Picture.png",
    title: "Rode Podcast Microphone",
    color: "gray",
    producer: "Rode",
    price: "$119.49",
  },
  {
    id: 8,
    img: "https://5.imimg.com/data5/SW/VM/MY-5774620/toshiba-split-ac-2-ton-3-star-rated-ras-24s3ks-500x500.png",
    title: "Toshiba Split AC 2",
    color: "white",
    producer: "Toshiba",
    price: "$899.99",
    inStock: true,
  },
  {
    id: 9,
    img: "https://img.productz.com/review_image/102489/preview_sony-kdl-50w800b-50-inch-hdtv-review-superb-picture-102489.png",
    title: "Sony Bravia KDL-47W805A",
    color: "black",
    producer: "Sony",
    price: "$970.49",
  },
  {
    id: 10,
    img: "https://venturebeat.com/wp-content/uploads/2015/07/As_AO1-131_gray_nonglare_win10_03.png?fit=1338%2C1055&strip=all",
    title: "Acer Laptop 16 KL-4804",
    color: "black",
    producer: "Acer",
    price: "$599.99",
    inStock: true,
  },
];

// GET orders
app.get("/api/orders", (req, res) => {
  res.json(orders);
});

// GET order
app.get("/api/orders/:id", (req, res) => {
  const order = orders.find((order) => order.id === parseInt(req.params.id));
  res.json(order);
});

// ADD order
app.post("/api/orders", (req, res) => {
  orders.unshift(req.body)
  res.json(orders);
});

// DELETE order
app.delete("/api/orders/:id", (req, res) => {
  orders = orders.filter((order) => order.id !== parseInt(req.params.id));
  res.json("order deleted!");
});

// GET PRODUCTS
app.get("/api/products", (req, res) => {
  res.json(products);
});

// GET PRODUCT
app.get("/api/products/:id", (req, res) => {
  const product = products.find((product) => product.id === parseInt(req.params.id));
  res.json(product);
});

// ADD PRODUCT
app.post("/api/products", (req, res) => {
  products.unshift(req.body)
  res.json(products);
});

// DELETE PRODUCT
app.delete("/api/products/:id", (req, res) => {
  products = products.filter((product) => product.id !== parseInt(req.params.id));
  res.json("Product deleted!");
});

app.listen(8800, () => {
  console.log("Connected to backend.");
});
