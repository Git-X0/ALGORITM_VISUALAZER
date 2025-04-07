class InsertionSort extends SortingAnimation {
    async sort() {
        const comparedColor = "goldenrod";
        const sortedColor = "green";
        const unsortedColor = "";

        for (let i = 1; i < this.columns.length; i++) {
            let value = this.columns[i].value;
            let j = i - 1;
            while (j >= 0 && this.columns[j].value > value) {
                this.columns[j + 1].color = comparedColor;
                this.columns[j].color = comparedColor;
                await this.wait(this.waitingTime);
                this.columns[j + 1].value = this.columns[j].value;
                this.columns[j].color = unsortedColor;
                this.columns[j + 1].color = unsortedColor;
                j--;
            }
            this.columns[j + 1].value = value;
            await this.wait(this.waitingTime);
        }
        for (let i = 0; i < this.columns.length; i++) {
            await this.wait(this.waitingTime);
            this.columns[i].color = sortedColor;
            await this.wait(this.waitingTime);
        }
    }
}
