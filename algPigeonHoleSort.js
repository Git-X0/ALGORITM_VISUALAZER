class PigeonHoleSort extends SortingAnimation {
    async sort() {
        await this.pigeonHolesort(this.columns);
    }
    async pigeonHolesort(arr) {
        let min = arr[0].value;
        let max = arr[0].value;
        for (let i = 1; i < arr.length; i++) {
            const temp = arr[i].value;
            arr[i].color = "yellow";
            await this.wait(this.waitingTime);
            if (arr[i].value < min.value) {
                min.color = "";
                min.value = temp;
                arr[i].color = "red";
                await this.wait(this.waitingTime);
            }
            if (arr[i].value > max.value) {
                await this.wait(this.waitingTime);
                max.color = "";
                max.value = temp;
                arr[i].color = "blue";
                await this.wait(this.waitingTime);
            }
            await this.wait(this.waitingTime);
        }
        let range = max - min + 1;
        let holes = new Array(range);
        for (let i = 0; i < range; i++) {
            holes[i] = [];
        }
        for (let i = arr.length - 1; i >= 0; i--) {
            const obj = arr[i];
            obj.color = "goldenrod";
            holes[obj.value - min].push(obj);
            await this.wait(this.waitingTime);
        }
        let i = 0,
            j = 0;
        for (; i < range; i++) {
            let hole = holes[i];

            while (hole.length > 0) {
                let object = hole.pop();
                object.color = "green";
                await this.wait(this.waitingTime);
                object.index = j;
                arr[j++] = object;
                await this.wait(this.waitingTime);
            }
        }
    }
}
