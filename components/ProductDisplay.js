app.component("product-display", {
  props: {
    premium: {
      type: Boolean,
      required: true,
    },
  },
  template:
    /* HTML */
    ` <div class="product-display">
      <div class="product-container">
        <div class="product-image">
          <!-- my solution -->
          <!-- <img v-bind:src="image" :class="{ outOfStockImg: !inStock}" /> -->
          <!-- my solution -->
          <!-- solution -->
          <img :class="{ 'out-of-stock-img': !inStock }" v-bind:src="image" />
          <!-- solution -->
        </div>
        <div class="product-info">
          <h1>{{ title }}</h1>
          <p>{{ sale }}</p>
          <p v-if="inStock">In Stock</p>
          <p v-else>Out of Stock</p>
          <p>shipping : {{ shipping }}</p>
          <product-details :details="details"></product-details>
          <a :href="url" target="_blank">click to check my blog</a>
          <div
            v-for="(variant, index) in variants"
            :key="variants"
            @mouseover="updateVariant(index)"
            class="color-circle"
            :style="{ backgroundColor : variant.color}"
          ></div>
          <button
            class="button"
            v-on:click="addToCart"
            :class="{ disabledButton: !inStock}"
            :disabled="!inStock"
          >
            Add to Cart
          </button>
          <button class="button" v-on:click="deleteFromCart">
            Delete from Cart
          </button>
        </div>
      </div>
    </div>`,
  data() {
    return {
      cart: 0,
      product: "Socks",
      brand: "Vue Mastery",
      selectedVariant: 0,
      onSale: true,
      url: "https:uni9oo.xyz",
      inventory: 100,
      details: ["50% cotton", "30% wool", "20% polyester"],
      variants: [
        {
          id: 2234,
          color: "green",
          image: "./assets/images/socks_green.jpg",
          quantity: 50,
        },
        {
          id: 2235,
          color: "blue",
          image: "./assets/images/socks_blue.jpg",
          quantity: 0,
        },
      ],
    };
  },
  methods: {
    addToCart() {
      this.cart += 1;
    },
    deleteFromCart() {
      if (this.cart > 0) {
        this.cart -= 1;
      }
    },
    updateVariant(index) {
      this.selectedVariant = index;
    },
  },
  computed: {
    title() {
      return this.brand + " " + this.product;
    },
    image() {
      return this.variants[this.selectedVariant].image;
    },
    inStock() {
      return this.variants[this.selectedVariant].quantity;
    },
    sale() {
      if (this.onSale) return this.brand + " " + this.product + "is on sale";
      else return this.brand + " " + this.product;
    },
    shipping() {
      if (this.premium) {
        return "Free";
      }
      return 2.99;
    },
  },
});
