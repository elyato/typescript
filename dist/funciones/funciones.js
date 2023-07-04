"use strict";
(() => {
    const hero = "flash";
    function name() {
        return hero;
    }
    const activate = () => {
        return "soy batman";
    };
    console.log(typeof activate);
    const fullName = (fristName, lastName) => {
        return `${fristName}${lastName}`;
    };
    const name1 = fullName("toy", "stark");
})();
(() => {
    const hero = "flash";
    function name() {
        return hero;
    }
    const activate = () => {
        return "soy batman";
    };
    console.log(typeof activate);
    const fullName = (fristName, lastName) => {
        return `${fristName}${lastName || " no tiene segundo nombre"}`;
    };
    const name1 = fullName("tony");
    console.log(name1);
})();
(() => {
    const fullName = (fristName, lastName, upper = false) => {
        if (upper) {
            return `${fristName}${lastName || " no tiene segundo nombre"}`.toUpperCase();
        }
        else {
            return `${fristName}${lastName || " si tiene segundo nombre"}`;
        }
    };
    const name1 = fullName("tony");
    console.log(name1);
})();
(() => {
    const fullName = (firstName, ...restArgs) => {
        return `${firstName} ${restArgs.join(" ")}`;
    };
    const superMan = fullName("clark");
    console.log(superMan);
})();
(() => {
    const addNumber = (a, b) => a + b;
    const greet = (name) => `Hola ${name}`;
    const saveTheWord = () => `salve el planeta siu`;
    let myFunction;
    myFunction = addNumber;
    console.log(myFunction(7, 5));
    myFunction = greet;
    console.log(myFunction("cristian"));
    myFunction = saveTheWord;
    console.log(myFunction());
})();
//# sourceMappingURL=funciones.js.map