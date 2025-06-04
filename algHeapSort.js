class HeapSort extends SortingAnimation {
    async sort() {
        const comparedColor = "goldenrod";
        const sortedColor = "green";
        const unsortedColor = "";
        let count = this.columns.length;
        for (let i = (this.columns.length >> 1) - 1; i >= 0; i--) {
            await this.siftDown(this.columns, i, count);
        }
        for (count--; count > 0; count--) {
            [this.columns[0].value, this.columns[count].value] = [
                this.columns[count].value,
                this.columns[0].value,
            ];
            this.columns[0].color = comparedColor;
            this.columns[count].color = sortedColor;
            await this.siftDown(this.columns, 0, count);
        }
    }

    async siftDown(arr, index, count) {
        let parentValue = arr[index].value;
        arr[index].color = comparedColor;
        while (true) {
            let firstChildIndex = index * 2 + 1;
            if (firstChildIndex >= count) return;
            let secondChildIndex = firstChildIndex + 1;
            let childIndex = firstChildIndex;
            let childValue = arr[firstChildIndex].value;
            if (
                secondChildIndex < count &&
                childValue < arr[secondChildIndex].value
            ) {
                await this.wait(this.waitingTime * 1.5);
                childIndex = secondChildIndex;
                childValue = arr[secondChildIndex].value;
                await this.wait(this.waitingTime);
                arr[index].color = unsortedColor;
            }
            if (parentValue < childValue) {
                await this.wait(this.waitingTime * 1.5);
                arr[index].value = childValue;
                arr[childIndex].value = parentValue;
                index = childIndex;
                await this.wait(this.waitingTime * 1.5);
                arr[index].color = unsortedColor;
            } else {
                arr[index].color = unsortedColor;
                return;
            }
        }
    }
}
