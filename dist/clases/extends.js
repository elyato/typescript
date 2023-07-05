"use strict";
(() => {
    class Avenger {
        constructor(name, realname) {
            this.name = name;
            this.realname = realname;
            console.log("const cree una class");
        }
        getFullName() {
            return `${this.name} ${this.realname}`;
        }
    }
    class Xmen extends Avenger {
        constructor(name, realname, isMutant) {
            super(name, realname);
            this.isMutant = isMutant;
            console.log("constructor xmen llamado ");
        }
    }
    const wolverine = new Xmen("wolverine", "logan", true);
    console.log(wolverine);
})();
//# sourceMappingURL=extends.js.map