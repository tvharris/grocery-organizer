import { useState, useEffect } from 'react'

function TestAPI() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [item, setItem] = useState([]);

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    //fetch("http://localhost:5000/api")
    //fetch("http://192.168.0.4:5000/api")
    fetch("quiet-brook-53041.herokuapp.com/api")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItem(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    console.log(item.hello)
    return (
      <div>Response from backend: {item.hello}</div>
    );
  }
}

export default TestAPI
