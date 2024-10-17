Here’s a sample `README.md` file for your GitHub repository:

---

# String Calculator - TDD Kata

## Introduction

Hi, I'm **Jatin Thakur**, and this is my implementation of the String Calculator for the **Incubyte TDD Kata**. The goal of this project is to demonstrate Test-Driven Development (TDD) while creating a simple string calculator. The calculator takes a string of numbers separated by commas or custom delimiters and returns the sum.

This project is written in **JavaScript** using **Jest** for testing, and it follows the TDD approach where tests are written before implementing the logic.

## Features

- Supports basic addition of numbers in a comma-separated string.
- Handles newlines between numbers as delimiters.
- Allows the use of custom delimiters.
- Throws an exception for negative numbers and lists all negative values in the error message.

## Getting Started

Follow the instructions below to run the project on your local machine.

### Prerequisites

To run this project, you'll need **Node.js** installed on your machine.

- [Download Node.js](https://nodejs.org/) if you haven't already installed it.

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/yourusername/string-calculator-tdd.git
    cd string-calculator-tdd
    ```

2. **Install dependencies:**

    After navigating to the project folder, run the following command to install Jest (testing framework):

    ```bash
    npm install
    ```

### Running the Tests

This project is built using Test-Driven Development (TDD), and all the tests are written using **Jest**. To run the tests, use the following command:

```bash
npm test
```

Jest will run all the tests and display the results in the terminal.

### Example Test Cases

The string calculator works with the following cases:

- **Empty string**: `""` returns `0`
- **Single number**: `"1"` returns `1`
- **Two numbers**: `"1,5"` returns `6`
- **Multiple numbers**: `"1,2,3,4"` returns `10`
- **Newline as a delimiter**: `"1\n2,3"` returns `6`
- **Custom delimiter**: `"//;\n1;2"` returns `3`
- **Negative numbers**: Throws an error like `negative numbers not allowed: -2`

### Project Structure

- `stringCalculator.js` – Contains the logic for the string calculator.
- `stringCalculator.test.js` – Contains the test cases to validate the functionality.

## How it Works

The `add` function takes a string of numbers separated by commas, newlines, or custom delimiters. It then sums the numbers and returns the result. If a negative number is encountered, an exception is thrown with a message indicating the negative numbers found.

The implementation follows TDD best practices: we start with the simplest test case and build functionality step by step by writing a test, implementing the code, and then refactoring if necessary.

## Contact

Feel free to reach out if you have any questions:

- Email: jatinthakur3333@gmail.com

---

This README provides an introduction to the project, explains how to run it, and describes the basic functionality of the String Calculator. Let me know if you'd like to make any further adjustments!
