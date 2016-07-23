var React = require('react');
var ReactDom = require('react-dom');
var ReactDOMServer = require('react-dom/server');

var ErrorModal = React.createClass({

  componentDidMount: function(){
    var modalMarkup=(
      <div className="reveal tiny text-center" id="error-model"  data-reveal="">
        <h4> Some Title</h4>
        <p>Our error Message</p>
        <p>
          <button className="button hollow" data-close="">
            Okay
          </button>
        </p>
      </div>
    );
    var $modal = $(ReactDOMServer.renderToString(modalMarkup));
    $(ReactDom.findDOMNode(this)).html($modal);
    var modal = new Foundation.Reveal($('#error-model'));
    modal.open();
  },

  render:function() {

    return(
      <div></div>
    );
  }
});

module.exports = ErrorModal;
