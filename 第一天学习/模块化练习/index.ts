
module project{
    export  module Core{
        function  funA() {

        }
        export  function funB(){
            console.log('hello word,我是funB')

        }
    }
}

module project.Core{
    export  function funC(){
        console.log('heelo word 我是funC')
    }
}


project.Core.funB()

project.Core.funC()

