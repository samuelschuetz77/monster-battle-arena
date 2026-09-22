type BattleStatusProps = {
  playerName: string
  playerHealth: number
  monsterName: string
  monsterHealth: number
}

function BattleStatus(props: BattleStatusProps) {
  return (
    <section className="battle-status-card">
      <h2>Battle Status</h2>
      <p>{props.playerName}: {props.playerHealth} HP</p>
      <p>{props.monsterName}: {props.monsterHealth} HP</p>
    </section>
  )
}

export default BattleStatus
