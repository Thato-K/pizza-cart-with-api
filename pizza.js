// document.addEventListener('alpine:init', () => {

//     alpine.data('pizzaCartWithAPIWidget', {
//         return { 
//             pizzas : [],
//             init() {
//                 axios
//                 //.get('https://pizza-api.projectcodex.net/api/pizzas')
//                 //.then((result) => {
//                  //console.log(result.data);
        
//                 pizzas = result.data.pizzas
        
//             }) 

//         }

//     }

//     });
// });


document.addEventListener('pizzaCartWithAPIWidget', function () {
    const app = {
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
    };
  
    
    Alpine.data('app', () => app);
  });
  
