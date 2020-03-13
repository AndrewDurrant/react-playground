import React, { Component } from 'react'
import './countrySelector.css';

class countrySelector extends Component {

  changeSelection(value) {
    if(value === "None") {
      this.props.changeHandler(null);
    } else {
      const country = this.props.countries.find(country => country.name === value);
      this.props.handleChange(country);
    }
  }

  render() {
    const options = this
          .props 
          .countries 
          .map(
            (country, i) => <option value={country.name} key={i}>{country.name}</option>
          );

    return (
      <div className="country_selector">
        <form action="">
          <label htmlFor="country">Select a country:</label>
          <select 
            name="country" 
            id="country"
            onChange={e => this.changeSelection(e.target.value)}>
            <option value="None">Select one...</option>
            {options}
          </select>
        </form>
      </div>
    );
  }
}

countrySelector.defaultProps = {
  countries: []
}

export default countrySelector
