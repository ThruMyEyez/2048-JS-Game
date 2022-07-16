export default class Tile {
  #tileElement
  #x
  #y
  #value
    //creating random tiles numbers with 50% chance for a 2 or a 4.
  constructor(tileContainer, value = Math.random() > .5 ? 2 : 4) {
    this.#tileElement = document.createElement("div");
    this.#tileElement.classList.add("tile");
    tileContainer.append(this.#tileElement);
    this.value = value;
  }

  get value() {
    return this.#value;
  }

  set value(v) {
    this.#value = v;
    this.#tileElement.textContent = v;
    const power = Math.log2(v);
    const backgroundLightness = 100 - power * 9; //if power gets bigger decrease bg-lightness
    this.#tileElement.style.setProperty("--background-lightness", `${backgroundLightness}%`);
    this.#tileElement.style.setProperty("--text-lightness", `${backgroundLightness <= 50 ? 90 : 10}%`) //if bg lightness is less or equal to 50 use a bright color.
  }

  set x(value) {
    this.#x = value; 
    this.#tileElement.style.setProperty("--x", value);
  }

  set y(value) {
    this.#y = value;
    this.#tileElement.style.setProperty("--y", value);
  }
  remove() {
    this.#tileElement.remove();
  }

  waitForTransition() {
    return new Promise(resolve => {
      this.#tileElement.addEventListener("transitionend", resolve, { once: true})
    });
  }
}