function average(values) {
    let sum = values.reduce(function(sum,value){
        return sum + value;
    },0);
    let avg = sum / values.length
    return avg;
}


function differences(values){
    let avg = average(values);
    let diffs = values.map(function (value){
        let diff = value - avg;
        return diff;
    })
    return diffs;
}


function square (values){
    let sqrs = values.map(function (value){
        let sqr = value * value;
        return sqr;
    })
    return sqrs;
}


function standardDeviation(values){
    let diffs = differences(values);
    let squarediffs = square(diffs);
    let avgSquareDiffs = average(squarediffs);

    return Math.sqrt(avgSquareDiffs);

}

module.exports.standardDeviation = standardDeviation;