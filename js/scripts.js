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
}

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
    $("#new-pizzas").append('<div class="new-pizza">' +
                    '<div class="form-group">' +
                    '<label for="pizza-size">Choose the Size</label>' +
                    '<input type="text" class="form-control" id="pizza-size">' +
                    '</div>' +
                    '<div class="form-group">' +
                    '<label for="toppings">Choose your Toppings</label>' +
                    '<input type="text" class="form-control" id="toppings">' +
                    '</div>');
                  });

$("form#pizza-order").submit(function(event) {
  event.preventDefault();

  var newAllPizzas = new AllPizzas();

  $(".new-pizza").each(function() {
    var size = $(this).find("input#pizza-size").val();
    var toppings = $(this).find("input#toppings").val();
    var newPizza = new Pizza(size, toppings);
    debugger;

    newAllPizzas.allSelections.push(newPizza.toppingsPricingMethod());
    });

    $("#total").append("The total price of this transaction comes to: $" + newAllPizzas.totalPrice());
  });
});
