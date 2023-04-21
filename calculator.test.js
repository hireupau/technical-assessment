import calculator from './calculator';

// You are welcome to modify and add tests in this file...
// Currently the test asserts that the input is the same as the output

describe('calculator', () => {
  test('outputs booking details to be the same as the input', () => {
    const input = [{
      "id": 1,
      "from": "2017-10-23T08:00:00+11:00",
      "to": "2017-10-23T11:00:00+11:00"
    }];

    expect(calculator(input)).toEqual([{
      "id": 1,
      "from": "2017-10-23T08:00:00+11:00",
      "to": "2017-10-23T11:00:00+11:00"
    }]);
  });
});
