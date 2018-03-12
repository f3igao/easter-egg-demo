document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");
});

// instantiate a variable with a new class of Egg
const egg = new Egg();

// specify the combo (keystrokes that need to be pressed) to unlock your easter egg and save it to a varaible
const instructions = "f,l,a,t,i,r,o,n"

// define the function you want to run when egg is triggered
function triggered() {
  console.log("triggered flatiron easter egg");
}

// use the addCode() function to add the both to the egg instance

// use the addHook() function to add a hook that will run after any egg code is triggered. Since hooks can tap into a module and get access to the entire Egg.js library, you can pull information about the easter egg that fired via this.activeEgg.

egg.addCode(instructions, triggered)
   .addHook(function () {
        console.log("Hook called for: " + this.activeEgg.keys);
        console.log(this.activeEgg.metadata);
   }).listen();
