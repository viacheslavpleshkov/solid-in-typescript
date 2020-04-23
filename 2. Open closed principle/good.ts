abstract class AnimalPrice {
  abstract getPrice(): string;
}

class Dog extends AnimalPrice {
  getPrice() {
    return "800$";
  }
}

class Cat extends AnimalPrice {
  getPrice() {
    return "1000$";
  }
}

const shop: Array<AnimalPrice> = [new Dog(), new Cat()];

const getPrice = (auto: Array<AnimalPrice>): string | void => {
  for (let i = 0; i < auto.length; i++) {
    auto[i].getPrice();
  }
};

getPrice(shop);
