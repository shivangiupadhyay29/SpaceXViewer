import React from 'react';
import PropTypes from "prop-types";
import { headerTitle }  from '../../constants';
import Header from '../../components/header';

const Home = (props) => {
 const { title } = props;

 return (<div>
          <Header title={title}  />
    </div>);
}
Home.propTypes = {
    title: PropTypes.string.isRequired
}

Home.defaultProps = {
    title : headerTitle
  };

export default Home;