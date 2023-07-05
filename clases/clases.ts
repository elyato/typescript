(() => {
  class Avenger {
    static avgAge: number = 35;
      
    constructor(
      private name: string,
      public team: string,
      public realName?: string
    ) {
      this.name = name;
      this.team = team;
      this.realName = realName;
    }
    bio() {
      return `${this.name} (${this.team})`;
    }
  }

  const antman: Avenger = new Avenger("antman", "ironman", "scott");
  console.log(antman);

  console.log(antman.bio());
})();
