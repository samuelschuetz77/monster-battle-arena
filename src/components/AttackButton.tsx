type AttackButtonProps = {
  label: string
  damage: number
  onAttack: (damage: number) => void
}

function AttackButton(props: AttackButtonProps) {
  return (
    <button onClick={() => props.onAttack(props.damage)}>
      {props.label}
    </button>
  )
}

export default AttackButton
