import React, { Component } from 'react';
import logo from './logo.svg';
import { Layout, notification, Icon } from 'antd';
import SiderCustom from './components/SiderCustom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './App.css';

class App extends Component {
  render() {
    return (
        <Layout>
            <SiderCustom />
        </Layout>
    );
  }
}

const mapStateToProps = state => {
    const { auth = {data: {}}, responsive = {data: {}} } = state.httpData;
    return {auth, responsive};
};
const mapDispatchToProps = dispatch => ({
    receiveData: bindActionCreators(receiveData, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
