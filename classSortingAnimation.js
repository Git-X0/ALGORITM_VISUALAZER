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
    int = 0;
    wait = (ms) => {
        this.int++;
        let mod = Math.floor(Math.sqrt(this.#values.length) / 2);
        if (ms === 1 && this.#values.length > 500 && this.int % mod !== 0) {
            return null;
        }
        return new Promise((resolve) => setTimeout(resolve, ms));
    };
    reset = () => {
        for (let i = 0; i < this.#values.length; i++) {
            this.columns[i].value = this.#values[i];
            this.columns[i].color = "";
        }
    };
    cloneValues() {
        return [...this.#values];
    }
    async shuffle() {
        for (let i = this.columns.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.columns[i].value, this.columns[j].value] = [
                this.columns[j].value,
                this.columns[i].value,
            ];
            this.columns[i].color = this.columns[j].color = "darkCyan";
            await this.wait((waitingTime / this.waitingTime) * 2);
            this.columns[i].color = this.columns[j].color = "";
        }
    }
    async changeSizeAndValues(newSize) {
        const removeColumns = this.columns.length - newSize;
        if (removeColumns > 0) {
            for (let i = 0; i < removeColumns; i++) {
                this.columns.pop().div.remove();
            }
        } else {
            const addColumns = newSize - this.columns.length;
            for (let i = 0; i < addColumns; i++) {
                const column = new Column(
                    this.columns.length,
                    Math.floor(
                        Math.random() *
                            (this.#container.style.getPropertyValue(
                                "--max-value"
                            ) -
                                1 +
                                1) +
                            1
                    )
                );
                this.columns.push(column);
                this.#values.push(column.value);
                this.#container.appendChild(column.div);
            }
        }
        this.#container.style.setProperty("--column-count", newSize);
    }
    async changeTime(newTime) {
        this.waitingTime = newTime;
    }
}
