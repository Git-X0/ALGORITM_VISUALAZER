let waitingTime = 10;

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
const firstSortContainer = document.getElementById("firstSortContainer");
const secondSortContainer = document.getElementById("secondSortContainer");
//-----------------------------------------------------------------START BUTTONS---------------------------------------------------------------
const bubbleSortButton = document.getElementById("bubbleSortBTN");
const selectionSortButton = document.getElementById("selectionSortBTN");
const insertionSortButton = document.getElementById("insertionSortBTN");
const shellSortButton = document.getElementById("shellSortBTN");
const quickSortButton = document.getElementById("quickSortBTN");
const mergeSortButton = document.getElementById("mergeSortBTN");
const comparisonSortButton = document.getElementById("comparisonSortBTN");

//-----------------------------------------------------------------SHUFFLE FIELDS--------------------------------------------------------------
const shuffleButtonBubble = document.getElementById("shuffleBTN_bubble");
const shuffleButtonSelection = document.getElementById("shuffleBTN_selection");
const shuffleButtonInsertion = document.getElementById("shuffleBTN_insertion");
const shuffleButtonShell = document.getElementById("shuffleBTN_shell");
const shuffleButtonQuick = document.getElementById("shuffleBTN_quick");
const shuffleButtonMerge = document.getElementById("shuffleBTN_merge");
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
const valuesForComparison = new Array(Number(comparisonSortSizeInput.value))
    .fill(0)
    .map(() => randomValue(1, Number(comparisonSortSizeInput.value)));
//-----------------------------------------------------------------INPUT FIELDS-----------------------------------------------------------------
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
    valuesFormerge,
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
    }
}
setSecondSort("bubbleSort");

function displayTime(sort, count, time) {
    console.log(
        `Time needed for ${sort} with ${count} values: ${Math.floor(
            (performance.now() - time) / 1000
        )} s`
    );
    console.log(`\n`);
}

function changeTime(newTime) {
    bubbleSortAnimation.waitingTime = newTime;
    selectionSortAnimation.waitingTime = newTime;
    insertionSortAnimation.waitingTime = newTime;
    shellSortAnimation.waitingTime = newTime;
    quickSortAnimation.waitingTime = newTime;
    firstSortAnimation.waitingTime = newTime;
    secondSortAnimation.waitingTime = newTime;
}
//-----------------------------------------------------------------EVENT LISTENERS---------------------------------------------------------------
let isbubbleBusy = false;
bubbleSortButton.addEventListener("click", async () => {
    if (!isbubbleBusy) {
        isbubbleBusy = true;
        let bubbleCount = bubbleSortSizeInput.value;
        let bubbleTime = performance.now();
        await bubbleSortAnimation.sort();
        displayTime("bubble sort", bubbleCount, bubbleTime);
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
        await bubbleSortAnimation.changeSizeAndValues(
            bubbleSortSizeInput.value
        );
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
        displayTime("selection sort", selectionCount, selectionTime);
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
        selectionSortAnimation.changeSizeAndValues(
            selectionSortSizeInput.value
        );
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
        displayTime("insertion sort", insertionCount, insertionTime);
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
        insertionSortAnimation.changeSizeAndValues(
            insertionSortSizeInput.value
        );
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
        displayTime("shell sort", shellCount, shellTime);
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
        shellSortAnimation.changeSizeAndValues(shellSortSizeInput.value);
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
        displayTime("quick sort", quickCount, quickTime);
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
        quickSortAnimation.changeSizeAndValues(quickSortSizeInput.value);
        isQuickBusy = false;
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
        firstSortAnimation.changeSizeAndValues(comparisonSortSizeInput.value),
        secondSortAnimation.changeSizeAndValues(comparisonSortSizeInput.value),
    ]);
    isComparisonBusy = false;
});
