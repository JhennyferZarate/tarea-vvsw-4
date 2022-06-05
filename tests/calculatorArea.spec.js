const { it , expect } = require('@jest/globals');
const CalculatorArea = require('../classes/calculatorArea');

describe('Area calculator', () => {
    const calculatorArea = new CalculatorArea();

    it('should return the area of a square 5x5: 25', () => {
        const result = calculatorArea.calculateSquareArea(5);
        expect(result).toBe(25);
    });

    it('should return the area of a rectangle 2x4: 8', () => {
        const result = calculatorArea.calculateRectangleArea(2,4);
        expect(result).toBe(8);
    });

    it('should return the area of a rectangle 0x0: error', () => {
        const result = calculatorArea.calculateRectangleArea(0,0);
        expect(result).toBe("Error: side must be greater than 0");
    });
    
})
