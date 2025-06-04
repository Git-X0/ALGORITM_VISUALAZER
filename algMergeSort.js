class MergeSort extends SortingAnimation {
    async sort() {
        const comparedColor = "goldenrod";
        const sortedColor = "green";
        const unsortedColor = "";
        let originalArr = this.cloneValues();
        let auxArr = this.cloneValues();
        for (let i = 0; i < this.columns.length; i++) {
            auxArr[i] = originalArr[i];
        }
        for (let gap = 1; gap < this.columns.length; gap *= 2) {
            for (let min = 0; min < this.columns.length; min += 2 * gap) {
                let mid = min + gap;
                if (mid > this.columns.length) mid = this.columns.length - 1;
                let max = mid + gap;
                if (max > this.columns.length) max = this.columns.length;
                let i = min;
                let j = mid;
                let k = min;
                while (i < mid && j < max) {
                    //debugger;
                    if (originalArr[j] < originalArr[i]) {
                        auxArr[k] = originalArr[j];
                        this.columns[i].color = comparedColor;
                        this.columns[j].color = comparedColor;
                        await this.wait(this.waitingTime);
                        this.columns[i].color = unsortedColor;
                        this.columns[j].color = unsortedColor;
                        this.columns[k++].value = originalArr[j++];
                    } else {
                        auxArr[k] = originalArr[i];
                        this.columns[i].color = comparedColor;
                        this.columns[j].color = comparedColor;
                        await this.wait(this.waitingTime);
                        this.columns[i].color = unsortedColor;
                        this.columns[j].color = unsortedColor;
                        this.columns[k++].value = originalArr[i++];
                    }
                }
                while (i < mid) {
                    auxArr[k] = originalArr[i];
                    this.columns[i].color = comparedColor;
                    await this.wait(this.waitingTime);
                    this.columns[i].color = unsortedColor;
                    this.columns[k++].value = originalArr[i++];
                }
                while (j < max) {
                    auxArr[k] = originalArr[j];
                    this.columns[j].color = comparedColor;
                    await this.wait(this.waitingTime);
                    this.columns[j].color = unsortedColor;
                    this.columns[k++].value = originalArr[j++];
                }
            }
            [originalArr, auxArr] = [auxArr, originalArr];
        }
        for (let i = 0; i < this.columns.length; i++) {
            await this.wait(this.waitingTime / this.columns.length);
            this.columns[i].color = sortedColor;
        }
    }
}
