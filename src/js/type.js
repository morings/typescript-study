//ts类型讲解
var A;
(function (A) {
    var a = true;
    var b = 123;
    var c = 'hello';
    var d = [1];
    var e = [1];
    var f = [1, '1'];
    var j;
    (function (j) {
        j[j["success"] = 1] = "success";
        j[j["error"] = 2] = "error";
    })(j || (j = {}));
    console.log(j);
    var h = null;
    var m = undefined;
    function i() {
        console.log(this);
    }
    var o = 1;
    o = 'hello';
    function getInfo(name) {
        if (false) {
            return 1;
        }
        else {
            return '123';
        }
    }
})(A || (A = {}));
create({ prop: 0 }); // OK
var m = { name: 'qcx' };
