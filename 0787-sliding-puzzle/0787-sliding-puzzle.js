/**
 * @param {number[][]} board
 * @return {number}
 */
var slidingPuzzle = function(board) {
    const target = '123450';  // The target board configuration
    let start = '';  // Convert the board into a string for easier processing
    
    // Flatten the board into a string
    for (let row of board) {
        start += row.join('');
    }
    
    // Check if the start configuration is already the target
    if (start === target) {
        return 0;
    }
    
    // Directions for moving the empty space (0)
    const directions = [-1, 1, -3, 3];  // Left, Right, Up, Down
    const visited = new Set();  // Set to track visited states
    const queue = [start];  // BFS queue
    let steps = 0;
    
    visited.add(start);
    
    // Perform BFS
    while (queue.length > 0) {
        let size = queue.length;
        for (let i = 0; i < size; i++) {
            let curr = queue.shift();
            
            // Find the position of '0' (empty space)
            let zeroPos = curr.indexOf('0');
            
            // Try all possible moves
            for (let direction of directions) {
                let newPos = zeroPos + direction;
                
                // Check if the move is valid (must stay within bounds of the board)
                if (newPos < 0 || newPos > 5 || 
                    (zeroPos % 3 === 0 && direction === -1) || 
                    (zeroPos % 3 === 2 && direction === 1)) {
                    continue;
                }
                
                // Swap the empty space with the adjacent tile
                let newBoard = curr.split('');
                [newBoard[zeroPos], newBoard[newPos]] = [newBoard[newPos], newBoard[zeroPos]];
                newBoard = newBoard.join('');
                
                // If we reached the target, return the number of moves
                if (newBoard === target) {
                    return steps + 1;
                }
                
                // Otherwise, add the new state to the queue if not visited
                if (!visited.has(newBoard)) {
                    visited.add(newBoard);
                    queue.push(newBoard);
                }
            }
        }
        steps++;
    }
    
    // If no solution is found, return -1
    return -1;
};
