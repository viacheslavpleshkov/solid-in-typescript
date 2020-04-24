interface TeslaSet {
  getTeslaSet(): any;
}

interface AudiSet {
  getAudiSet(): any;
}

interface BmwSet {
  getBmwSet(): any;
}

class Tesla implements TeslaSet {
  getTeslaSet(): any {}
}

class Audi implements AudiSet {
  getAudiSet(): any {}
}

class Bmw implements BmwSet {
  getBmwSet(): any {}
}
