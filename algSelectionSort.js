class SelectionSort extends SortingAnimation {
    async sort() {
        const comparedColor = "goldenrod";
        const sortedColor = "green";
        const unsortedColor = "";
        for (let i = 0; i < this.columns.length - 1; i++) {
            let minIndex = i;
            for (let j = i + 1; j < this.columns.length; j++) {
                this.columns[j].color = comparedColor;
                await this.wait(waitingTime);
                if (this.columns[j].value < this.columns[minIndex].value) {
                    if (minIndex !== i) {
                        this.columns[minIndex].color = unsortedColor;
                    }
                    minIndex = j;
                } else {
                    this.columns[j].color = unsortedColor;
                }
            }
            await this.wait(waitingTime);
            if (minIndex !== i) {
                [this.columns[i].value, this.columns[minIndex].value] = [
                    this.columns[minIndex].value,
                    this.columns[i].value,
                ];
                this.columns[minIndex].color = unsortedColor;
            }
            this.columns[i].color = sortedColor;
        }
        this.columns[this.columns.length - 1].color = sortedColor;
    }
}
