function createInventoryItem(name, category, price) {
  let obj= {};

    this.name=name,
    this.category=category,
    this.price=price,
    describeItem = function() {
      console.log(`Item: ${this.name}, Category: ${this.category}, Price: ${this.price}`);
    }
    return obj
  };

function addItemDiscount(inventoryItem, discountPercent) {
  let obj2 = createInventoryItem(name,category,price)
  obj2.inventoryItem =inventoryItem;
  obj2.describeItem=discountPercent;
  return obj2;
  };


let ob = addItemDiscount()
