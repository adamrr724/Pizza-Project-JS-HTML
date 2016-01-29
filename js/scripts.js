function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
  this.minPizzaCost = 8;
  this.sizePizzaCost = this.sizePricingMethod();
}

function AllPizzas() {
  this.allSelections = [];
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
};

AllPizzas.prototype.totalPrice = function () {
  var total = 0
  for (var i = 0; i < this.allSelections.length; i++) {
    total += this.allSelections[i];
  }
return total;
}

// USER INTERFACE LOGIC

$(document).ready(function() {

  $("#add-extra-pizza").click(function() {
    $("#new-pizzas").append('<div class="new-pizza"><h4>Please fill in the details for the next pizza:</h4><div class="size form-group"><label class="titles" for="pizza-size">Choose the Size:</label> <br><input class="size-box" type="checkbox" value="Small"> Small <input class="size-box" type="checkbox" value="Medium"> Medium <input class="size-box" type="checkbox" value="Large"> Large </div><div class="toppings form-group"><label class="titles" for="toppings">Choose your Toppings:</label> <br><h6>Veggies:</h6><input class="toppings-box" type="checkbox" value="Broccoli"> Broccoli <input class="toppings-box" type="checkbox" value="Peppers"> Peppers <input class="toppings-box" type="checkbox" value="Onion"> Onion <input class="toppings-box" type="checkbox" value="Garlic"> Garlic <input class="toppings-box" type="checkbox" value="Tomatoes"> Tomatoes <input class="toppings-box" type="checkbox" value="Olives"> Olives <input class="toppings-box" type="checkbox" value="Basil"> Basil <input class="toppings-box" type="checkbox" value="Arugala"> Arugala <input class="toppings-box" type="checkbox" value="Spinach"> Spinach <input class="toppings-box" type="checkbox" value="Mushrooms"> Mushrooms <br><h6>Meats:</h6><input class="toppings-box" type="checkbox" value="Pepperoni"> Pepperoni <input class="toppings-box" type="checkbox" value="Ham"> Ham <input class="toppings-box" type="checkbox" value="Meatball"> Meatball <input class="toppings-box" type="checkbox" value="Chicken"> Chicken <input class="toppings-box" type="checkbox" value="Sausage"> Sausage <input class="toppings-box" type="checkbox" value="Shrimp"> Shrimp <br><h6>Extras:</h6><input class="toppings-box" type="checkbox" value="Pineapple"> Pineapple <input class="toppings-box" type="checkbox" value="BBQ Sauce"> BBQ Sauce <input class="toppings-box" type="checkbox" value="Ranch"> Ranch <input class="toppings-box" type="checkbox" value="Extra Mozzarella"> Extra Mozzarella <input class="toppings-box" type="checkbox" value="Blue Cheese"> Blue Cheese <input class="toppings-box" type="checkbox" value="Parmasean">   Parmasean <input class="toppings-box" type="checkbox" value="Basil Pesto"> Basil Pesto </div></div>');

  });

$("form#pizza-order").submit(function(event) {
  event.preventDefault();

  var newAllPizzas = new AllPizzas();

  $(".new-pizza").each(function() {
    var size = $(this).find(".size-box:checked").val();
    var toppings = $(this).find(".toppings-box:checked").map(function() {
    return this.value;
    })

    var toppingsView = $.makeArray(toppings);

    $("#total").append("You have ordered 1 " + size.toLowerCase() + " pizza, with the following toppings: " + toppingsView.join(", ") + ".<br>");
    var newPizza = new Pizza(size, toppings);

    newAllPizzas.allSelections.push(newPizza.toppingsPricingMethod());

    });

    $("#total").append("The total price of this transaction comes to: <br><span id='total-price'>$" + newAllPizzas.totalPrice() + ".00</span>");
    $(".results").show();
  });
});
