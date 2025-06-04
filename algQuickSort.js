const comparedColor = "goldenrod";
const sortedColor = "green";
const unsortedColor = "";
const lessThenPivotColor = "blue";
const moreThenPivotColor = "red";
class QuickSort extends SortingAnimation {
    async sort() {
        await this.quick(0, this.columns.length - 1);
    }

    async partition(min, max) {
        let pivotIndex = (min + max) >> 1;
        let pivot = this.columns[pivotIndex].value;
        this.columns[pivotIndex].color = this.columns[max].color =
            comparedColor;
        this.columns[pivotIndex].value = this.columns[max].value;
        this.columns[max].value = pivot;
        let i = min - 1;
        let j = max;
        while (true) {
            do {
                i++;
                this.columns[i].color = lessThenPivotColor;
            } while (i < j && this.columns[i].value < pivot);
            if (i >= j) break;
            do {
                j--;
                this.columns[j].color = moreThenPivotColor;
            } while (i < j && this.columns[j].value > pivot);
            if (i >= j) break;
            await this.wait(this.waitingTime * 3);
            [this.columns[i].value, this.columns[j].value] = [
                this.columns[j].value,
                this.columns[i].value,
            ];
        }
        this.columns[max].value = this.columns[i].value;
        this.columns[i].value = pivot;
        this.columns[max].color = this.columns[i].color = unsortedColor;
        this.columns[pivotIndex].color = sortedColor;
        return i;
    }

    async quick(min, max) {
        if (min < max) {
            let pivotIndex = await this.partition(min, max);
            this.columns[pivotIndex].color = sortedColor;
            await this.quick(min, pivotIndex - 1);
            await this.quick(pivotIndex + 1, max);
        } else {
            if (max >= 0) this.columns[max].color = sortedColor;
        }
    }
}
