




var fs  = require("fs");
fs.readFileSync(process.argv[2])
    .toString()
    .split('\n')
    .forEach(function(line) {
        
        if (line !== "") {
            ProcessLine(line);
        }
    }

);





function ProcessLine(line) {

    var res = line.split(";");
    
    //console.log(res);

    var center = GetPoint(res[0]);

    var inputPoint = GetPoint(res[2]);

    var radius = GetNum(res[1]);


    if (!ValidateInput(center, inputPoint))
        return ;


    //console.log("center: " + center.x +"," + center.y + "\ninput point: " + input_point.x + " " + input_point.y + "\nradius: " + radius);

    IsInCirble(center, inputPoint, radius);

};


function IsInCirble(center, inputPoint, radius) {

    var a = center.x - inputPoint.x;
    var b = center.y - inputPoint.y;

    var c = Math.sqrt(a * a + b * b);

    if (c > radius) {
        console.log("false");
    } else {
        console.log("true");
    }
}


function ValidateInput(p1,p2) {
    if(!Validate(p1.x)) return false;
    if(!Validate(p1.y)) return false;
    if(!Validate(p2.x)) return false;
    if (!Validate(p2.y)) return false;

    return true;
}


function Validate(p) {
    if (p > 100 || p < -100)
        return false;
    return true;
}


function GetNum(re) {
    var rad = re.split(" ")[2];
    return parseFloat(rad);
}

function GetPoint(re) {

      var regExp = /\(([^)]+)\)/;
      var matches = regExp.exec(re);

      var pair = matches[1];

      var splitedPair = pair.split(",");


    var point = {
        x: parseFloat(splitedPair[0]),
        y: parseFloat(splitedPair[1])
    }

    return point;
};