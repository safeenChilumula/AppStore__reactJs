import './index.css'

const AppItem = props => {
  const {items} = props
  const {appName, imageUrl} = items
  return (
    <li className="storeItem">
      <img src={imageUrl} alt={appName} className="image" />
      <p className="itemName">{appName}</p>
    </li>
  )
}
export default AppItem
