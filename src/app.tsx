import React from 'react';
import ReactDom from 'react-dom';

const mainElement = document.createElement('div');
document.body.append(mainElement);

const App = () => {
	return (
		<div>
			<h1>React Rendering</h1>);
		</div>
	);
};

ReactDom.render(<App />, mainElement);
