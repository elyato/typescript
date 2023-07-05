(() => {
  type avenger = {
    nick: string;
    iroman: string;
    vision: string;
    activo: boolean;
    poder: number;
  };
  const avengers: avenger = {
    nick: "samuel",
    iroman: "robert",
    vision: "paul",
    activo: true,
    poder: 1500,
  };

  const printAvenger = ({ iroman }: avenger) => {
    console.log(iroman);
  };
  // const { poder, vision } = avengers;
  // console.log(poder,vision);

  const avengersArray: string[] = ["cap america", "iroman", "hulk"];

  const [, iroman] = avengersArray;
})();
