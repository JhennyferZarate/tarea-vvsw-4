class CalculatorArea {
    calculateSquareArea(side) {
        if(side > 0) {
            return side * side;
        }else{
            return "Error: side must be greater than 0";
        }
        
    }
    calculateRectangleArea(side1, side2) {
        if(side1 > 0 && side2 > 0) {
            if(side1 > side2 || side2 > side1) {
                return side1 * side2;
            }else{
                return "Error: it's a square.";
            }
        }else{
            return "Error: side must be greater than 0";
        }
    }
}

module.exports = CalculatorArea;