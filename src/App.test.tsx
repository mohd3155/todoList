import React from 'react'
import ReactDOM from 'react-dom';


function Hello() {
    return <h1>Hello, Jest!</h1>;
  }

  test('renders the correct heading', () => {
    const div = document.createElement('div');
    
    ReactDOM.render(<Hello />, div);
    
    expect(div.textContent).toBe('Hello, Jest!');
  });