import React, { Component } from 'react';
import './App.css';
import {Route, Switch} from "react-router-dom"
import HomePage from "./homepage/HomePage"
import Header from "./header/Header"
import Films from "./films/Films"
import Work from "./WorkPages/Work"
import Contact from "./contact/Contact"
import content from "./content"
import Gallery from "./gallery/Gallery"

class App extends Component {

  state={
    url: "",
    urls: [],
    urlsLarge: [],
  }

  getURL = (input) => {
    this.setState({
      url: input
    })
  }

  getPhotos = () => {
    this.setState({
      urls: [],
      urlsLarge: []
    })
    let url
    if(window.location.href.split("/").length===6){
      url = window.location.href.split("/").reverse()[1]
    }else{
      url = window.location.href.split("/").reverse()[0]
    }
    this.setState({
      url: url
    })
    if(content[url]){
      let setID=content[url].album
      fetch(`https://www.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=3e8a789d6f4ae2feba4c606393db4c70&photoset_id=${setID}&user_id=96067761%40N02&format=json&nojsoncallback=1`)
      .then(response=>response.json())
      .then(data=>{
        const urlArray = []
        const urlArrayLarge = []
        data.photoset.photo.map(photo=>{
          fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.getSizes&api_key=3e8a789d6f4ae2feba4c606393db4c70&photo_id=${photo.id}&format=json&nojsoncallback=1`)
          .then(response=>response.json())
          .then(data=>{
            urlArray.push(data.sizes.size[7].source)
            urlArrayLarge.push(data.sizes.size[12].source)
            this.setState({
              urls: urlArray,
              urlsLarge: urlArrayLarge
            })
          })
          return(photo.id)
        })
      })
    }
  }

  getEnlargeImageIndex = (index) => {
    this.setState({
      enlargeImageIndex: index
    })
  }
  
  componentDidMount() {
    this.setState({
      urls: [],
      urlsLarge: [],
    })
    // this.getPhotos()
  }
  
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/film-portfolio" component={HomePage}></Route>
          <Route exact path="/film-portfolio/films" render={(props)=> <Films {...props} getURL={this.getURL}/>}></Route>
          <Route exact path="/film-portfolio/contact" component={Contact}></Route>
          <Route exact path={`/film-portfolio/${this.state.url}`} render={(props)=><Work getEnlargeImageIndex={this.getEnlargeImageIndex} getPhotos={this.getPhotos}  urls={this.state.urls} {...props} url={this.state.url} title="Hello"/>}></Route>
          <Route exact path={`/film-portfolio/${this.state.url}/gallery`} render={(props)=><Gallery enlargeImageIndex={this.state.enlargeImageIndex} urls={this.state.urlsLarge} {...props} url={this.state.url} title="Hello"/>}></Route>
        </Switch>
      </div>
    );
  }
}


export default App