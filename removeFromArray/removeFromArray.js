const removeFromArray = function(...arguments) {
    elements = arguments[0];
    items = Array.prototype.slice.call(arguments,1);

    for (let index = 0; index < items.length; index++) {
        const element = items[index];
        remove(elements,element);
    }

    
    

    return elements;
}

function remove(array, element) {
    const index = array.indexOf(element);
  
    if (index !== -1) {
      array.splice(index, 1);
    }
  }

module.exports = removeFromArray
