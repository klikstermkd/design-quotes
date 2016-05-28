import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchQuotes, translateMenuBorder } from '../actions';
import AddQuote from './AddQuote';

class Quotes extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchQuotes();
    this.props.translateMenuBorder(62);
  }

  render() {
    const { quotes, showSpinner } = this.props;

    return (
      <div>
        {/*<AddQuote />*/}
        {showSpinner ? <div>Loading quotes...</div> : null}
        <div>
          {quotes.map((quote, index) => (
            <ul key={index}>
              <li>Text: {quote.text}</li>
              <li>Author: {quote.author}</li>
              <li>Source: {quote.text}</li>
            </ul>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    quotes: state.quotes.items,
    showSpinner: state.quotes.isLoading.showQuotes 
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchQuotes: bindActionCreators(fetchQuotes, dispatch),
    translateMenuBorder: bindActionCreators(translateMenuBorder, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Quotes);