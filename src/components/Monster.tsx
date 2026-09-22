type MonsterProps = {
  name: string
  type: string
  health: number
  attackDamage: number
}

function Monster(props: MonsterProps) {
  return (
    <section>
      <h2>{props.name}</h2>
      <p>Type: {props.type}</p>
      <p>Health: {props.health}</p>
      <p>Attack Damage: {props.attackDamage}</p>
    </section>
  )
}

export default Monster
