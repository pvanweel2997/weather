import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreateors } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
  state ={ term: ''};

  onInputChange = (e) => {
    this.setState({ term: e.target.value})
  }

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.fetchWeather(this.state.term)
    this.setState({ term: ''});
  }

  render() {
    return (
      <form className="input-group" onSubmit={this.onFormSubmit}>
        <input 
          placeholder="Get a five-day forcast in your favorite cities "
          className="form-control"
          value={this.state.term} 
          onChange={this.onInputChange} 
        />
        <span className="input-group-btn">
          <button  type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreateors({ fetchWeather },dispatch)
}

// export default connect(null,mapDispatchToProps)(SearchBar);
export default connect(null,{ fetchWeather })(SearchBar);