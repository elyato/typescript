(() => {
  const batman: string = "batman";
  const linternaVerde: string = "linterna verde ";
  const volcanNegro: string = "heroe:Volcan negro";
  const abc = 123;

  console.log(`yo soy ${batman} ${abc.toString}`);
  console.log(batman[10]?.toLowerCase() || "socio no hay nada");

  console.log(batman.toLowerCase());
})();
