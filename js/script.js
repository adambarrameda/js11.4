// SkillCrush Javascript 11.4
// Factory Function Pattern for Pets

// Starter Code
const statusButton = document.querySelector("button");
const pets = document.querySelector(".all-pets");

// Create a Factory Function & Add Properties
const createPet = function(name, species){
    const pet = {
        name: name,
        species: species,
        isTired: 5,
        // Create a Method for Sleep
        sleep: function(){
            console.log(`${this.name} needs a nap. Zzz...`);
            this.isTired = 1;
        },
        // Create a Method for Playtime
        play: function(){
            if (this.isTired == 10){
                console.log("Too tired to play.");
                this.sleep();
            } else {
                console.log(`Yay! ${this.name} loves to play!`);
                this.isTired ++;
            }
        }
    };
    return pet;
};

// Create 5 New Objects
const sora = createPet("Sora", "ferret");
const clover = createPet("Clover", "rabbit");
const baxter = createPet("Baxter", "hamster");
const cleo = createPet("Cleo", "rat");
const francine = createPet("Francine", "turtle");

// Verify Objects & Methods
// console.log(sora, clover, baxter, cleo, francine);
// console.log(sora);
// console.log(clover);
// console.log(baxter);
// console.log(cleo);
// console.log(francine);

// clover.sleep();
// baxter.play();
// console.log(clover);
// console.log(baxter);