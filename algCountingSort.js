class CountingSort extends SortingAnimation {
    async sort() {
        await this.countingSort(this.columns);
    }
    async countingSort(arr) {
        let min = arr[0].value;
        let max = arr[0].value;
        let minIndex = 0;
        let maxIndex = 0;
        for (let i = 0; i < arr.length; i++) {
            arr[i].color = "goldenrod";
            const temp = arr[i].value;
            await this.wait(this.waitingTime);

            if (temp < min) {
                arr[minIndex].color = "";
                min = temp;
                minIndex = i;
                arr[i].color = "red";
                await this.wait(this.waitingTime);
            } else if (temp > max) {
                arr[maxIndex].color = "";
                max = temp;
                maxIndex = i;
                arr[i].color = "blue";
                await this.wait(this.waitingTime);
            } else {
                arr[i].color = "";
                await this.wait(this.waitingTime);
            }
        }
        arr[minIndex].color = arr[maxIndex].color = "";
        const range = max - min + 1;
        let countArr = new Array(range);
        for (let i = 0; i < range; i++) countArr[i] = 0;
        for (let i = 0; i < arr.length; i++) {
            arr[i].color = "goldenrod";
            const { value } = arr[i];
            countArr[value - min]++;
            await this.wait(this.waitingTime);
            arr[i].color = "";
        }
        for (let i = 1; i < range; i++) {
            countArr[i] += countArr[i - 1];
        }
        const output = new Array(arr.length);
        for (let i = arr.length - 1; i >= 0; i--) {
            const obj = arr[i];
            const { value } = obj;
            output[--countArr[value - min]] = obj;
            this.wait(this.waitingTime);
        }
        for (let i = 0; i < arr.length; i++) {
            arr[i] = output[i];
            arr[i].index = i;
            arr[i].color = "green";
            await this.wait(this.waitingTime * 2);
        }
    }
}
