import React from 'react';
import PropTypes from "prop-types";
import { headerTitle }  from '../../constants';
import Header from '../../components/header';
import Filters from '../filters';
import SpaceList from '../spaceList';

const Home = (props) => {
 const { title } = props;

 return (<div className="home-container">
          <Header title={title}  />
          <Filters />
          <SpaceList />
    </div>);
}
Home.propTypes = {
    title: PropTypes.string.isRequired
}

Home.defaultProps = {
    title : headerTitle
};

export default Home;