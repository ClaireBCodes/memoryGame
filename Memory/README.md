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


- size variation, currently everything is scaling to the width of the options list nav bar. Want it to scale with screen width instead
- size at different breakpoint - above medium is good. After that would like to gently scale to 100% width (and a little padding)
before we start shrinking cards. At a certain point (maybe small) switch to a vertical pattern arrangement
- decide how I want it to look on small mobile screens in terms of card size and layout

Appearance:
- size set by code not by text lengths!
cards
- medium and above
  - card size 120 px
  - horizontal layout max 4 rows
  - if 20 tiles, add an extra column and recenter
  - tiles remain same size
- small
  - layout long edge vertical
  - smaller tile size? consistent
menus
- medium and above
  - consistent header and nav bar width
  - full menu text displayed
- small
  - swap to burger menus, vertical stack



To Do
o GameLogic gameboard structure has changed. Will break things downstream
o Improve the background
- style the text
o develop a card back to display
o front of card background to display
o style the matched pairs
o flip animation
- lockout timer while displaying and flipping back - try to do with css rather than js
- style the options bar (especially for small screens)
- improve responsive grid to lock in particular ratios and scale cards down accordingly
- Have match style set from dropdown to be used to make game board
- have board size set from dropdown
- consistent radius on tiles, tileplaces and button


Bugs
- sometimes matched tiles appear blank
- if you click quickly you can have 3-4 tiles flipped and it gets confused
- sometimes a tile will stay flipped, but not be matched, and not count towards the next pair flipped
- tiles and board resize their area when different match options are selected
- gameboard area should not resize depending on the text lengths in the options menu!
- currently match is checked and style changed before flip animation has finished


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
As a player I want to see the moused over tile pop out a bit

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