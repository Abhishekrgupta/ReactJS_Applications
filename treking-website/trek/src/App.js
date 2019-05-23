import React from "react";
import "./css/style.css";
import axios from "./api/axios";
import Locations from "./locations";

class App extends React.Component {
  state = {
    locations: []
  };
  componentDidMount = async () => {
    const resp = await axios.get("/locations");
    this.setState({ locations: resp.data });
  };
  render() {
    return (
      <div>
        <div className="img-container">
          <img
            className="image-size"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeh5koDCgniRmOXqcpygEhJjg-u5ffOpKurZtzeUWPVt5_txKxoA"
            alt="Himalayas"
          />
          <div className="centered">Welcome To Heaven</div>
        </div>
        <div className="ui container">
          <h1 className="card-header">Latest Posts</h1>
          <div class="ui three stackable cards">
            <Locations locations={this.state.locations} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
