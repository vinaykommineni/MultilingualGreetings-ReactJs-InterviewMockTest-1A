import './index.css'

const ButtonText = props => {
  const {eachButton, clickTabItem, isActive} = props
  const {buttonText, id} = eachButton
  const onCLickButton = () => {
    clickTabItem(id)
  }

  const colorCode = isActive ? 'color' : ''

  return (
    <li className="buttons-list">
      <button
        type="button"
        onClick={onCLickButton}
        className={`tab-bt ${colorCode}`}
      >
        {buttonText}
      </button>
    </li>
  )
}

export default ButtonText
