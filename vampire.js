class Vampire {
  constructor(name, yearConverted) {
    this.name = name;
    this.yearConverted = yearConverted;
    this.offspring = [];
    this.creator = null;
  }

  /** Simple tree methods **/

  // Adds the vampire as an offspring of this vampire
  addOffspring(vampire) {
    this.offspring.push(vampire);
    vampire.creator = this;


  }

  // Returns the total number of vampires created by that vampire
  get numberOfOffspring() {
    return this.offspring.length;

  }

  // Returns the number of vampires away from the original vampire this vampire is
  get numberOfVampiresFromOriginal() {
    let numOfVamps = 0;
    let currentVamp = this;

    while (currentVamp.creator) {
      currentVamp = currentVamp.creator;
      numOfVamps++;
    }
    return numOfVamps;

  }

  // Returns true if this vampire is more senior than the other vampire. (Who is closer to the original vampire)
  isMoreSeniorThan(vampire) {
    if (vampire.numberOfVampiresFromOriginal > this.numberOfVampiresFromOriginal) {
      return true;
    } else {
      return false;
    }

  }

  /** Tree traversal methods **/

  // Returns the vampire object with that name, or null if no vampire exists with that name
  vampireWithName(name) {
    
  }

  // Returns the total number of vampires that exist
  get totalDescendents() {
    
  }

  // Returns an array of all the vampires that were converted after 1980
  get allMillennialVampires() {
    
  }

  /** Stretch **/

  // Returns the closest common ancestor of two vampires.
  // The closest common anscestor should be the more senior vampire if a direct ancestor is used.
  // For example:
  // * when comparing Ansel and Sarah, Ansel is the closest common anscestor.
  // * when comparing Ansel and Andrew, Ansel is the closest common anscestor.
  closestCommonAncestor(vampire) {
    let currentVamp = this;

    while (currentVamp.creator)
    if (currentVamp.creator === vampire) {
      return vampire.name;
      break;
    } else if (currentVamp.creator.offspring.includes(vampire)) {
      return currentVamp.creator.name;
      break;
    } else {
      currentVamp = currentVamp.creator;
    }
  }
}

const original = new Vampire("Original", 1880);
const ansel = new Vampire("Ansel", 1910);
const bart = new Vampire("Bart", 1920);
const sam = new Vampire("Sam", 1940);

const elgort = new Vampire("Elgort", 1965);
const sarah = new Vampire("Sarah", 1970);

const andrew = new Vampire("Andrew", 1999);

//create offspring
original.addOffspring(ansel);
original.addOffspring(bart);
original.addOffspring(sam);

ansel.addOffspring(elgort);
ansel.addOffspring(sarah);

elgort.addOffspring(andrew);

console.log(original.closestCommonAncestor(bart));






module.exports = Vampire;

