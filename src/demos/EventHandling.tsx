import React, { SyntheticEvent } from 'react';

export default function EventHandling(): JSX.Element {
  function handleButtonClick( event: SyntheticEvent ) {
    console.log( 'You clicked on the button! Good job! :D' );
    console.log( 'Event: ', event );
  }

  function add( x: number, y: number ) {
    return x + y;
  }

  return (
    <section>
      <div className="row">
        <div className="col">
          <button onClick={handleButtonClick} className="btn btn-primary">
            Here's a button yo
          </button>
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col">
          <button
            onClick={( event ) => console.log( add( event.pageX, event.pageY ) )}
            className="btn btn-warning"
          >
            Do a calculation yo
          </button>
        </div>
      </div>
    </section>
  );
}
