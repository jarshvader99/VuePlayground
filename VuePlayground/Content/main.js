﻿//var eventBus = new Vue()

//Vue.component('product-details', {
//    props: {
//        details: {
//            type: Array,
//            required: true
//        }
//    },
//    template: `
//         <ul>
//            <li v-for="detail in details">{{detail}}</li>
//        </ul>
//        `
//})

//Vue.component('product', {
//    props: {
//        premium: {
//            type: Boolean,
//            required: true
//        }
//    },
//    template: `
//    <div class ="product">
//    <div class ="product-image">
//        <a href="link" target="_blank"><img v-bind:src="image" v-bind:alt="altText" /></a>
//        <button v-on:click="addToCart" :disabled="!inStock" :class ="{disabledButton: !inStock}">Add to cart</button>
//        <button v-on:click="removeFromCart">Remove</button>
//    </div>
//    <div class="product-info">
//        <h1>{{ product }}</h1>
//        <span>{{sale}}</span>
//        <p>Shipping: {{shipping}}</p>
//        <p v-if="inStock">In Stock</p>
//        <p v-else>Out of Stock</p>

//        <p v-for="size in sizes">
//            {{size}}
//        </p>
//        <div class="color-box" v-for="(variant, index) in variants" :key="variant.variantId" :style="{backgroundColor: variant.variantColor}" @mouseover="updateProduct(index)">
//        </div>
         
//        <product-tabs: reviews="reviews"></product-tabs>
//    </div>
//</div>
//    `,
//    data() {
//        return {
//            product: 'Socks',
//            brand: 'Vue Mastery',
//            selectedVariant: 0,
//            //image: 'https://lh3.googleusercontent.com/CWnYDgtm9kH-WNp4JcsdpvUH2ZoMCrHkJriiSi_dJwf3XHTeAXkQA0WSo708ZMFQeqM',
//            altText: 'A wonderfully beautiful smile!',
//            link: 'http://ustore.jshdevco.com',
//            //inStock: true,
//            inventory: 100,
//            onSale: true,
//            details: ["80% cotton", "20% polyester", "Gender-neutral"],
//            variants: [
//                {
//                    variantId: 2234,
//                    variantColor: "green",
//                    variantImage: "https://lh3.googleusercontent.com/CWnYDgtm9kH-WNp4JcsdpvUH2ZoMCrHkJriiSi_dJwf3XHTeAXkQA0WSo708ZMFQeqM",
//                    variantQuantity: 10
//                },
//                {
//                    variantId: 2235,
//                    variantColor: "blue",
//                    variantImage: "https://assets.wordpress.envato-static.com/uploads/2018/01/image1.png",
//                    variantQuantity: 0
//                }
//            ],
//            sizes: ["Small", "Medium", "Large", "XLarge"],
//            reviews: []
//        }
//    },
//    methods: {
//        addToCart: function () {
//            this.$emit('add-to-cart',
//                this.variants[this.selectedVariant].variantId)
//        },
//        removeFromCart: function () {
//            this.$emit('remove-from-cart',
//                this.variants[this.selectedVariant].variantId)
//        },
//        updateProduct: function (index) {
//            this.selectedVariant = index
//            console.log(index)
//        },
//        updateCart: function (id) {
//            this.cart.push(id)
//        },
//        addReview(productReview) {
//            this.reviews.push(productReview)
//        }
//    },
//    computed: {
//        title() {
//            return this.brand + ' ' + this.product
//        },
//        image() {
//            return this.variants[this.selectedVariant].variantImage
//        },
//        inStock() {
//            return this.variants[this.selectedVariant].variantQuantity
//        },
//        sale() {
//            if (this.onSale) {
//                return this.brand + ' ' + this.product + ' are on sale!'
//            }
//            return this.brand + ' ' + this.product + ' are not on sale'
//        },
//        shipping() {
//            if (this.premium) {
//                return "Free"
//            }
//            else {
//                return 2.99
//            }
//        },
//        mounted() {
//            eventBus.$on('review-submitted', productReview => {
//                this.reviews.push(productReview)
//            })
//        }
//    }
//})

//Vue.component('product-review', {
//    template: `


//    <form class ="review-form" @submit.prevent="onSubmit">
//      <p class ="error" v-if="errors.length">
//          <b>Please correct the following error(s): </b>
//          <ul>
//            <li v-for="error in errors">{{ error }}</li>
//          </ul>
//        </p>

//      <p>
//        <label for="name">Name: </label>
//        <input id="name" v-model="name" placeholder="name">
//      </p>

//      <p>
//        <label for="review">Review: </label>
//        <textarea id="review" v-model="review"></textarea>
//      </p>

