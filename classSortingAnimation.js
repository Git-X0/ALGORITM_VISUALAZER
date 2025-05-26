class SortingAnimation {
    #container;
    #values;
    columns;
    waitingTime;
    get container() {
        return this.#container;
    }
    constructor(container, values, waitingTime) {
        this.#container = container;
        this.#values = values;
        this.waitingTime = waitingTime;
        this.columns = new Array(values.length);
        let maxValue = Math.max(...values);
        for (let i = 0; i < values.length; i++) {
            const column = new Column(i, values[i]);
            this.columns[i] = column;
            this.#container.appendChild(column.div);
        }
        this.#container.style.setProperty("--max-value", maxValue);
        this.#container.style.setProperty("--column-count", values.length);
    }
    wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    reset = () => {
        for (let i = 0; i < this.#values.length; i++) {
            this.columns[i].value = this.#values[i];
            this.columns[i].color = "";
        }
    };
    cloneValues() {
        return this.#values.map((value) => value);
    }
    async shuffle() {
        for (let i = this.columns.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.columns[i].value, this.columns[j].value] = [
                this.columns[j].value,
                this.columns[i].value,
            ];
            this.columns[i].color = this.columns[j].color = "darkCyan";
            await this.wait(waitingTime ** 1.5);
            this.columns[i].color = this.columns[j].color = "";
        }
    }
    async changeSizeAndValues(newSize) {
        for (let i = 0; i < this.columns.length; i++) {
            this.columns[i].color = "";
        }
        while (this.columns.length > newSize) {
            const column = this.columns.pop();
            column.div.remove();
        }
        while (this.columns.length < newSize) {
            const column = new Column(
                this.columns.length,
                Math.floor(
                    Math.random() *
                        (this.#container.style.getPropertyValue("--max-value") -
                            1 +
                            1) +
                        1
                )
            );
            this.columns.push(column);
            this.#container.appendChild(column.div);
        }
        this.#container.style.setProperty("--column-count", newSize);
    }
    async changeTime(newTime) {
        this.waitingTime = newTime;
    }
}
