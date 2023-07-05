() => {
  type Vengadores = {
    name: string;
    waapon: string;
  };
  const iroman: Vengadores = {
    name: "cap",
    waapon: "armadura",
  };
  const cap: Vengadores = {
    name: "asas",
    waapon: "escudo",
  };
  const hulk: Vengadores = {
    name: "bruce",
    waapon: "puños",
  };

  const elVengador = [iroman, cap, hulk];

  for (const xd of elVengador) {
    console.log(xd);
  }
};
