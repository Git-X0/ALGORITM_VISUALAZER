class BubbleSort extends SortingAnimation {
    async sort() {
        const comparedColor = "goldenrod";
        const sortedColor = "green";
        const unsortedColor = "";
        for (let j = 0; j < this.columns.length; j++) {
            let bound = this.columns.length - j;
            let swap = false;
            for (let i = 1; i < bound; i++) {
                let value1 = this.columns[i - 1].value;
                let value2 = this.columns[i].value;
                this.columns[i - 1].color = comparedColor;
                this.columns[i].color = comparedColor;
                await this.wait(this.waitingTime);
                if (value1 > value2) {
                    await this.wait(this.waitingTime);
                    this.columns[i - 1].value = value2;
                    this.columns[i].value = value1;
                    swap = true;
                }
                this.columns[i - 1].color = unsortedColor;
                this.columns[i].color = unsortedColor;
            }
            this.columns[bound - 1].color = sortedColor;
            if (!swap) {
                for (let i = 0; i < bound; i++) {
                    this.columns[i].color = sortedColor;
                }
                return;
            }
        }
    }
}
