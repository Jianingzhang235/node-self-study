const lib = require('../lib');

describe('absolute', () => {
    it('should return a positive number if input is positive', () => {
        const result = lib.absolute(1);
        expect(result).toBe(1);
    });

    it('should return a positive number if input is negative', () => {
        const result = lib.absolute(-1);
        expect(result).toBe(1);
    });

    it('should return 0  if input is 0', () => {
        const result = lib.absolute(0);
        expect(result).toBe(0);
    });
});

describe('greet', () => {
    it('should return a greeting message with the input name', () => {
        const result = lib.greet('Lydia');
        // expect(result).toBe('Welcome Lydia');
        expect(result).toMatch(/Lydia/);
        expect(result).toContain('Lydia');
    });
});

describe('getCurrencies', () => {
    it('should return an array of currencies', () => {
        const result = lib.getCurrencies();
        //Too general
        expect(result).toBeDefined();
        expect(result).not.toBeNull();

        //Too specific
        expect(result[0]).toBe('USD');
        expect(result[1]).toBe('AUD');
        expect(result[2]).toBe('EUR');
        // Proper way
        expect(result).toContain('USD');
        expect(result).toContain('AUD');
        expect(result).toContain('EUR');
    });
});

describe('getProduct', () => {
    it('should return the product with the given id', () => {
        const result = lib.getProduct(1);
        // expect(result).toEqual({id:1, price: 10});
        //better way
        expect(result).toMatchObject({id:1, price: 10});
        expect(result).toHaveProperty('id', 1);


    });
});


describe('registerUser', () => {
    it('should throw  if username is falsy', () => {
        const args = [null, 0, '', undefined, NaN, false];
        args.forEach(e => {
            expect(() => {lib.registerUser(a)}).toThrow();       
        });
    });
    it('should return a user object if valid username is passed', () => {
        const result = lib.registerUser('jianing');
        expect(result).toMatchObject({username: 'jianing'});
        expect(result.id).toBeGreaterThan(0);
    });
});