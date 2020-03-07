// Exercise 1
describe("greet", () => {
	test("should return a string with a name", () => {
		expect(greet("Alex")).toBe("Hello Alex!");
	});
});

// Exercise 2
describe("loginValidation", () => {
	test("should return 'Welcome!' for age 18+", () => {
		expect(loginValidation(18)).toBe("Welcome!");
	});

	test("should return 'Sorry, not allowed.' for age less than 18", () => {
		expect(loginValidation(17)).toBe("Sorry, not allowed.");
	});
});

//Exercise 3
describe("minNumber", () => {
	test("should return the least number", () => {
		expect(minNumber(10, 6)).toBe(6);
	});
});

//Exercise 4

describe("randomNumber", () => {

	test("should return random number", () => {
		const randomNum = randomNumber();

		expect(randomNum !== randomNumber()).toBeTruthy();
	});

	test("should return number between 1 and 10", () => {
		const randomNum = randomNumber();

		expect(randomNum > 0 && randomNum <= 10).toBeTruthy();
	});

	test("returned number should be integer", () => {
		const randomNum = randomNumber();

		expect(randomNum === Math.floor(randomNum)).toBeTruthy();
	});
});

//Exercise 5
describe("getOppositeNumber", () => {
	test("should return opposite number", () => {
		expect(getOppositeNumber(5)).toBe(-5);
	});
});