import './index.css'

const TabItem = props => {
  const {items, relateApp, isActive} = props
  const {tabId, displayText} = items

  const changeApp = () => {
    relateApp(tabId)
  }
  const changeColor = isActive === true ? 'apply' : ' '
  return (
    <li className="listContainer">
      <button
        className={`para ${changeColor}`}
        onClick={changeApp}
        type="button"
      >
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
