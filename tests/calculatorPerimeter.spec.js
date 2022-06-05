const { it , expect } = require('@jest/globals');
const CalculatorPerimeter = require('../classes/calculatorPerimeter');

describe('Perimeter calculator', () => {
    const calculatorPerimeter = new CalculatorPerimeter();

    it('should return the perimeter of a square 5x5: 20', () => {
        const result = calculatorPerimeter.calculateSquarePerimeter(5);
        expect(result).toBe(20);
    });

    it('should return the perimeter of a rectangle 2x4: 12', () => {
        const result = calculatorPerimeter.calculateRectanglePerimeter(2,4);
        expect(result).toBe(12);
    });

    it('should return the perimeter of a rectangle 0x0: error', () => {
        const result = calculatorPerimeter.calculateRectanglePerimeter(0,0);
        expect(result).toBe("Error: side must be greater than 0");
    });
    
})