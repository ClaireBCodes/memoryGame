
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
