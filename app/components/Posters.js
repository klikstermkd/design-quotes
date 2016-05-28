import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPosters, translateMenuBorder } from '../actions';

class Posters extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchPosters();
    this.props.translateMenuBorder(222);
  }

  render() {
    const { posters, showSpinner } = this.props;

    return (
      <div>
        {showSpinner ? <div>Loading posters...</div> : null}
        <div>
          {posters.map((poster, index) => (
            <ul key={index}>
              <li>Title: {poster.title}</li>
              <li>Author: {poster.author}</li>
            </ul>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posters: state.posters.items,
    showSpinner: state.posters.isLoading.showPosters 
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPosters: bindActionCreators(fetchPosters, dispatch),
    translateMenuBorder: bindActionCreators(translateMenuBorder, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Posters);