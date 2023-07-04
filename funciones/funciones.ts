(() => {
  const hero: string = "flash";
  function name(): string {
    return hero;
  }
  const activate = (): string => {
    return "soy batman";
  };
  console.log(typeof activate);

  const fullName = (fristName: string, lastName: string): string => {
    return `${fristName}${lastName}`;
  };
  const name1 = fullName("toy", "stark");
})();

//args-opcional=============================================
(() => {
  const hero: string = "flash";
  function name(): string {
    return hero;
  }
  const activate = (): string => {
    return "soy batman";
  };
  console.log(typeof activate);

  const fullName = (fristName: string, lastName?: string): string => {
    return `${fristName}${lastName || " no tiene segundo nombre"}`;
  };
  const name1 = fullName("tony");
  console.log(name1);
})();

//parametros por defecto===================================

(() => {
  const fullName = (
    fristName: string,
    lastName?: string,
    upper: boolean = false
  ): string => {
    if (upper) {
      return `${fristName}${
        lastName || " no tiene segundo nombre"
      }`.toUpperCase();
    } else {
      return `${fristName}${lastName || " si tiene segundo nombre"}`;
    }
  };
  const name1 = fullName("tony");
  console.log(name1);
})();

//restArguments ============================================

(() => {
  const fullName = (firstName: string, ...restArgs: string[]): string => {
    return `${firstName}`;
  };

  const superMan = fullName("clark", "joseph", "kent");
})();


