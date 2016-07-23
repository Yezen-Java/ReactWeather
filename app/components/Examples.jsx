var React = require('react');
var {Link} = require('react-router');

var Examples = (props) =>{
  return(

    <div>
    <h1 className="text-center page-title">Examples</h1>
    <p>here are few exmaples you can try out</p>
    <ol>
      <li>
        <Link to='/?location=london'>uk, london</Link>
      </li>
      <li>
        <Link to='/?location=sweden'>Sweden, swe</Link>
      </li>
    </ol>
    </div>
    )
};

module.exports = Examples;
