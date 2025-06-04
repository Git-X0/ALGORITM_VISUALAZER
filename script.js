let waitingTime = document.getElementById("speedTime").value;

//-----------------------------------------------------------------CONTAINERS-----------------------------------------------------------------
const bubbleSortContainer = document.getElementById("bubbleSort_Container");
const selectionSortContainer = document.getElementById(
    "selectionSort_Container"
);
const insertionSortContainer = document.getElementById(
    "insertionSort_Container"
);
const shellSortContainer = document.getElementById("shellSort_Container");
const quickSortContainer = document.getElementById("quickSort_Container");
const mergeSortContainer = document.getElementById("mergeSort_Container");
const heapSortContainer = document.getElementById("heapSort_Container");
const pigeonHoleSortContainer = document.getElementById(
    "pigeonHoleSort_Container"
);
const countingSortContainer = document.getElementById("countingSort_Container");
const firstSortContainer = document.getElementById("firstSortContainer");
const secondSortContainer = document.getElementById("secondSortContainer");
//-----------------------------------------------------------------START BUTTONS---------------------------------------------------------------
const bubbleSortButton = document.getElementById("bubbleSortBTN");
const selectionSortButton = document.getElementById("selectionSortBTN");
const insertionSortButton = document.getElementById("insertionSortBTN");
const shellSortButton = document.getElementById("shellSortBTN");
const quickSortButton = document.getElementById("quickSortBTN");
const mergeSortButton = document.getElementById("mergeSortBTN");
const heapSortButton = document.getElementById("heapSortBTN");
const pigeonHoleSortButton = document.getElementById("pigeonHoleSortBTN");
const countingSortButton = document.getElementById("countingSortBTN");
const comparisonSortButton = document.getElementById("comparisonSortBTN");

//-----------------------------------------------------------------SHUFFLE FIELDS--------------------------------------------------------------
const shuffleButtonBubble = document.getElementById("shuffleBTN_bubble");
const shuffleButtonSelection = document.getElementById("shuffleBTN_selection");
const shuffleButtonInsertion = document.getElementById("shuffleBTN_insertion");
const shuffleButtonShell = document.getElementById("shuffleBTN_shell");
const shuffleButtonQuick = document.getElementById("shuffleBTN_quick");
const shuffleButtonMerge = document.getElementById("shuffleBTN_merge");
const shuffleButtonHeap = document.getElementById("shuffleBTN_heap");
const shuffleButtonPigeonHole = document.getElementById(
    "shuffleBTN_pigeonHole"
);
const shuffleButtonCounting = document.getElementById("shuffleBTN_counting");
const shuffleButtonComparison = document.getElementById(
    "shuffleBTN_comparison"
);

//-----------------------------------------------------------------INPUT FIELDS-----------------------------------------------------------------
const bubbleSortSizeInput = document.getElementById("bubblesortIN");
const selectionSortSizeInput = document.getElementById("selectionsortIN");
const insertionSortSizeInput = document.getElementById("insertionsortIN");
const shellSortSizeInput = document.getElementById("shellsortIN");
const quickSortSizeInput = document.getElementById("quicksortIN");
const mergeSortSizeInput = document.getElementById("mergesortIN");
const heapSortSizeInput = document.getElementById("heapsortIN");
const pigeonHoleSortSizeInput = document.getElementById("pigeonHolesortIN");
const countingSortSizeInput = document.getElementById("countingsortIN");
const comparisonSortSizeInput = document.getElementById("comparisonsortIN");

//-----------------------------------------------------------------RANDOM VALUES GENERATION-----------------------------------------------------

const valuesForBubble = new Array(Number(bubbleSortSizeInput.value))
    .fill(0)
    .map(() => randomValue(1, Number(bubbleSortSizeInput.value)));
const valuesForSelection = new Array(Number(selectionSortSizeInput.value))
    .fill(0)
    .map(() => randomValue(1, Number(selectionSortSizeInput.value)));
