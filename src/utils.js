module.exports = {
    isElementActive: function (el) {
        let threshhold = 100;
        let rect = el.getBoundingClientRect();
        return rect.top <= threshhold;
    },
    emitIfIsVisible: function (component, id) {
        let isVisible = this.isElementActive(document.getElementById(id));
        if (isVisible) component.$emit("isVisible", id);
    },
    toggleFullscreen: function () {
        var doc = window.document;
        var docEl = doc.documentElement;

        var requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
        var cancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;

        if (!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
            requestFullScreen.call(docEl);
        } else {
            cancelFullScreen.call(doc);
        }
    }
}