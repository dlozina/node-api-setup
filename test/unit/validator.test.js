"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validator_1 = require("../../src/utils/validator");
describe('Validator', () => {
    it('exports a required method', () => {
        expect(validator_1.Validator.required).toBeDefined();
    });
    it('exports a string method', () => {
        expect(validator_1.Validator.string).toBeDefined();
    });
    it('exports an object method', () => {
        expect(validator_1.Validator.object).toBeDefined();
    });
    it('exports an array method', () => {
        expect(validator_1.Validator.array).toBeDefined();
    });
    it('exports a requiredString method', () => {
        expect(validator_1.Validator.requiredString).toBeDefined();
    });
});
describe('Validator.required', () => {
    it('checks a value is present', () => {
        expect(validator_1.Validator.required(1)).toBeTruthy();
    });
    it('throws if value is null', () => {
        expect(() => {
            validator_1.Validator.required(null, 'value');
        }).toThrow('value is required.');
    });
    it('throws if value is undefined', () => {
        expect(() => {
            validator_1.Validator.required(undefined, 'value');
        }).toThrow('value is required.');
    });
    it('throws if value is empty', () => {
        expect(() => {
            validator_1.Validator.required('', 'value');
        }).toThrow('value is required.');
    });
});
describe('Validator.string', () => {
    it('checks a string is present', () => {
        expect(validator_1.Validator.string('1')).toBeTruthy();
    });
    it('throws if value is not a string', () => {
        expect(() => {
            validator_1.Validator.string(10, 'value');
        }).toThrow('value must be a string.');
    });
    it('throws if value is empty', () => {
        expect(() => {
            validator_1.Validator.string('', 'value');
        }).toThrow('value must be a string.');
    });
});
describe('Validator.number', () => {
    it('checks a number is present', () => {
        expect(validator_1.Validator.number(1)).toBeTruthy();
    });
    it('throws if value is not a number', () => {
        expect(() => {
            validator_1.Validator.number('10', 'value');
        }).toThrow('value must be a number.');
    });
});
describe('Validator.integer', () => {
    it('checks an integer is present', () => {
        expect(validator_1.Validator.integer(1)).toBeTruthy();
    });
    it('throws if value is not an integer', () => {
        expect(() => {
            validator_1.Validator.integer(1.2, 'value');
        }).toThrow('value must be an integer.');
    });
});
describe('Validator.object', () => {
    it('checks an object is present', () => {
        expect(validator_1.Validator.object({})).toBeTruthy();
    });
    it('throws if value is not an object', () => {
        expect(() => {
            validator_1.Validator.object(10, 'value');
        }).toThrow('value must be an object.');
    });
});
describe('Validator.array', () => {
    it('checks an array is present', () => {
        expect(validator_1.Validator.array([])).toBeTruthy();
    });
    it('throws if value is not an array', () => {
        expect(() => {
            validator_1.Validator.array(10, 'value');
        }).toThrow('value must be an array.');
    });
});
describe('Validator.oneOf', () => {
    it('checks a value is present in an object', () => {
        expect(validator_1.Validator.oneOf(1, { a: 1 })).toBeTruthy();
    });
    it('throws if value is not in object', () => {
        expect(() => {
            validator_1.Validator.oneOf(10, { a: 1, b: 0 }, 'value');
        }).toThrow('value must be one of 1, 0.');
    });
});
describe('Validator.maxLength', () => {
    it('checks if length of a parameter is smaller or equal to a maximum length', () => {
        expect(validator_1.Validator.maxLength('test', 4)).toBeTruthy();
    });
    it('throws if length of a parameter is larger than a maximum length', () => {
        expect(() => {
            validator_1.Validator.maxLength('test', 3, 'parameter');
        }).toThrow('parameter must have a length smaller than or equal to 3.');
    });
});
describe('Validator.max', () => {
    it('checks if value is smaller than max', () => {
        expect(validator_1.Validator.max(2, 4)).toBeTruthy();
    });
    it('throws if value is bigger than max', () => {
        expect(() => {
            validator_1.Validator.max(4, 3, 'parameter');
        }).toThrow('parameter must be lower than or equal to 3.');
    });
});
describe('Validator.requiredString', () => {
    it('checks a string is present', () => {
        expect(validator_1.Validator.requiredString('1')).toBeTruthy();
    });
    it('throws if value is empty', () => {
        expect(() => {
            validator_1.Validator.requiredString('', 'value');
        }).toThrow('value is required.');
    });
});
