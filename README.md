Make a boggle board

1. Core Structure

- Display 4x4 board grid
- Map BOARD array to render cells

2. Button Component

- Create ButtonProps interface: { letter, vIndex, hIndex, isSelected, onSelect }
- Implement button styling for selected/unselected states
- Add click handler

3. State Management

- Track selected letters (using Set)
- Store foundWords array
- Implement word building from selections

4. Word Finding Logic

- Create findWords algorithm
- Use DFS to search adjacent cells
- Validate against dictionary
- Return sorted word list

5. Testing

- Add solve button
- Run test cases
- Display pass/fail status
- Show found words list

6. UI Polish

- Add visual feedback
- Style word list display
- Handle edge cases