//      <p>
//        <label for="rating">Rating: </label>
//        <select id="rating" v-model.number="rating">
//          <option>5</option>
//          <option>4</option>
//          <option>3</option>
//          <option>2</option>
//          <option>1</option>
//        </select>
//      </p>

//      <p>Would you recommend this product?</p>
//        <label>
//          Yes
//          <input type="radio" value="Yes" v-model="recommend"/>
//        </label>
//        <label>
//          No
//          <input type="radio" value="No" v-model="recommend"/>
//        </label>

//      <p>
//        <input type="submit" value="Submit">
//      </p>

//    </form>
//    `,
//    data() {
//        return {
//            name: null,
//            review: null,
//            rating: null,
//            recommend: null,
//            errors: []
//        }
//    },
//    methods: {
//        onSubmit() {
//            this.errors = []
//            if (this.name && this.review && this.rating) {
//                let productReview = {
//                    name: this.name,
//                    review: this.review,
//                    rating: this.rating,
//                    recommend: this.recommend
//                }
//                this.$emit('review-submitted', productReview)
//                this.name = null
//                this.review = null
//                this.rating = null
//                this.recommend = null
//            } else {
//                if (!this.name) this.errors.push('Name required.')
//                if (!this.name) this.errors.push('Review required')
//                if (!this.name) this.errors.push('Rating required')
//                if (!this.recommend) this.erros.push('Recommendation required')
//            }
//        }

//    }
//})

//Vue.component('product-tabs', {
//    props: {
//        reviews: {
//            type: Array,
//            required: false
//        }
//    },
//    template: `
//        <div>
//        <span class ="{activeTab: selectedTab === tab}"
//        v-for="(tab, index) in tabs"
//        : key="index"
//        @click="selectedTab = tab">{{tab}}</span>
//        </div>
//        <div v-show="selectedTab === 'Reviews'"> // moved here from where it was on product component
//                <p v-if="!reviews.length">There are no reviews yet.</p>
//                <ul v-else>
//                    <li v-for="(review, index) in reviews" :key="index">
//                      <p>{{ review.name }}</p>
//                      <p>Rating: {{ review.rating }}</p>
//                      <p>{{ review.review }}</p>
//                    </li>
//                </ul>
//            </div>
//             <div v-show="selectedTab === 'Make a Review'">
//          <product-review></product-review>
//        </div>
//        `,
//    data() {
//        return {
//            tabs: ['Reviews', 'Add a Review'],
//            selectedTab: 'Reviews'
//        }
//    }
//})

//Vue.component('info-tabs', {
//    props: {
//        shipping: {
//            required: true
//        },
//        details: {
//            type: Array,
//            required: true
//        }
//    },
//    template: `
//      <div>
      
//        <ul>
//          <span class="tabs" 
//                :class="{ activeTab: selectedTab === tab }"
//                v-for="(tab, index) in tabs"
//                @click="selectedTab = tab"
//                :key="tab"
//          >{{ tab }}</span>
//        </ul>

//        <div v-show="selectedTab === 'Shipping'">
//          <p>{{ shipping }}</p>
//        </div>

//        <div v-show="selectedTab === 'Details'">
//          <ul>
//            <li v-for="detail in details">{{ detail }}</li>
//          </ul>
//        </div>
    
//      </div>
//    `,
//    data() {
//        return {
//            tabs: ['Shipping', 'Details'],
//            selectedTab: 'Shipping'
//        }
//    }
//})




//var app = new Vue({
//    el: '#app',
//    data: {
//        premium: true,
//        cart: []
//    },
//    methods: {
//        updateCart(id) {
//            this.cart.push(id)
//        },
//        removeItem(id) {
//            for (var i = this.cart.length - 1; i >= 0; i--) {
//                if (this.cart[i] === id) {
//                    this.cart.splice(i, 1);
//                }
//            }
//        }
//    }
//})
//Create tabs for “Shipping” and “Details” that display the shipping cost and product details, respectively.

var eventBus = new Vue()

