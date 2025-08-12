export function GameBoard() {
  return (
    <>
      <p> gameboard placeholder </p>
      <p>
        Going to need a board or grid that will allow tiles to be placed and
        flipped Logic to see if a match and handle result
      </p>
      <p> set max and min board sizes</p>
      <p>
        {" "}
        can do 12, 16, 20 and 24 card layouts, with long edge aligned to
        screen direction
      </p>
      <p> make the game area pages, with the preset sizes?</p>
      <p> symbols will be from noto emoji coloured</p>
      <p> shortlist possible symbols</p>
      <p> Will need tile template</p>
      <p>
        Use state to store which tiles have been flipped - maybe context? </p>
        <p>Store board as a list of n elements
            Random pick icons from list - duplicate them for basic board
            For non alike board pick half from first list, then get same index from match list
        </p>
        <p>
        when card flipped look up symbol to display when card 1 flipped store
        value in state for comparison when card 2 flipped check against value in
        state. If the same keep cards flipped and fade then If different have
        short display time then hide again and remove value from state. 
        track how many "success" and when [  6,8, 10 or 12] found then can finish game
        </p>
        <p>Have a
        turn counter for how many turns to complete? have a timer for time to
        complete? Have a congratulations animation for completing the board
        Cards make a small noise when flipped, successful match, and winning
      </p>
    </>
  );
}
