## Cloning and running the Project

Here's a brief guide on how to clone and run a project using Vite without using Yarn:

**Step 1: Clone the Repository**
- Open your terminal and run `git clone <repository-url>`.
- Replace `<repository-url>` with the URL of the repository you want to clone.

**Step 2: Navigate to the Project Directory**
- Use the `cd` command to enter the project directory: `cd project-directory-name`.

**Step 3: Install Dependencies**
- Install project dependencies using npm:
  - Run: `npm install`

**Step 4: Start the Development Server**
- Launch the Vite development server with the following command:
  - Run: `npm run dev`

**Step 5: Access the Application**
- Open your web browser and go to `http://localhost:5173`.
- You can now explore and test your application in development mode.

Make sure you have Node.js installed on your computer as Vite relies on it to run projects.

# Frontend Challenge

- [x] Create a List and Detail view for articles from [NewsAPI](https://newsapi.org/).
- [x] It should use React.
- [x] It should use TypeScript.
- [x] It should use [Ant Design](https://ant.design/) for styling (you can customize the UI if you are interested in UI/UX).
- [x] It should be open-sourced on your GitHub repo.

# Extras
- [ ] Test your components with [Jest](https://jest-everywhere.now.sh).
- [x] It should use the [Clean Architecture](https://medium.com/@rostislavdugin/the-clean-architecture-using-react-and-typescript-a832662af803) as a design pattern.

------

# ALGORITHM
Work on this using a programming language you are comfortable with, create a separate folder for this task.

1. There is a string "NEGIE1", please reverse the alphabet and keep the number at the end. Result = "EIGEN1".

2. Given an example sentence, please find the longest word in that sentence. If there are multiple words with the same length, you can choose any one.

Example:
```js
const sentence = "I am very excited to work on algorithmic problems";

longest(sentence); 
Output : "algorithmic" (11 characters)
```

3. There are two arrays, namely the INPUT array and the QUERY array. Please determine how many times each word in the QUERY array appears in the INPUT array.

Example:
```js
const INPUT = ['xc', 'dz', 'bbb', 'dz'];
const QUERY = ['bbb', 'ac', 'dz'];

countWords(INPUT, QUERY);
Output : [1, 0, 2] 
because 'bbb' appears 1 time in INPUT,
'ac' does not appear in INPUT, and 'dz' appears 2 times in INPUT.
```

4. Please find the result of subtracting the sum of the diagonals of an NxN matrix.

Example:
```js
const matrix = [[1, 2, 0], [4, 5, 6], [7, 8, 9]];

diagonalDifference(matrix);
Output : 3 
because the sum of the first diagonal is 1 + 5 + 9 = 15,
and the sum of the second diagonal is 0 + 5 + 7 = 12, so the difference is 15 - 12 = 3.
```
