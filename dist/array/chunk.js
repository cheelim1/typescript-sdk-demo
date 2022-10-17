"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports._chunk = void 0;
const _chunk = (array, size = 1) => {
    if (!Array.isArray(array) || !array.length)
        return [];
    let result = [];
    let index = 0;
    while (index < array.length) {
        result.push(array.slice(index, (index += size)));
    }
    return result;
};
exports._chunk = _chunk;
