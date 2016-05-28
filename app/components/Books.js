import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchBooks, translateMenuBorder } from '../actions';

class Books extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchBooks();
    this.props.translateMenuBorder(140);
  }

  render() {
    const { books, showSpinner } = this.props;

    return (
      <div>
        {showSpinner ? <div>Loading books...</div> : null}
        <div>
          {books.map((book, index) => (
            <ul key={index}>
              <li>Title: {book.title}</li>
              <li>Author: {book.author}</li>
            </ul>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    books: state.books.items,
    showSpinner: state.books.isLoading.showBooks 
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchBooks: bindActionCreators(fetchBooks, dispatch),
    translateMenuBorder: bindActionCreators(translateMenuBorder, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Books);