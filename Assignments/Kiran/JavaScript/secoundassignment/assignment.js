import quesOne from './qone.js';
import quesTwo from './qtwo.js';
import quesThree from './qthree.js';
import quseFour from './qfour.js';
import quseFive from './qfive.js';
import quesSix from './qsix.js';
import quseSeven from './qseven.js';
import quesEight from './qeight.js';
import quesNine from './qnine.js';
import quesTen from './qten.js';
import quesEleven from './qeleven.js';
import quesFive from './qfive.js';

document.getElementById("clickMe").onclick = function(){
    let num = document.getElementById("myText").value;
    myFunction(num);
};
function myFunction(x){
    console.clear();
    switch(x){
        case '1':
            quesOne();
            break;
        case '2':
            quesTwo();
            break;
        case '3':
            quesThree();
            break;
        case '4':
            quseFour();
            break;
        case '5':
            quesFive();
            break;
        case '6':
            quesSix();
            break;
        case '7':
            quseSeven();
            break;
        case '8':
            quesEight();
            break;
        case '9':
            quesNine();
            break;
        case '10':
            quesTen();
            break;
        case '11':
            quesEleven();
            break;
    };


};
    