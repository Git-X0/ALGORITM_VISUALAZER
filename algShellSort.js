class ShellSort extends SortingAnimation {
    async sort() {
        const comparedColor = "goldenrod";
        const sortedColor = "green";
        const unsortedColor = "";
        for (let gap = arr.length >> 1; gap > 0; gap = gap >>= 1) {
            for (let i = gap; i < this.columns.length; i++) {
                let value = this.columns[i].value;
                let j = i - gap;
                while (j >= 0 && this.columns[j].value > value) {
                    this.columns[j + 1].color = comparedColor;
                    this.columns[j].color = comparedColor;
                    await this.wait(waitingTime);
                    this.columns[j + gap].value = this.columns[j].value;
                    this.columns[j].color = unsortedColor;
                    this.columns[j + gap].color = unsortedColor;
                    j-=gap;
                }
                this.columns[j + gap].value = value;
                await this.wait(waitingTime);
            }
            for (let i = 0; i < this.columns.length; i++) {
                await this.wait(waitingTime);
                this.columns[i].color = sortedColor;
                await this.wait(waitingTime);
            }
        }
    }
}