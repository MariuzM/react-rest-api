import React, { useEffect, useState } from 'react'
import axios from 'axios'

const CountryList = () => {
  const [countries, setCountries] = useState([])
  const [load, setLoad] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/alls')
      .then(res => {
        setCountries(res.data)
        setLoad(true)
      })
      .catch(err => {
        setError(err.message)
        setLoad(true)
      })
  }, [])

  if (load) {
    return (
      <ul>
        {error ? (
          <li>{error}</li>
        ) : (
          // eslint-disable-next-line react/no-array-index-key
          countries.map((country, index) => <li key={index}>{country.name}</li>)
        )}
      </ul>
    )
  }

  return <div>Loading...</div>
}
export default CountryList
