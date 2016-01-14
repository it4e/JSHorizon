/*
 *
 *  JSHorizon, https://www.github.org/it4e/jshorizon
 *  it4e - 2016
 *
 */


// Horizontal object
var Horizon = function(container) {
    this.container = container;
    this.container_width = 0;
    this.exceptions = new Array();
}

// Add element as an exception so its width will not be included
Horizon.prototype.add_exception = function(exception) {
    this.exceptions[this.exceptions.length] = exception;
}

// Calculate and set container width
Horizon.prototype.calc_width = function() {
    var children = this.container.children;
    var skip;
    
    // Loop through elements and handle exceptions
    for(var i = 0; i < children.length; i++) {
        for(var x = 0; x < this.exceptions.length; x++)
            if(children[i] == this.exceptions[x]) {
                skip = true;
                break;
            }

        if(skip) {
            skip = false;
            continue;
        }

        this.container_width += children[i].offsetWidth;
    }

    this.container.style.width = (this.container_width / document.documentElement.clientWidth) * 100 + "%";
}
