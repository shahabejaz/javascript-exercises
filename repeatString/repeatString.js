const repeatString = function(word, count) {
    if (count < 0) return "ERROR";

    string = '';
    for (let index = 0; index < count; index++) {
        string += word;
    }

    return string;
}

module.exports = repeatString
