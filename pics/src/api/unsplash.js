import axios from "axios";

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 9ebd2a51fc7424e9ace30da07d74da6f60503fb7f35c5659faaf1aa6980e6ade'
  }
});