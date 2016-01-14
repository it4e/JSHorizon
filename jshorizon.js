var Horizon = function(container) {
    this.container = container;
    this.body_width = 0;
}


Horizon.prototype.calc_body_width = function() {
    var children = this.container.children;
    var skip;
    
    for(var i = 0; i < children.length; i++)
        this.body_width += children[i].offsetWidth;

    document.getElementsByTagName("BODY")[0].style.width = this.body_width + "px";
}
