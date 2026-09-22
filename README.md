# Monster Battle Arena

React + TypeScript scaffold for the Monster Battle Arena assignment.

## Required pieces

- `App` owns the shared state.
- `Monster` displays monster information from props.
- `AttackButton` receives attack information and a callback function from props.
- `BattleStatus` displays player and monster health from props.
- Player name is controlled by an input.
- Player health and monster health are tracked with number state.
- Defeat messages are derived from health values instead of separate state.

## Build order

1. Add the monster prop type and render the `Monster` component.
2. Add monster health state in `App`.
3. Wire `AttackButton` to reduce monster health.
4. Reuse `AttackButton` for normal, heavy, and ultimate attacks.
5. Add conditional monster status text.
6. Add player name input and string state.
7. Add player health and monster attack behavior.
8. Add potion behavior with a max health cap of 100.
9. Pass final values into `BattleStatus`.

## Commands

```bash
npm install
npm run dev
npm run build
```
