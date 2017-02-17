## Structure of state
```
{
  stake: 20,
  players: [
    'Fred',
    'Paul',
    'Gladdis',
    'Darby'
  ],
  gameStarted: false,
  rounds: [
    {
      complete: false,
      scores: [
        4,
        2,
        0,
        4
      ],
      stitches: 0,
      crash: false
    }
  ]

}
```

## Structure of components
- Menu
- Rules
- Setup
  - <StakeInput>
  - <PlayersInputs>
  - <StartGameButton>
- Game
  - <Stake>
  - <Players>
  - <Board>
    - <Round>
      - <Scores>
        - <Score>
          - <ScoreCount>
          - <AddScoreButton>
          - <RemoveScoreButton>
        - <Result>
      - <Stitches>
        - <StitchCount>
        - <AddStitchButton>
        - <RemoveStitchButton>