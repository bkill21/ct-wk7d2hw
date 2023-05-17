// Question 1
const shopItems=[{
    id:1,
    name:"Air Max 97",
    price:130.00,
    desc:"The design of the shoe is commonly thought to be inspired by the bullet trains of Japan, but the design was inspired by mountain bikes. ",
    category:"shoes"
},{
    id:2,
    name:"Adidas NMD R1",
    price:128,
    desc:"New-wave classics, with a timeless vintage design: men’s NMD R1 gear is the ultimate go-anywhere shoe. Vibrant styles and soft cushioning will have you gliding through life, wherever it may take you.",
    category:"shoes"
},{
    id:3,
    name:"Gucci Oversize T-shirt with Interlocking G",
    price:580,
    desc:"The now recognizable oversize Gucci T-shirt continues to evolve with each new collection, the Interlocking G print is influenced by an '80s design from the archives. Streetwear continues to be a defining feature of Gucci's collections and is often juxtaposed by tailored separates.",
    category:"shirts"
},{
    id:4,
    name:"Nike Sportswear Club",
    price:18.97,
    desc:"The Nike Sportswear Club T-Shirt is made with our everyday cotton fabric and a classic fit for a familiar feel right out of the bag. An embroidered Futura logo on the chest provides a signature Nike look.",
    category:"shirts"
},{
    id:5,
    name:"Spanx Flare Jeans, Vintage Indigo",
    price:148,
    desc:"These 70s inspired flare jeans are the perfect wear everywhere with anything style. Designed with premium stretch denim, high-rise coverage and hidden core shaping technology, this jean puts a new twist on a retro silhouette.",
    category:"pants"
},{
    id:6,
    name:"Bonobos Premium Stretch Jeans",
    price:69,
    desc:"Resilient stretch denim made incredibly soft. Yes, jeans can be unbelievably comfortable.",
    category:"pants"
}]

shopItems.forEach(item => {
    console.log(`=======================================
  Name:     ${item.name}
  Price:    ${item.price}
  About:    ${item.desc}
  Category: ${item.category}
  =======================================`);
  });
//===============================
// Question 2
const hwPerson = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

function favFood(obj) {
    for (let key in obj) {
      console.log(`${key} contains:`);
      if (Array.isArray(obj[key])) {
        console.log(obj[key].join('\n'));
      }
      else if (typeof obj[key] === 'object') {
        for (let subKey in obj[key][0]) {
          console.log(`${subKey}: ${obj[key][0][subKey]}`);
        }
      }
      else {
        console.log(obj[key]);
      }
      console.log('\n');
    }
  }

favFood(hwPerson);

//================================
// Question 3
function checkStringLength(str) {
    return new Promise((resolve, reject) => {
      if (str.length > 10) {
        resolve('Big string');
      } else {
        reject('Small string');
      }
    });
  }

checkStringLength('this is a string')
.then(message => {
console.log(message);
})
.catch(error => {
console.log(error);
});

//================================
// Question 4
function randomNumber() {
    return Math.floor(Math.random() * 12) + 1;
  }

class GameMember {
    constructor() {
        this.hand = [randomNumber(), randomNumber()];
    }

    hit() {
        const newCard = randomNumber();
        this.hand.push(newCard);
    }
    }

class Dealer extends GameMember {
    hit() {
        if (this.calculateTotal() < 17) {
        super.hit();
        }
    }

    calculateTotal() {
        return this.hand.reduce((total, card) => total + card, 0);
    }
    }

class Player extends GameMember {
    hit() {
        if (this.calculateTotal() < 21) {
        super.hit();
        }
    }

    calculateTotal() {
        return this.hand.reduce((total, card) => total + card, 0);
    }
    }

//================================
// Question 5

// 1:
// https://www.codewars.com/kata/585db3e8eec141ce9a00008f/solutions/javascript
// 2:
// https://www.codewars.com/kata/54e6533c92449cc251001667/solutions/javascript
// 3:
// https://www.codewars.com/kata/54d81488b981293527000c8f/solutions/javascript