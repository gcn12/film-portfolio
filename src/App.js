import React, { Component } from 'react';
import './App.css';
import {Route, Switch} from "react-router-dom"
import HomePage from "./homepage/HomePage"
import Header from "./header/Header"
import Films from "./films/Films"
import Work from "./WorkPages/Work"
import Contact from "./contact/Contact"
import Gallery from "./gallery/Gallery"

class App extends Component {

  state={
    url: "",
    urls: [],
    urlsLarge: [],
  }

  getURLSLarge = (input) => {
    this.setState({
      urlsLarge: input
    })
  }

  getEnlargeImageIndex = (index) => {
    this.setState({
      enlargeImageIndex: index
    })
  }

  clearURLs = () => {
    this.setState({
      urls: [],
      urlsLarge: [],
    })
  }
  
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route exact path="/films" render={(props)=> <Films {...props} clearURLs={this.clearURLs} getURL={this.getURL}/>}></Route>
          <Route exact path="/contact" component={Contact}></Route>
          <Route exact path='/:workPage' render={(props)=><Work getEnlargeImageIndex={this.getEnlargeImageIndex} getURLLarge={this.getURLSLarge} getPhotos={this.getPhotos}  urls={this.state.urls} {...props} url={this.state.url} title="Hello"/>}></Route>
          <Route exact path='/:workPage/gallery' render={(props)=><Gallery enlargeImageIndex={this.state.enlargeImageIndex} urls={this.state.urlsLarge} {...props} url={this.state.url} title="Hello"/>}></Route>
        </Switch>
      </div>
    );
  }
}


export default App