var project;
(function (project) {
    var Core;
    (function (Core) {
        function funA() {
        }
        function funB() {
            console.log('hello word,我是funB');
        }
        Core.funB = funB;
    })(Core = project.Core || (project.Core = {}));
})(project || (project = {}));
(function (project) {
    var Core;
    (function (Core) {
        function funC() {
            console.log('heelo word 我是funC');
        }
        Core.funC = funC;
    })(Core = project.Core || (project.Core = {}));
})(project || (project = {}));
project.Core.funB();
project.Core.funC();
