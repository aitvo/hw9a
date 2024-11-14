const calcCircle = () => {
  const pi = Math.PI;
  return {
    circumferanceCalc(radius) {
      return 2 * pi * radius;
    },
    areaCalc(radius) {
      return pi * radius * radius; // You can use the already defined `pi` here
    }
  };
};

// export
module.exports = calcCircle; 