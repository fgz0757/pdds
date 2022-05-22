export default function (Vue) {
    Vue.prototype.fDou = function (fn, m) {
        let timer = null;
        return function () {
            clearTimeout(timer);
            timer = setTimeout(function () {
                fn()
            },m)
        }
    }
}