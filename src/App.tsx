import { useState } from 'react'
import './App.css'
import AttackButton from './components/AttackButton'
import BattleStatus from './components/BattleStatus'
import Monster from './components/Monster'

function ShowMessage({ message }: { message: string }) {
  return (
    <p>{message}</p>
  )
}

function App() {
  const [monsterHealth, setMonsterHealth] = useState(100)
  const [showAttacks, setShowAttacks] = useState(false)
  const [playerName, setPlayerName] = useState('')
  const [playerHealth, setPlayerHealth] = useState(100)

  const monsterMessage =
    monsterHealth === 100
      ? 'The monster is fighting!'
      : monsterHealth > 0
        ? 'The monster is still fighting!'
        : 'The monster has been defeated!'

  function decreaseMonsterHealth(damage: number) {
    setMonsterHealth(Math.max(monsterHealth - damage, 0))
  }

  function decreasePlayerHealth() {
    setPlayerHealth(Math.max(playerHealth - 15, 0))
  }

  function drinkPotion() {
    if (playerHealth + 20 > 100) {
      setPlayerHealth(100)
    } else {
      setPlayerHealth(playerHealth + 20)
    }
  }

  return (
    <>
      <h1>Monster Battle Arena</h1>
      <input
        type="text"
        placeholder="Enter your player's name"
        value={playerName}
        onChange={(event) => setPlayerName(event.target.value)}
      />
      <p>{playerName || 'Player'} vs. Alexandria Ocasio-Cortez</p>
      <Monster
        name="Alexandria Ocasio-Cortez"
        type="Shadow Creature"
        health={monsterHealth}
        attackDamage={15}
      />
      <p>Player Health: {playerHealth}</p>
      <button onClick={drinkPotion}>Drink Potion</button>
      <button onClick={() => setShowAttacks(!showAttacks)}>
        Attack Monster
      </button>
      {showAttacks && (
        <>
          <AttackButton
            label="Normal Attack"
            damage={10}
            onAttack={decreaseMonsterHealth}
          />
          <AttackButton
            label="Heavy Attack"
            damage={20}
            onAttack={decreaseMonsterHealth}
          />
          <AttackButton
            label="Ultimate Attack"
            damage={30}
            onAttack={decreaseMonsterHealth}
          />
        </>
      )}
      <button onClick={decreasePlayerHealth}>Monster Attacks Player</button>
      {playerHealth === 0 && <ShowMessage message="You have been defeated!" />}
      <ShowMessage message={monsterMessage} />
      <BattleStatus
        playerName={playerName || 'Player'}
        playerHealth={playerHealth}
        monsterName="Alexandria Ocasio-Cortez"
        monsterHealth={monsterHealth}
      />
    </>
  )
}

export default App
