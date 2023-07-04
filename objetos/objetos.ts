(() => {
  let flash: {
    name1: string;
    age?: number;
    powers: number[];
    getNombre?: () => string;
  } = {
    name1: "Barry Allen",
    age: 24,
    powers: [1, 2],
  };

  const superman: { name1: string; age: number; powers: string[] } = {
    name1: "clark kent",
    age: 40,
    powers: ["super velocidad"],
  };

  console.log(flash);

  //type

  type Hero = {
    name: string;
    age?: number;
    powers: string[];
    getName?: () => string;
  };

  const batman: Hero = {
    name: "Barry Allen",
    age: 24,
    powers: ["s", "s"],
  };

  const mujerMaravilla: Hero = {
    name: "mujer",
    age: 30,
    powers: ["latigo"],
  };

  console.log(flash);
  type Heros = {
    name: string;
    age?: number;
    powers: string[];
    getName?: () => string;
  };

  let myCustomVariable: string | number | Heros = "cristian";
  console.log(myCustomVariable);
})();
