import React from 'react';
import { connect } from 'react-redux';
import { addQuote } from '../actions';
import { bindActionCreators } from 'redux';

class AddQuote extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      quote: {
        text: '',
        author: '',
        source: ''
      }
    };

    this.handleChangeText = this.handleChangeText.bind(this);
    this.handleChangeAuthor = this.handleChangeAuthor.bind(this);
    this.handleChangeSource = this.handleChangeSource.bind(this);
  }

  handleChangeText(e) {
    const value = e.target.value;
    this.setState(
      { 
        quote: { ...this.state.quote, text: value } 
      }
    );
  }

  handleChangeAuthor(e) {
    const value = e.target.value;
    this.setState(
      {
        quote: { ...this.state.quote, author: value }
      }
    );
  }

  handleChangeSource(e) {
    const value = e.target.value;
    this.setState(
      {
        quote: { ...this.state.quote, source: value } 
      }
    );
  }

  render() {
    const { 
      onClick, 
      formEmpty,
      showSpinner,
      addQuoteFailure 
    } = this.props;

    return (
      <div>
        <h3>AddQuote</h3>
        <input 
          type="text" 
          value={this.state.quote.text} 
          onChange={this.handleChangeText}
          placeholder="Text"
          ref="text" />
        <br />
        <input 
          type="text" 
          value={this.state.quote.author}
          onChange={this.handleChangeAuthor}
          placeholder="Author"
          ref="author" />
        <br />
        <input 
          type="text" 
          value={this.state.quote.source}
          onChange={this.handleChangeSource}
          placeholder="Source"
          ref="source" />
        <br />
        <button onClick={() => {
          onClick(this.state.quote);
          this.setState(
            {
              quote: { text: '', author: '', source: '' }
            }
          );
        }}>Submit</button>
        {formEmpty ? <div>Every field is required.</div> : null}
        {addQuoteFailure ? <div style={{ color: 'red' }}>Error while adding the todo.</div> : null}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    formEmpty: state.quotes.formEmpty,
    showSpinner: state.quotes.isLoading.addQuote,
    addQuoteFailure: state.quotes.addQuoteFailure
  };
};

const mapDispatchToProps = dispatch => ({ onClick: bindActionCreators(addQuote, dispatch) });

export default connect(mapStateToProps, mapDispatchToProps)(AddQuote);