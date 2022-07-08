// REDUX
// Define how other objects are communicated with other objects, alter how the app is execute

// We need to use Immediate invoked function expression (IIFE)

const mediador = (() => {
  const events = {};

  const subscribe = (even, fn) => {
    if (!events[even]) {
      events[even] = [];
    }
    events[even].push(fn);
  };

  const dispatch = (even, payload) => {
    if (!events[even]) {
      return false;
    }
    events[even].forEach((fn) => {
      fn(payload);
    });
  };
})();

mediador.subscribe("login", ({ username, password }) => {
});
medidor.dispatch("login", { username: "Cristian", password: "1234" });
