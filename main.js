document.addEventListener("DOMContentLoaded", function(){
    const unit = prompt("Prompt the number of an institute:");

    let inf = 1; //Defines the first available institute on the table
    let sup = 10; //Defines the last available institute on the table
    let cont = 0;
    let x = 0;

    console.log("");
    console.log("Constants defined:");
    console.log("Unit: ", unit, ", Inf: ", inf, ", Sup: ", sup, ", Cont: ", cont, ", X: ", x);
    console.log("");

    function infMajorThanSup(){
        if (inf > sup) {
            console.log("");
            console.log("INF > SUP TRUE")
            console.log("Unit: ", unit, ", Inf: ", inf, ", Sup: ", sup, ", Cont: ", cont, ", X: ", x);
            console.log("");

            alert(`Unit ${unit} does not exist.`);

            return unit, inf, sup;
        } else{
            console.log("");
            console.log("INF > SUP FALSE")
            console.log("Unit: ", unit, ", Inf: ", inf, ", Sup: ", sup, ", Cont: ", cont, ", X: ", x);
            console.log("");

            xGenerator();
        }
    }

    function xGenerator(){
        x = parseInt((inf + sup)/2);
        x = Math.round(x)
        cont = cont + 1;

        console.log("");
        console.log("XGEN");
        console.log("Unit: ", unit, ", Inf: ", inf, ", Sup: ", sup, ", Cont: ", cont, ", X: ", x);
        console.log("");

        unitEqualX();
    }

    function unitEqualX(){
        if (unit == x) {

            console.log("");
            console.log("UNIT == X TRUE")
            console.log("Unit: ", unit, ", Inf: ", inf, ", Sup: ", sup, ", Cont: ", cont, ", X: ", x);
            console.log("");

            alert(`The unit ${unit} was found ${cont} times`);
            return unit, cont;
        } else{
            console.log("");
            console.log("UNIT == X FALSE")
            console.log("Unit: ", unit, ", Inf: ", inf, ", Sup: ", sup, ", Cont: ", cont, ", X: ", x);
            console.log("");

            unitMajorThanX();
        }
    }

    function unitMajorThanX(){
        if (unit > x){
            inf = x + 1;

            console.log("");
            console.log("UNIT > X TRUE")
            console.log("Unit: ", unit, ", Inf: ", inf, ", Sup: ", sup, ", Cont: ", cont, ", X: ", x);
            console.log("");

            infMajorThanSup();
        } else{
            sup = x - 1;

            console.log("");
            console.log("UNIT > X FALSE")
            console.log("Unit: ", unit, ", Inf: ", inf, ", Sup: ", sup, ", Cont: ", cont, ", X: ", x);
            console.log("");

            infMajorThanSup();
        }
    }

    infMajorThanSup();
})





