# Eigen News

Eigen News is a web application that allows users to explore a list of articles fetched from NewsAPI and view the details of each article. This app is built using React and TypeScript and styled with Ant Design, providing a user-friendly and customizable interface for reading news.

## Frontend Challenge

- [x] Create List and Detail views for articles from [NewsAPI](https://newsapi.org/).
- [x] Utilize React.
- [x] Implement TypeScript.
- [x] Apply [Ant Design](https://ant.design/) for styling, with the option to customize the UI for enhanced UI/UX.
- [x] Open-source the project on your GitHub repository.

## Extras

- [ ] Conduct component testing with [Jest](https://jest-everywhere.now.sh).
- [x] Implement the [Clean Architecture](https://medium.com/@rostislavdugin/the-clean-architecture-using-react-and-typescript-a832662af803) design pattern.

---

## Cloning and Running the Project

Here's a concise guide on how to clone and run the project using Vite without relying on Yarn:

**Step 1: Clone the Repository**
- Open your terminal and execute `git clone <repository-url>`.
- Replace `<repository-url>` with the URL of the repository you wish to clone.

**Step 2: Navigate to the Project Directory**
- Utilize the `cd` command to enter the project directory: `cd project-directory-name`.

**Step 3: Install Dependencies**
- Install project dependencies using npm:
  - Run: `npm install`

**Step 4: Start the Development Server**
- Initiate the Vite development server with the following command:
  - Run: `npm run dev`

**Step 5: Access the Application**
- Launch your web browser and navigate to `http://localhost:5173`.
- You can now explore and test your application in development mode.

Ensure that you have Node.js installed on your computer, as Vite relies on it to run projects.

---

## Algorithm

Work on this using a programming language you are comfortable with, creating a separate folder for this task.

1. You have a string "NEGIE1"; please reverse the alphabet and keep the number at the end. Result: "EIGEN1".

2. Given an example sentence, please find the longest word in that sentence. If there are multiple words with the same length, you can choose any one.

   Example:
   ```js
   const sentence = "I am very excited to work on algorithmic problems";

   longest(sentence); 
   Output: "algorithmic" (11 characters)
   ```

3. There are two arrays, namely the INPUT array and the QUERY array. Please determine how many times each word in the QUERY array appears in the INPUT array.

   Example:
   ```js
   const INPUT = ['xc', 'dz', 'bbb', 'dz'];
   const QUERY = ['bbb', 'ac', 'dz'];

   countWords(INPUT, QUERY);
   Output: [1, 0, 2] 
   Explanation: 'bbb' appears 1 time in INPUT, 
   'ac' does not appear in INPUT, and 'dz' appears 2 times in INPUT.
   ```

4. Please calculate the result of subtracting the sum of the diagonals of an NxN matrix.

   Example:
   ```js
   const matrix = [[1, 2, 0], [4, 5, 6], [7, 8, 9]];

   diagonalDifference(matrix);
   Output: 3 
   Explanation: The sum of the first diagonal is 1 + 5 + 9 = 15, 
   and the sum of the second diagonal is 0 + 5 + 7 = 12. Thus, the difference is 15 - 12 = 3.
   ```

Enhance the overall writing quality and format by expanding the title at the beginning.
