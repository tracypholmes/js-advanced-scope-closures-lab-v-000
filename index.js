function produceDrivingRange(blockRange) {
  return function(startBlock, endBlock) {
    let start = parseInt(startBlock);
    let end = parseInt(endBlock);
    let distance = Math.abs(end - start);
    let range = blockRange - distance;

    if (range > 0) {
      return `within range by ${range}`;
    } else {
      return `${Math.abs(range)} blocks out of range`;
    }
  };
}

function produceTipCalculator(tip) {
  return function(price) {
    return price * tip;
  };
}

function createDriver() {
  let driverId = 0;
  return class {
    constructor(name) {
      this.name = name;
      this.id = ++driverId;
    }
  };
}
