import logo from './logo.svg';
import './App.css';
import React from 'react';





class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:8080/ReVo_webtest/Missions")
        .then(res => res.json())
        .then(
            (result) => {
              this.setState({
                isLoaded: true,
                items: result
              });
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
        )
  }


  Mission(props) {

    return
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {

      return (
          <ul>
            {items.map(item => (

                <li>
                  <a href={"http://localhost:8080/ReVo_webtest/MissionQRCode?missionCode="+item.MissionCode}>
                  {item.MissionName}, Capacity: {item.MissionCapacity} </a>

                </li>
            ))}
          </ul>
      );
    }
  }


}


export default App;