const valuesForInsertion = new Array(Number(insertionSortSizeInput.value))
    .fill(0)
    .map(() => randomValue(1, Number(insertionSortSizeInput.value)));
const valuesForShell = new Array(Number(shellSortSizeInput.value))
    .fill(0)
    .map(() => randomValue(1, Number(shellSortSizeInput.value)));
const valuesForQuick = new Array(Number(quickSortSizeInput.value))
    .fill(0)
    .map(() => randomValue(1, Number(quickSortSizeInput.value)));
const valuesForMerge = new Array(Number(mergeSortSizeInput.value))
    .fill(0)
    .map(() => randomValue(1, Number(mergeSortSizeInput.value)));
const valuesForHeap = new Array(Number(heapSortSizeInput.value))
    .fill(0)
    .map(() => randomValue(1, Number(heapSortSizeInput.value)));
const valuesForPigeonHole = new Array(Number(pigeonHoleSortSizeInput.value))
    .fill(0)
    .map(() => randomValue(1, Number(pigeonHoleSortSizeInput.value)));
const valuesForComparison = new Array(Number(comparisonSortSizeInput.value))
    .fill(0)
    .map(() => randomValue(1, Number(comparisonSortSizeInput.value)));
//-----------------------------------------------------------------SORTING FIELDS-----------------------------------------------------------------
const bubbleSortAnimation = new BubbleSort(
    bubbleSortContainer,
    valuesForBubble,
    waitingTime
);
const selectionSortAnimation = new SelectionSort(
    selectionSortContainer,
    valuesForSelection,
    waitingTime
);
const insertionSortAnimation = new InsertionSort(
    insertionSortContainer,
    valuesForInsertion,
    waitingTime
);
const shellSortAnimation = new ShellSort(
    shellSortContainer,
    valuesForInsertion,
    waitingTime
);
const quickSortAnimation = new QuickSort(
    quickSortContainer,
    valuesForQuick,
    waitingTime
);
const mergeSortAnimation = new MergeSort(
    mergeSortContainer,
    valuesForMerge,
    waitingTime
);
const heapSortAnimation = new HeapSort(
    heapSortContainer,
    valuesForHeap,
    waitingTime
);
const pigeonHoleSortAnimation = new PigeonHoleSort(
    pigeonHoleSortContainer,
    valuesForPigeonHole,
    waitingTime
);
const countingSortAnimation = new CountingSort(
    countingSortContainer,
    valuesForComparison,
    waitingTime
);

