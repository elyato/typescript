(() => {
  class Avenger {
    constructor(public name: string, public realname: string) {
      console.log("const cree una class");
    }
    private getFullName() {
      return `${this.name} ${this.realname}`;
    }
  }

  class Xmen extends Avenger {

    constructor(name: string, realname: string, public isMutant: boolean) {
      super(name, realname);
      console.log("constructor xmen llamado ");
    }
  }

  const wolverine = new Xmen("wolverine", "logan", true);
  console.log(wolverine);
})();


//==================== interfaces ===============
interface Avenger {
  name: string;
  realname: string;
}

interface xmen extends Avenger {
  isMutant: boolean;
  
}
// const wolverine = new 
// console.log();
