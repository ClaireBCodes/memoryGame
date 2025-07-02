# Josh's suggest match logic

- Your data structure sucks

Use something like:

```json
{
  "id": "a",
  "upperCase": "A",
  "lowerCase": "a",
  "word": "apple",
  "emoji": "🍎"
}
```

Lets call that a MatchGroup.

- Move the input data to its own file.
- Go get the `lodash` library. Use its `sampleSize` and `shuffle` methods.
- Move the board state in a React Context so that it doesn't have to worry about UI. Move most of the operations on it to that context.

A Card should have:

- `MatchGroup` entry
- `flipped` state
- `matched` (perma flipped)
- `symbolKey` (e.g. `uppercase`, `emoji` etc so it knows which to display)

Most of what's in GridOf12 setup code should be in the Context.

Should be able to fire it when player clicks "New game".

Kanban and User Stories

To Do
o GameLogic gameboard structure has changed. Will break things downstream
- Improve the background
- style the text
- develop a card back to display
- front of card background to display
- style the matched pairs
- flip animation
- lockout timer while displaying and flipping back - try to do with css rather than js
- style the options bar (especially for small screens)
- improve responsive grid to lock in particular ratios and scale cards down accordingly
- Have match style set from dropdown to be used to make game board
- have board size set from dropdown


Bugs
- sometimes matched tiles appear blank
- if you click quickly you can have 3-4 tiles flipped and it gets confused
- sometimes a tile will stay flipped, but not be matched, and not count towards the next pair flipped
- tiles and board resize their area when different match options are selected
- gameboard area should not resize depending on the text lengths in the options menu!


Gameplay
As a player I want to be able to start a new game when I load the page
As a player I want to be able to start a new game when I click a new game button
x - As a player I want a warning that changing settings mid game (after a tile has been flipped) will start a new game
As a player I want to be able to select board size
As a player I want to be able to select match type
As a player I want to be able to select two tiles and see if they match
As a player I want to see both flipped tiles displayed for a short time
As a gameboard I want to flip the two tiles back over if not a match

- (Josh) As a player, I want to have enough time to see both tiles before they flip back over.
  As a gameboard I want to prevent additional flips until the two tiles have flipped back over
  As a player I want matched tiles to remain visible and be marked as matched
  As a player I want a congratulations when I finish the game
  As a player I want a new game button on my congratulations screen

Appearance
As a player I want a responsive layout for tiny screens eg 4x3 becomes 3x4
As a player I want an attractive (to kids) background
As a player I want an interesting back of tile
As a player I want to see a flip animation
As a player I want the matched tiles to look different to the just flipped tiles

Development
As a developer I want to unit test the logic
As a developer I want to playtest the game and have no bugs
As a developer I want to check it is responsive to different screen sizes
As a developer I want to check it works on all common browsers (PC and phone)
As a developer I want to use best practices
As a developer I want a sensible data structure
As a developer I want to learn how to host this

Release
As a developer I want to host this site on my GitHub
As a developer I want to link this to my resume and linkedIn
As a developer I want a paid job

Extension
- track the number of turns
- track the speed to finish
- track the number of flips per card, and special victory if no more than needed