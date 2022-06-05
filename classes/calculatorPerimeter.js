class CalculatorPerimeter {

    calculateSquarePerimeter(side) {
        if(side > 0) {
            return side * 4;
        }else{
            return "Error: side must be greater than 0";
        }
    }

    calculateRectanglePerimeter(side1, side2) {
        if(side1 > 0 && side2 > 0) {
            if(side1 > side2 || side2 > side1) {
                return (side2 + side1) * 2;
            }else{
                return "Error: it's a square.";
            }
        }else{
            return "Error: side must be greater than 0";
        }
    }
}

module.exports = CalculatorPerimeter;