class Animal {
  constructor(public model: string) {}
  getCarModel() {}
}

const shop: Array<Animal> = [new Animal("Cat"), new Animal("Dog")];

const getPrice = (auto: Array<Animal>): string | void => {
  for (let i = 0; i < auto.length; i++) {
    switch (auto[i].model) {
      case "Cat":
        return "800$";
      case "Dog":
        return "1000$";
      default:
        return "No Animal Price";
    }
  }
};

getPrice(shop);
