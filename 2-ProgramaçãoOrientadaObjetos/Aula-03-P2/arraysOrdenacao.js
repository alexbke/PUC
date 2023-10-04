let a = [3, 1, 2];
a.sort(function (x, y) {
    if (x < y) return -1;
    if (x > y) return 1;
    return 0;
});