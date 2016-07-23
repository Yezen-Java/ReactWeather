var React = require('react');

var About = (props) =>{

  return(
    <div>
      <h1 className ="text-center page-title">About Component</h1>
      <p>This is a weather application build on React.</p>
      <p>Here some Tools that i used</p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a> - This was the JavaScript framework i used
        </li>
        <li>
          <a href="https://home.openweathermap.org">React</a> - Weather API
        </li>
      </ul>
    </div>

      );
};

module.exports = About;
