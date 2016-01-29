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