Vue.component('product', {
    props: {
        premium: {
            type: Boolean,
            required: true
        }
    },
    template: `
     <div class="product">

        <div class="product-image">
          <img :src="image" />
        </div>

        <div class="product-info">
            <h1>{{ product }}</h1>
            <p v-if="inStock">In Stock</p>
            <p v-else>Out of Stock</p>

            <info-tabs :shipping="shipping" :details="details"></info-tabs>

            <div class="color-box"
                 v-for="(variant, index) in variants"
                 :key="variant.variantId"
                 :style="{ backgroundColor: variant.variantColor }"
                 @mouseover="updateProduct(index)"
                 >
            </div>

            <button v-on:click="addToCart"
              :disabled="!inStock"
              :class="{ disabledButton: !inStock }"
              >
            Add to cart
            </button>

         </div>

         <product-tabs :reviews="reviews"></product-tabs>

      </div>
     `,
    data() {
        return {
            product: 'Socks',
            brand: 'Vue Mastery',
            selectedVariant: 0,
            details: ['80% cotton', '20% polyester', 'Gender-neutral'],
            variants: [
              {
                  variantId: 2234,
                  variantColor: 'green',
                  variantImage: 'https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg',
                  variantQuantity: 10
              },
              {
                  variantId: 2235,
                  variantColor: 'blue',
                  variantImage: 'https://www.vuemastery.com/images/challenges/vmSocks-blue-onWhite.jpg',
                  variantQuantity: 0
              }
            ],
            reviews: []
        }
    },
    methods: {
        addToCart() {
            this.$emit('add-to-cart', this.variants[this.selectedVariant].variantId)
        },
        updateProduct(index) {
            this.selectedVariant = index
        }
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product
        },
        image() {
            return this.variants[this.selectedVariant].variantImage
        },
        inStock() {
            return this.variants[this.selectedVariant].variantQuantity
        },
        shipping() {
            if (this.premium) {
                return "Free"
            }
            return 2.99
        }
    },
    mounted() {
        eventBus.$on('review-submitted', productReview => {
            this.reviews.push(productReview)
        })
    }
})


Vue.component('product-review', {
    template: `
    <form class="review-form" @submit.prevent="onSubmit">

      <p>
        <label for="name">Name:</label>
        <input id="name" v-model="name">
      </p>

      <p>
        <label for="review">Review:</label>
        <textarea id="review" v-model="review"></textarea>
      </p>

      <p>
        <label for="rating">Rating:</label>
        <select id="rating" v-model.number="rating">
          <option>5</option>
          <option>4</option>
          <option>3</option>
          <option>2</option>
          <option>1</option>
        </select>
      </p>

      <p>
        <input type="submit" value="Submit">
      </p>

    </form>
    `,
    data() {
        return {
            name: null,
            review: null,
            rating: null,
            errors: []
        }
    },
    methods: {
        onSubmit() {
            this.errors = []
            if (this.name && this.review && this.rating) {
                let productReview = {
                    name: this.name,
                    review: this.review,
                    rating: this.rating
                }
                eventBus.$emit('review-submitted', productReview)
                this.name = null
                this.review = null
                this.rating = null
            }
            else {
                if (!this.name) this.errors.push("Name required.")
                if (!this.review) this.errors.push("Review required.")
                if (!this.rating) this.errors.push("Rating required.")
            }
        }
    }
})

Vue.component('product-tabs', {
    props: {
        reviews: {
            type: Array,
            required: false
        }
    },
    template: `
      <div>

        <ul>
          <span class="tabs"
                :class="{ activeTab: selectedTab === tab }"
                v-for="(tab, index) in tabs"
                @click="selectedTab = tab"
                :key="tab"
          >{{ tab }}</span>
        </ul>

        <div v-show="selectedTab === 'Reviews'">
            <p v-if="!reviews.length">There are no reviews yet.</p>
            <ul v-else>
                <li v-for="(review, index) in reviews" :key="index">
                  <p>{{ review.name }}</p>
                  <p>Rating:{{ review.rating }}</p>
                  <p>{{ review.review }}</p>
                </li>
            </ul>
        </div>

        <div v-show="selectedTab === 'Make a Review'">
          <product-review></product-review>
        </div>

      </div>
    `,
    data() {
        return {
            tabs: ['Reviews', 'Make a Review'],
            selectedTab: 'Reviews'
        }
    }
})

Vue.component('info-tabs', {
    props: {
        shipping: {
            required: true
        },
        details: {
            type: Array,
            required: true
        }
    },
    template: `
      <div>

        <ul>
          <span class="tabs"
                :class="{ activeTab: selectedTab === tab }"
                v-for="(tab, index) in tabs"
                @click="selectedTab = tab"
                :key="tab"
          >{{ tab }}</span>
        </ul>

        <div v-show="selectedTab === 'Shipping'">
          <p>{{ shipping }}</p>
        </div>

        <div v-show="selectedTab === 'Details'">
          <ul>
            <li v-for="detail in details">{{ detail }}</li>
          </ul>
        </div>

      </div>
    `,
    data() {
        return {
            tabs: ['Shipping', 'Details'],
            selectedTab: 'Shipping'
        }
    }
})



var app = new Vue({
    el: '#app',
    data: {
        premium: true,
        cart: []
    },
    methods: {
        updateCart(id) {
            this.cart.push(id)
        }
    }
})

