module.exports = {
    isElementActive: function(el) {
        let threshhold = 10;
        let rect = el.getBoundingClientRect();
        return rect.top <= threshhold;
    },
    emitIfIsVisible: function(component, id) {
        let isVisible = this.isElementActive(document.getElementById(id));
        console.log(`Component ${component} is visible - ${isVisible}`)
        if (isVisible) component.$emit("isVisible", id);
    }
}