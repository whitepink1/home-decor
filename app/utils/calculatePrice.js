const calculatePriceArray = (array = []) => {
    let ranges = array?.map(item => item.split('-').map(Number));
    ranges.sort((a, b) => a[0] - b[0]);
    let merged = [ranges[0]]

    for (let i = 1; i < ranges.length; i++) {
    const [prevStart, prevEnd] = merged[merged.length - 1];
    const [currStart, currEnd] = ranges[i];

    if (currStart === prevEnd) {
        merged[merged.length - 1][1] = currEnd;
    } else {
        merged.push(ranges[i]);
    }
    }
    const result = merged.map(([start, end]) => `${start}-${end}`);
    return result;
}

export default calculatePriceArray;