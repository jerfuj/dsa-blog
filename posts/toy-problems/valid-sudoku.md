---
title: Valid Sudoku
date: '03-22-2021'
image:
excerpt: Leetcode problem 36 (medium)
category: toy-problems
---
[Link to Leetcode Problem](https://leetcode.com/problems/valid-sudoku/)  

Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:
1. Each row must contain the digits 1-9 without repetition.
2. Each column must contain the digits 1-9 without repetition.
3. Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.  

**Note:**
* A Sudoku board (partially filled) could be valid but is not necessarily solvable.
* Only the filled cells need to be validated according to the mentioned rules.

### Example 1:

![example board 1](sudoku.png)

```js
Input: board =  
[["5","3",".",".","7",".",".",".","."]  
,["6",".",".","1","9","5",".",".","."]  
,[".","9","8",".",".",".",".","6","."]  
,["8",".",".",".","6",".",".",".","3"]  
,["4",".",".","8",".","3",".",".","1"]  
,["7",".",".",".","2",".",".",".","6"]  
,[".","6",".",".",".",".","2","8","."]  
,[".",".",".","4","1","9",".",".","5"]  
,[".",".",".",".","8",".",".","7","9"]]  
Output: true
```

### Example 2:  

```js
Input: board =  
[["8","3",".",".","7",".",".",".","."]  
,["6",".",".","1","9","5",".",".","."]  
,[".","9","8",".",".",".",".","6","."]  
,["8",".",".",".","6",".",".",".","3"]  
,["4",".",".","8",".","3",".",".","1"]  
,["7",".",".",".","2",".",".",".","6"]  
,[".","6",".",".",".",".","2","8","."]  
,[".",".",".","4","1","9",".",".","5"]  
,[".",".",".",".","8",".",".","7","9"]]  
Output: false  
Explanation: "Same as Example 1, except with the 5 in the top left corner being modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid."
```
 
### Constraints: 
board.length == 9  
board[i].length == 9  
board[i][j] is a digit or '.'.

## Solution:
First, we're going to create the storage we'll be using to determine whether there are duplicates in any row, column, or 3x3 square.
```js
const isValidSudoku = (board) => {
  const rows = [];
  const cols = [];
  const squares = {};
  for (let i = 0; i < 9; i++) {
    rows[i] = [];
    cols[i] = [];
  }
```
I used this way of storing the squares because I felt the math that others have used to solve this would be too difficult to remember if this happens to come up in an interview. i refers to the row (0-3) and j refers to the column (0-3). 
```js
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      squares[`${i}-${j}`] = [];
    }
  }
```
Now we'll create an outer and inner loop to iterate through the entire board. As long as the current cell doesn't contain a "." we'll check if the current row, column, and square already contain the value. Otherwise, we'll add it to each one's array.
```js
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] !== '.') {
        let current = board[i][j];
        let square = `${Math.floor(i/3)}-${Math.floor(j/3)}`;
        if (rows[i].includes(current)) return false;
        if (cols[j].includes(current)) return false;
        if (squares[square].includes(current)) return false;
        rows[i].push(current);
        cols[j].push(current);
        squares[square].push(current);
      }
    }
  }
  return true;
}
```

#### Runtime: 62.09%
#### Memory: 53.18%