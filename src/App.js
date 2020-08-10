import React, { Component } from 'react';
import './App.css';
import {Route, Switch} from "react-router-dom"
import HomePage from "./homepage/HomePage"
import Header from "./header/Header"
import Films from "./films/Films"
import Work from "./WorkPages/Work"
import Contact from "./contact/Contact"
import content from "./content"

class App extends Component {

  state={
    url: "",
    id: [],
    urls: [],
  }

  getURL = (input) => {
    this.setState({
      url: input
    })
  }

  getPhotos = () => {
    this.setState({
      url: window.location.href.split("/").reverse()[0]
    })
    let setID = "72157715435274906"
    const urlArray = []
    for (const item of content){
        urlArray.push(item.url)
    }
    const index = urlArray.indexOf(window.location.href.split("/").reverse()[0])
    if(index!==-1){
      this.setState({
        urls: []
      })

      console.log(index)
      setID=content[index].album
      fetch(`https://www.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=3e8a789d6f4ae2feba4c606393db4c70&photoset_id=${setID}&user_id=96067761%40N02&format=json&nojsoncallback=1`)
      .then(response=>response.json())
      .then(data=>{
        const urlArray = []
        data.photoset.photo.map(photo=>{
          fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.getSizes&api_key=3e8a789d6f4ae2feba4c606393db4c70&photo_id=${photo.id}&format=json&nojsoncallback=1`)
          .then(response=>response.json())
          .then(data=>{
            urlArray.push(data.sizes.size[9].source)
            this.setState({
            })
          })
          return(photo.id)
        })
        this.setState({
          urls: urlArray
        })
      })
    }
  }
  
  componentDidMount() {
    this.getPhotos()
  }
  

  render() {
    return (
      <div>
        <Header />
        <br></br>
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route exact path="/films" render={(props)=> <Films {...props} getURL={this.getURL}/>}></Route>
          <Route exact path="/contact" component={Contact}></Route>
          <Route exact path={`/${this.state.url}`} render={(props)=><Work getPhotos={this.getPhotos}  urls={this.state.urls} {...props} url={this.state.url} title="Hello"/>}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
