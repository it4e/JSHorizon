/*
 *
 *  JSHorizon, https://www.github.org/it4e/jshorizon
 *  it4e - 2016
 *
 */


// Horizontal object
var Horizon = function(container) {
    this.vw_width = document.documentElement.clientWidth;
    this.container = container;
    this.container_width = 0;
    this.exceptions = new Array();
    this.mobile_bp = 768;
    this.mobile_state = false;
}

// Set custom mobile breakpoint for responsiveness, standard = 768
Horizon.prototype.set_mobile_breakpoint = function(breakpoint) {
    this.mobile_bp = breakpoint;
}

// Add element as an exception so its width will not be included
Horizon.prototype.add_exception = function(exception) {
    this.exceptions[this.exceptions.length] = exception;
}

// Check if device is mobile
Horizon.prototype.is_mobile = function() {
    if(this.vw_width <= this.mobile_bp)
        return true;

    return false;
}

// Turn on or off mobile width calculation for responsiveness
Horizon.prototype.set_mobile = function(state) {
    if(typeof(state) === 'undefined')
        mobile = false;
    
    this.mobile_state = state;
}

// Calculate and set container width
Horizon.prototype.calc_width = function(mobile) {
    var children = this.container.children;
    var skip; 

    if(typeof(mobile) !== 'undefined')
        this.mobile_state = mobile;

    if(this.is_mobile() && this.mobile_state)
        return;
    
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

    this.container.style.width = this.container_width + 'px';
}
