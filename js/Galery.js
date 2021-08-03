var Galery = /** @class */ (function () {
    function Galery() {
        this.controls = {
            prev: document.querySelector('.fa-chevron-left'),
            next: document.querySelector('.fa-chevron-right'),
        };
        this.items = document.querySelectorAll('.project');
    }
    Galery.prototype.setConfig = function () {
        this.configPrev();
        this.configNext();
    };
    Galery.prototype.configPrev = function () {
        var _this = this;
        this.controls.prev.onclick = function () {
            var output = [];
            _this.items.forEach(function (item) { return output.push(item.innerHTML); });
            for (var i = 0; i < _this.items.length; i++) {
                var item = _this.items[i];
                item.innerHTML = output[i == _this.items.length - 1 ? 0 : i + 1];
            }
        };
    };
    Galery.prototype.configNext = function () {
        var _this = this;
        this.controls.next.onclick = function () {
            var output = [];
            _this.items.forEach(function (item) { return output.push(item.innerHTML); });
            for (var i = 0; i < _this.items.length; i++) {
                var item = _this.items[i];
                item.innerHTML = output[i == 0 ? _this.items.length - 1 : i - 1];
            }
        };
    };
    return Galery;
}());
export default Galery;
