const reverseString = function(word) {
    characters = word.split('');
    characters.reverse();
    return characters.join('');
}

module.exports = reverseString
