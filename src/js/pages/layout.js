import React from 'react';
import Header from '../components/header';
import Main from '../components/main';
import Footer from '../components/footer';

export default class Layout extends React.Component {
    render(){
      return (
        <div id="wrapper">        
        <Header/>
        <Main/>
        <Footer/>
        </div>
      )
    }
  }
