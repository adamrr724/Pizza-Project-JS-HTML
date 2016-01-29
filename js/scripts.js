function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
  this.minPizzaCost = 8;
  this.sizePizzaCost = this.sizePricingMethod();
}

Pizza.prototype.sizePricingMethod = function () {

  if (this.size === "Small") {
    return this.minPizzaCost;
  } else if (this.size === "Medium") {
    return this.minPizzaCost + 3;
  }
 return this.minPizzaCost + 6;
};

Pizza.prototype.toppingsPricingMethod = function () {

for (var i = 0; i < this.toppings.length; i++) {
  this.sizePizzaCost += 1;
}
return this.sizePizzaCost;
}

var newPizza = new Pizza ("Medium", ["Pepperoni", "Green Peppers"]);
