import React, { useState } from 'react';

export default function ComponentState(): JSX.Element {
  // not destructuring
  // const record = useState( 0 );
  // const counter = record[0];
  // const setCounter = record[1];
  // ---------------------------------
  // destructuring
  const [ counter, setCounter ] = useState( 0 );

  return (
    <section>
      <div className="row">
        <div className="col">
          <button
            className="btn btn-primary"
            onClick={() => setCounter( counter + 1 )}
          >
            Increment the counter
          </button>
        </div>
        <div className="col">
          <p>{counter}</p>
        </div>
      </div>
    </section>
  );
}
