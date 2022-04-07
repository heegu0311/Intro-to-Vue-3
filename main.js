const app = Vue.createApp({
  data() {
    return {
      product: "Socks",
      image: "assets/images/socks_green.jpg",
      url: "https:uni9oo.xyz",
      inStock: true,
      inventory: 1,
      details: ["50% cotton", "30% wool", "20% polyester"],
    };
  },
});
