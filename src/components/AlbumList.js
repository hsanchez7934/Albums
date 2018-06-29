import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import fetch from 'node-fetch';
import AlbumDetail from './AlbumDetail';

export default class AlbumList extends Component {
  constructor() {
    super();
    this.fetchData = this.fetchData.bind(this);
  }
 state = {
   albums: []
 }

  componentDidMount() {
    this.fetchData();
  }

  async fetchData() {
    try {
      const data = await fetch('https://rallycoding.herokuapp.com/api/music_albums');
      const parsedData = await data.json();
      this.setState({
        albums: parsedData
      });
    } catch (error) {
      console.log(error);
    }
  }

  renderAlbums() {
    const { albums } = this.state;
    return albums.map((album, index) => <AlbumDetail key={index} album={album} />);
  }

  render() {
    const { albums } = this.state;
    console.log(albums);
    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}
