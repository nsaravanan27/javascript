function descend(x, y) {
    if(x > y) {
        return -1;
    } else {
        return 1;
    }
}

[1,5,4,6,3,2].sort(descend);


function loopCall(n, callback) {
    var result = [];
    for(i = 0; i<n ; i++) {
        result[i] = callback(i);
    }
    return result;
}

loopCall(5, function(val) {
    return val * 2;
});

loopCall(10, function(val) {
    return val * val;
})

loopCall(7, function(val) {
    return val * val * val;
})