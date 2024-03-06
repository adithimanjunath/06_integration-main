const funcA = require('./funcA');

jest.mock('../mod_B/funcB', () => jest.fn());

describe('funcA()', () => {
    it("should return the result of function B if it is greater than or equal to 0 ",()=>{
        const mockFuncB = require('../mod_B/funcB');
        mockFuncB.mockReturnValueOnce(5);

        const result = funcA(10);
        
        expect(result).toBe(5);
        expect(mockFuncB).toHaveBeenCalledWith(10);
    });
    it("should return the value of function C if the function B retuns nagative value",()=>{
        const mockFuncB = require('../mod_B/funcB');
        
        mockFuncB.mockReturnValueOnce(-3); 
        mockFuncB.mockReturnValueOnce(2); 
        
        const result = funcA(10);
        
        expect(result).toBe(2); 
        expect(mockFuncB).toHaveBeenCalledWith(10); 
        expect(mockFuncB).toHaveBeenCalledWith(0);

    });

  
})
