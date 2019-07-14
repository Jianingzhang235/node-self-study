const exercise1 = require('../exercise1');

describe('fizzBuzz', () => {
  it('should throw an exception if input is not a number', ()  => {
    // exercise1.fizzBuzz
    expect(() => {exercise1.fizzBuzz('a')}).toThrow();
    expect(() => {exercise1.fizzBuzz(null)}).toThrow();
    expect(() => {exercise1.fizzBuzz({'a': 2})}).toThrow();
    expect(() => {exercise1.fizzBuzz(undefined)}).toThrow();
  });

  it('should return "FizzBuzz" if input is divisible by 3 and 5', ()  => {
    const result = exercise1.fizzBuzz(15);
    expect(result).toBe('FizzBuzz');
  });
  
  it('should return "Fizz" if input is only divisible by 3', ()  => {
    const result = exercise1.fizzBuzz(9);
    expect(result).toBe('Fizz');
  });

  it('should return "Buzz" if input is divisible only by 5', ()  => {
    const result = exercise1.fizzBuzz(35);
    expect(result).toBe('Buzz');
  });

  it('should return input if it is  not divisible by 3 or 5', ()  => {
    const result = exercise1.fizzBuzz(7);
    expect(result).toBe(7);
  });


});