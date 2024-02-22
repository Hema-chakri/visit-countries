import './index.css'

const VisitedCountries = props => {
  const {visitedCountryDetails, onRemove} = props
  const {imageUrl, name, isVisited, id} = visitedCountryDetails

  const handleRemove = () => {
    onRemove(id)
  }

  return (
    <li className="list-item">
      {isVisited === true ? (
        <div>
          <img src={imageUrl} alt="thumbnail" className="flag-image" />
          <div className="name-and-remove-button">
            <p>{name}</p>
            <button type="button" onClick={handleRemove}>
              Remove
            </button>
          </div>
        </div>
      ) : null}
    </li>
  )
}

export default VisitedCountries
