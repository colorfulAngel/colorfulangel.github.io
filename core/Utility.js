"use strict";
exports.__esModule = true;
exports.Utility = void 0;
var Utility = /** @class */ (function () {
    function Utility() {
    }
    Utility.getInvArr = function (arr) {
        var val = 0;
        var vm = Utility.mergeSort(arr, 0, arr.length - 1, val);
        return vm;
    };
    Utility.mergeSort = function (arr, l, r, val) {
        if (l >= r)
            return 0;
        var m = Math.floor((l + r) / 2);
        var v1 = Utility.mergeSort(arr, l, m, val);
        var v2 = Utility.mergeSort(arr, m + 1, r, val);
        var v3 = Utility.merge(arr, l, m, r);
        val += v1 + v2 + v3;
        return val;
    };
    Utility.merge = function (arr, l, m, r) {
        var vm = 0;
        var left = arr.slice(l, m + 1);
        var right = arr.slice(m + 1, r + 1);
        var n1 = left.length;
        var n2 = right.length;
        var i = 0, j = 0, k = l;
        while (i < n1 && j < n2) {
            if (left[i] <= right[j]) {
                arr[k] = left[i];
                i++;
            }
            else {
                arr[k] = right[j];
                j++;
                vm += (n1 - i);
            }
            k++;
        }
        while (i < n1) {
            arr[k] = left[i];
            i++;
            k++;
        }
        while (j < n2) {
            arr[k] = right[j];
            j++;
            k++;
        }
        return vm;
    };
    return Utility;
}());
exports.Utility = Utility;
