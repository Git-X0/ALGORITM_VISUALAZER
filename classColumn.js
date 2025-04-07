class Column {
    #index;
    #value;
    #div;
    #color = "";

    get index() {
        return this.#index;
    }
    set index(value) {
        this.#index = value;
        this.#div.style.setProperty("--index", value);
    }

    get value() {
        return this.#value;
    }
    set value(value) {
        this.#value = value;
        this.#div.style.setProperty("--value", value);
    }

    get div() {
        return this.#div;
    }

    get color() {
        return this.#color;
    }
    set color(value) {
        this.#color = value;
        this.#div.style.backgroundColor = value;
    }

    constructor(index, value) {
        this.#div = document.createElement("div");
        this.index = index;
        this.value = value;
        this.#div.style.setProperty("--index", index);
        this.#div.style.setProperty("--value", value);
    }
}
