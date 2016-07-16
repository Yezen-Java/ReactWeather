var React = require('react');

var About = (props) =>{

  return(
    <div>
      <h1 className ="text-center">About Component</h1>
      <p>This is a weather application build on React.</p>
      <p>Here some Tools that i used</p>
      <ul>
        <li>
          <a herf="https://facebook.github.io/react">React</a> - this was the JavaScript framework i used
        </li>
        <li>
          <a herf="https://home.openweathermap.org">React</a> - Weather API
        </li>
      </ul>
    </div>

      );
};

module.exports = About;
