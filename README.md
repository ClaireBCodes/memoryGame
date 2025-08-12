# Maddy's Memory Game
built by Claire Barrell, 2025

This has been designed as a memory game for my daughter who is in pre-school.
There are a couple of different options that can be chosen for the matches, 
which will help kids learn letters and words, as well as matching images.

# Tech Stack
- Vite framework
- Node
- React
- Vitest for testing
- lodash library
- Bootstrap for responsive design


# Future development
- proper unit testing
- compatability testing on different browsers and devices
- better UI scaling for all screen sizes


# User Stories

## Gameplay
As a player I want to be able to start a new game when I load the page
As a player I want to be able to start a new game when I click a new game button
As a player I want a warning that changing settings mid game (after a tile has been flipped) will start a new game
As a player I want to be able to select board size
As a player I want to be able to select match type
As a player I want to be able to select two tiles and see if they match
As a player I want to see both flipped tiles displayed for a short time
As a gameboard I want to flip the two tiles back over if not a match
As a player, I want to have enough time to see both tiles before they flip back over.
As a gameboard I want to prevent additional flips until the two tiles have flipped back over
As a player I want matched tiles to remain visible and be marked as matched
As a player I want a congratulations when I finish the game
As a player I want a new game button on my congratulations screen

## Appearance
As a player I want a responsive layout for tiny screens eg 4x3 becomes 3x4
As a player I want an attractive (to kids) background
As a player I want an interesting back of tile
As a player I want to see a flip animation
As a player I want the matched tiles to look different to the just flipped tiles
As a player I want to see the moused over tile pop out a bit

## Development
As a developer I want to unit test the logic
As a developer I want to playtest the game 
As a developer I want to check it is responsive to different screen sizes
As a developer I want to check it works on all common browsers (PC and phone)
As a developer I want to use best practices
As a developer I want a sensible data structure
As a developer I want to learn how to host this

## Extension
- track the number of turns
- track the speed to finish
- track the number of flips per card, and special victory if no more than needed