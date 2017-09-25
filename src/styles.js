const Stylesheet = function(styles) {
    this.styles = styles;
    for (var key in this.styles) {
        Stylesheet.prototype[key] = this.styles[key];
    }
}

export {Stylesheet}

