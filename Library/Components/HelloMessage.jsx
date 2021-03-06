/** @jsx React.DOM */
define([
    "react"
], function(
    React
) {
    var HelloMessage = React.createClass({
        render: function() {
            return (
                <div>
                    <h1>Hello {this.props.name}!</h1>
                    <h2>Isn't this a beautiful day?</h2>
                    <div className="some"><div className="less"><div className="rules">
                        Styled by less file ;)
                    </div></div></div>
                    <p>
                        By the way, you just executed a dynamically build <em>React
                        Application</em> using requirejs, jsx and everything. <b>Yeah!!</b>
                    </p>
                </div>
            );
        }
    });

    return HelloMessage;
});
