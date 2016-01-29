describe('Pizza', function() {
  it("selects the size and toppings on the pizza", function() {
    var testPizza = new Pizza ("small", "pepperoni");
    expect(testPizza.toppings).to.equal("pepperoni");
    expect(testPizza.size).to.equal("small");
  });
  it("prices the pizza by size", function() {
    var testPizza = new Pizza ("Small");
    expect(testPizza.sizePricingMethod()).to.equal(8);
  });
  it("prices the pizza adding toppings", function() {
    var testPizza = new Pizza ("Small", ["Pepperoni"]);
    expect(testPizza.toppingsPricingMethod()).to.equal(9);
  });

});

var testTotal = new AllPizzas();
  testTotal.allSelections = [9, 12];

describe('AllPizzas', function() {
  it("takes all pizzas ordered, and creates a totaled order", function() {
    expect(testTotal.allSelections).to.be.a('array')
  });
  it("totals the prices for each pizza", function() {
    expect(testTotal.totalPrice()).to.equal(21);
  });
});