//-----------------------------------------------------------------COMPARISON ANIMATIONS-----------------------------------------------------------------
let firstSortAnimation;
let secondSortAnimation;
//-----------------------------------------------------------------FUNCTIONS---------------------------------------------------------------
function randomValue(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function setFirstSort(value) {
    firstSortContainer.innerHTML = "";
    waitingTime = document.getElementById("speedTime").value;
    switch (value) {
        case "bubbleSort":
            firstSortAnimation = new BubbleSort(
                firstSortContainer,
                valuesForComparison,
                waitingTime
            );
            break;
        case "selectionSort":
            firstSortAnimation = new SelectionSort(
                firstSortContainer,
                valuesForComparison,
                waitingTime
            );
            break;
        case "insertionSort":
            firstSortAnimation = new InsertionSort(
                firstSortContainer,
                valuesForComparison,
                waitingTime
            );
            break;
        case "shellSort":
            firstSortAnimation = new ShellSort(
                firstSortContainer,
                valuesForComparison,
                waitingTime
            );
            break;
        case "quickSort":
            firstSortAnimation = new QuickSort(
                firstSortContainer,
                valuesForComparison,
                waitingTime
            );
            break;
        case "mergeSort":
            firstSortAnimation = new MergeSort(
                firstSortContainer,
                valuesForComparison,
                waitingTime
            );
            break;
        case "heapSort":
            firstSortAnimation = new HeapSort(
                firstSortContainer,
                valuesForComparison,
                waitingTime
            );
            break;
        case "pigeonHoleSort":
            fisrtSortAnimation = new PigeonHoleSort(
                firstSortContainer,
                valuesForComparison,
                waitingTime
            );
            break;
        case "countingSort":
            firstSortAnimation = new CountingSort(
                firstSortContainer,
                valuesForComparison,
                waitingTime
            );
            break;
    }
}
setFirstSort("bubbleSort");

function setSecondSort(value) {
    secondSortContainer.innerHTML = "";
    switch (value) {
        case "bubbleSort":
            secondSortAnimation = new BubbleSort(
                secondSortContainer,
                valuesForComparison,
                waitingTime
            );
            break;
        case "selectionSort":
            secondSortAnimation = new SelectionSort(
                secondSortContainer,
                valuesForComparison,
                waitingTime
            );
            break;
        case "insertionSort":
            secondSortAnimation = new InsertionSort(
                secondSortContainer,
                valuesForComparison,
                waitingTime
            );
            break;
        case "shellSort":
            secondSortAnimation = new ShellSort(
                secondSortContainer,
                valuesForComparison,
                waitingTime
            );
            break;
        case "quickSort":
            secondSortAnimation = new QuickSort(
                secondSortContainer,
                valuesForComparison,
                waitingTime
            );
            break;
        case "mergeSort":
            secondSortAnimation = new MergeSort(
                secondSortContainer,
                valuesForComparison,
                waitingTime
            );
            break;
        case "heapSort":
            secondSortAnimation = new HeapSort(
                secondSortContainer,
                valuesForComparison,
                waitingTime
            );
            break;
        case "pigeonHoleSort":
            secondSortAnimation = new PigeonHoleSort(
                secondSortContainer,
                valuesForComparison,
                waitingTime
            );
            break;
        case "countingSort":
            secondSortAnimation = new CountingSort(
                secondSortContainer,
                valuesForComparison,
                waitingTime
            );
            break;
    }
}
setSecondSort("bubbleSort");

function logTime(sort, count, time) {
    console.log(
        `Time needed for ${sort} with ${count} values: ${Math.floor(
            (performance.now() - time) / 1000
        )} s`
    );
    console.log(`\n`);
}

function changeTimeSpeed(newTime) {
    bubbleSortAnimation.waitingTime =
        selectionSortAnimation.waitingTime =
        insertionSortAnimation.waitingTime =
        shellSortAnimation.waitingTime =
        quickSortAnimation.waitingTime =
        mergeSortAnimation.waitingTime =
        heapSortAnimation.waitingTime =
        pigeonHoleSortAnimation.waitingTime =
        countingSortAnimation.waitingTime =
        firstSortAnimation.waitingTime =
        secondSortAnimation.waitingTime =
            document.getElementById("speedTime").value;
}
//-----------------------------------------------------------------EVENT LISTENERS---------------------------------------------------------------
let isbubbleBusy = false;
bubbleSortButton.addEventListener("click", async () => {
    if (!isbubbleBusy) {
        isbubbleBusy = true;
        let bubbleCount = bubbleSortSizeInput.value;
        let bubbleTime = performance.now();
        await bubbleSortAnimation.sort();
        logTime("bubble sort", bubbleCount, bubbleTime);
        isbubbleBusy = false;
    }
});
shuffleButtonBubble.addEventListener("click", async () => {
    if (!isbubbleBusy) {
        bubbleSortAnimation.shuffle();
    }
});
bubbleSortSizeInput.addEventListener("input", async () => {
    if (!isbubbleBusy) {
        isbubbleBusy = true;
        await bubbleSortAnimation.changeSize(bubbleSortSizeInput.value);
        isbubbleBusy = false;
    }
});

let isSelectionBusy = false;
selectionSortButton.addEventListener("click", async () => {
    if (!isSelectionBusy) {
        isSelectionBusy = true;
        count = selectionSortSizeInput.value;
        let selectionCount = selectionSortSizeInput.value;
        let selectionTime = performance.now();
        await selectionSortAnimation.sort();
        logTime("selection sort", selectionCount, selectionTime);
        isSelectionBusy = false;
    }
});
shuffleButtonSelection.addEventListener("click", async () => {
    if (!isSelectionBusy) {
        isSelectionBusy = true;
        await selectionSortAnimation.shuffle();
        isSelectionBusy = false;
    }
});
selectionSortSizeInput.addEventListener("input", async () => {
    if (!isSelectionBusy) {
        isSelectionBusy = true;
        selectionSortAnimation.changeSize(selectionSortSizeInput.value);
        isSelectionBusy = false;
    }
});

let isInsertionBusy = false;
insertionSortButton.addEventListener("click", async () => {
    if (!isInsertionBusy) {
        isInsertionBusy = true;
        count = insertionSortSizeInput.value;
        let insertionCount = insertionSortSizeInput.value;
        let insertionTime = performance.now();
        await insertionSortAnimation.sort();
        logTime("insertion sort", insertionCount, insertionTime);
        isInsertionBusy = false;
    }
});
shuffleButtonInsertion.addEventListener("click", async () => {
    if (!isInsertionBusy) {
        isInsertionBusy = true;
        await insertionSortAnimation.shuffle();
        isInsertionBusy = false;
    }
});
insertionSortSizeInput.addEventListener("input", async () => {
    if (!isInsertionBusy) {
        isInsertionBusy = true;
        insertionSortAnimation.changeSize(insertionSortSizeInput.value);
        isInsertionBusy = false;
    }
});

let isShellBusy = false;
shellSortButton.addEventListener("click", async () => {
    if (!isShellBusy) {
        isShellBusy = true;
        count = shellSortSizeInput.value;
        let shellCount = shellSortSizeInput.value;
        let shellTime = performance.now();
        await shellSortAnimation.sort();
        logTime("shell sort", shellCount, shellTime);
        isShellBusy = false;
    }
});
shuffleButtonShell.addEventListener("click", async () => {
    if (!isShellBusy) {
        isShellBusy = true;
        await shellSortAnimation.shuffle();
        isShellBusy = false;
    }
});
shellSortSizeInput.addEventListener("input", async () => {
    if (!isShellBusy) {
        isShellBusy = true;
        shellSortAnimation.changeSize(shellSortSizeInput.value);
        isShellBusy = false;
    }
});

let isQuickBusy = false;
quickSortButton.addEventListener("click", async () => {
    if (!isQuickBusy) {
        isQuickBusy = true;
        count = quickSortSizeInput.value;
        let quickCount = quickSortSizeInput.value;
        let quickTime = performance.now();
        await quickSortAnimation.sort();
        logTime("quick sort", quickCount, quickTime);
        isQuickBusy = false;
    }
});
shuffleButtonQuick.addEventListener("click", async () => {
    if (!isQuickBusy) {
        isQuickBusy = true;
        await quickSortAnimation.shuffle();
        isQuickBusy = false;
    }
});
quickSortSizeInput.addEventListener("input", async () => {
    if (!isQuickBusy) {
        isQuickBusy = true;
        quickSortAnimation.changeSize(quickSortSizeInput.value);
        isQuickBusy = false;
    }
});

let isMergeBusy = false;
mergeSortButton.addEventListener("click", async () => {
    if (!isMergeBusy) {
        isMergeBusy = true;
        count = mergeSortSizeInput.value;
        let mergeCount = mergeSortSizeInput.value;
        let mergeTime = performance.now();
        await mergeSortAnimation.sort();
        logTime("merge sort", mergeCount, mergeTime);
        isMergeBusy = false;
    }
});
shuffleButtonMerge.addEventListener("click", async () => {
    if (!isMergeBusy) {
        isMergeBusy = true;
        await mergeSortAnimation.shuffle();
        isMergeBusy = false;
    }
});
mergeSortSizeInput.addEventListener("input", async () => {
    if (!isMergeBusy) {
        isMergeBusy = true;
        mergeSortAnimation.changeSize(mergeSortSizeInput.value);
        isMergeBusy = false;
    }
});

let isHeapBusy = false;
heapSortButton.addEventListener("click", async () => {
    if (!isHeapBusy) {
        isHeapBusy = true;
        count = heapSortSizeInput.value;
        let heapCount = heapSortSizeInput.value;
        let heapTime = performance.now();
        await heapSortAnimation.sort();
        logTime("heap sort", heapCount, heapTime);
        isHeapBusy = false;
    }
});
shuffleButtonHeap.addEventListener("click", async () => {
    if (!isHeapBusy) {
        isHeapBusy = true;
        await heapSortAnimation.shuffle();
        isHeapBusy = false;
    }
});
heapSortSizeInput.addEventListener("input", async () => {
    if (!isHeapBusy) {
        isHeapBusy = true;
        heapSortAnimation.changeSize(heapSortSizeInput.value);
        isHeapBusy = false;
    }
});
let isPigeonHoleBusy = false;
pigeonHoleSortButton.addEventListener("click", async () => {
    if (!isPigeonHoleBusy) {
        isPigeonHoleBusy = true;
        count = pigeonHoleSortSizeInput.value;
        let pigeonHoleCount = pigeonHoleSortSizeInput.value;
        let pigeonHoleTime = performance.now();
        await pigeonHoleSortAnimation.sort();
        logTime("pigeon hole sort", pigeonHoleCount, pigeonHoleTime);
        isPigeonHoleBusy = false;
    }
});
shuffleButtonPigeonHole.addEventListener("click", async () => {
    if (!isPigeonHoleBusy) {
        isPigeonHoleBusy = true;
        await pigeonHoleSortAnimation.shuffle();
        isPigeonHoleBusy = false;
    }
});
pigeonHoleSortSizeInput.addEventListener("input", async () => {
    if (!isPigeonHoleBusy) {
        isPigeonHoleBusy = true;
        pigeonHoleSortAnimation.changeSize(pigeonHoleSortSizeInput.value);
        isPigeonHoleBusy = false;
    }
});

let isCountingBusy = false;
countingSortButton.addEventListener("click", async () => {
    if (!isCountingBusy) {
        isCountingBusy = true;
        count = countingSortSizeInput.value;
        let countingCount = countingSortSizeInput.value;
        let countingTime = performance.now();
        await countingSortAnimation.sort();
        logTime("counting sort", countingCount, countingTime);
        isCountingBusy = false;
    }
});
shuffleButtonCounting.addEventListener("click", async () => {
    if (!isCountingBusy) {
        isCountingBusy = true;
        await countingSortAnimation.shuffle();
        isCountingBusy = false;
    }
});
countingSortSizeInput.addEventListener("input", async () => {
    if (!isCountingBusy) {
        isCountingBusy = true;
        countingSortAnimation.changeSize(countingSortSizeInput.value);
        isCountingBusy = false;
    }
});

let isComparisonBusy = false;
comparisonSortButton.addEventListener("click", async () => {
    if (isComparisonBusy) return;
    isComparisonBusy = true;
    await Promise.all([firstSortAnimation.sort(), secondSortAnimation.sort()]);
    isComparisonBusy = false;
});
shuffleButtonComparison.addEventListener("click", async () => {
    if (isComparisonBusy) return;
    isComparisonBusy = true;
    await Promise.all([
        firstSortAnimation.shuffle(),
        secondSortAnimation.shuffle(),
    ]);
    isComparisonBusy = false;
});
comparisonSortSizeInput.addEventListener("input", async () => {
    if (isComparisonBusy) return;
    isComparisonBusy = true;
    await Promise.all([
        firstSortAnimation.changeSize(comparisonSortSizeInput.value),
        secondSortAnimation.changeSize(comparisonSortSizeInput.value),
    ]);
    isComparisonBusy = false;
});
