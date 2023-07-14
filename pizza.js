document.addEventListener('alpine:init', () => {

    Alpine.data('pizzaCartWithAPIWidget', () => {
        return {
            title: 'Perfect Pizza with API',
            pizzas : [],
            username: 'Thato-K',
            cartId: 'eK85AcIPeF',
            cartPizzas : [],
            cartTotal : 0.00,


            getCart() {
              const getCartURL = `http://pizza-api.projectcodex.net/api/pizza-cart/${this.cartId}/get`
              return axios.get(getCartURL);
            }, 
            
            showCartData() {
              this.getCart().then(result => {
                const cartData = result.data;

                this.cartPizzas = cartData.pizzas;
                this.cartTotal = cartData.total.tofixed(2);
                
              });
            },

            init() {
                axios
                .get('https://pizza-api.projectcodex.net/api/pizzas')
                .then((result) => {
                 console.log(result.data);
                 this.Pizzas = result.data.pizzas;
            });

            this.showCartData();       

        },

      totalCost: 0,
      message: '',
      modal: false,
      cart: {
        large: 0,
        medium: 0,
        small: 0,
      },
      largeCount: 0,
      largePrice: 90,
      paymentAmount: 0,
      largePizzaTotalPrice: 0,
  
      addLargePizza() {
        this.largeCount++;
        this.largePizzaTotalPrice = this.largePrice * this.largeCount;
        this.cart.large++;
        this.updateTotalCost();
      },
  
      subtractLargePizza() {
        if (this.largeCount > 0) {
          this.largeCount--;
          this.largePizzaTotalPrice = this.largePrice * this.largeCount;
          this.cart.large--;
          this.updateTotalCost();
        }
      },
  
      mediumCount: 0,
      mediumPrice: 60,
      mediumPizzaTotalPrice: 0,
  
      addMediumPizza() {
        this.mediumCount++;
        this.mediumPizzaTotalPrice = this.mediumPrice * this.mediumCount;
        this.cart.medium++;
        this.updateTotalCost();
      },
  
      subtractMediumPizza() {
        if (this.mediumCount > 0) {
          this.mediumCount--;
          this.mediumPizzaTotalPrice = this.mediumPrice * this.mediumCount;
          this.cart.medium--;
          this.updateTotalCost();
        }
      },
  
      smallCount: 0,
      smallPrice: 35,
      smallPizzaTotalPrice: 0,
  
      addSmallPizza() {
        this.smallCount++;
        this.smallPizzaTotalPrice = this.smallPrice * this.smallCount;
        this.cart.small++;
        this.updateTotalCost();
      },
  
      subtractSmallPizza() {
        if (this.smallCount > 0) {
          this.smallCount--;
          this.smallPizzaTotalPrice = this.smallPrice * this.smallCount;
          this.cart.small--;
          this.updateTotalCost();
        }
      },
  
      updateTotalCost() {
        this.totalCost =
          this.largePrice * this.cart.large +
          this.mediumPrice * this.cart.medium +
          this.smallPrice * this.cart.small;
      },

    }

    });
});

Alpine.start ()
