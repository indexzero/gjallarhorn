process.send({ message: 1 });

setTimeout(function () {
  process.send({ message: 2 });
  process.send({ __finished: true });
}, 100);
