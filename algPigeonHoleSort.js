class PigeonHoleSort extends SortingAnimation {
    async sort() {
        await this.pigeonHolesort(this.columns);
    }
    async pigeonHolesort(arr) {
        let min = arr[0].value;
        let max = arr[0].value;
        let minIndex = 0;
        let maxIndex = 0;
        for (let i = 1; i < arr.length - 1; i++) {
            arr[i].color = "goldenrod";
            const temp = arr[i].value;
            await this.wait(this.waitingTime);
            if (temp < min) {
                arr[minIndex].color = "";
                minIndex = i;
                min = temp;
                arr[i].color = "red";
                await this.wait(this.waitingTime);
            } else if (temp > max) {
                arr[maxIndex].color = "";
                maxIndex = i;
                max = temp;
                arr[i].color = "blue";
                await this.wait(this.waitingTime);
            } else {
                arr[i].color = "";
            }

            await this.wait(this.waitingTime);
        }
        arr[minIndex].color = arr[maxIndex].color = "";
        let range = max - min + 1;
        let holes = new Array(range);
        for (let i = 0; i < range; i++) {
            holes[i] = [];
        }
        for (let i = arr.length - 1; i >= 0; i--) {
            const obj = arr[i];
            obj.color = "goldenrod";
            await this.wait(this.waitingTime * 1.5);
            holes[obj.value - min].push(obj);
            obj.color = "";
            await this.wait(this.waitingTime);
        }
        let i = 0,
            j = 0;
        for (; i < range; i++) {
            let hole = holes[i];

            while (hole.length > 0) {
                let object = hole.pop();
                object.color = "green";
                await this.wait(this.waitingTime * 2);
                object.index = j;
                arr[j++] = object;
                await this.wait(this.waitingTime);
            }
        }
    }
}
