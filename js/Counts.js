var Counts = /** @class */ (function () {
    function Counts() {
        this.items = document.querySelectorAll('.count');
        console.log(document.querySelectorAll('count'));
        this.values = [
            { number: 2500, title: 'Happy clients' },
            { number: 300, title: 'Full notebooks' },
            { number: 120, title: 'Teammates' },
            { number: 30, title: 'Stores' },
        ];
    }
    Counts.prototype.setNumbers = function () {
        for (var i = 0; i < this.items.length; i++) {
            var item = this.items[i];
            var num = item.querySelector('span');
            var title = item.querySelector('h4');
            num.innerHTML = this.values[i].number.toString();
            title.innerHTML = this.values[i].title;
        }
    };
    return Counts;
}());
export default Counts;
