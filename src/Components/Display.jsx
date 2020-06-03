import React, {useState, useEffect} from 'react';
import '../App.css';

function Display(props) {
    const [val,setVal] = useState(0);
    useEffect(() => {
        document.title = `Glitches:  ${val}`;
      });
    return (
        <section className="display">
            <div id="calc">
            <h1>{val}</h1>
                <div>
                    <button id="One" onClick={() => setVal(val - 1)}>
                    -
                    </button>
                    <button id="One" onClick={() => setVal(val + 1)}>
                    +
                    </button>
                </div>
                <div>

                    <button id="Five" onClick={() => setVal(val - 5)}>
                    -5
                    </button>
                    <button id="Five" onClick={() => setVal(val + 5)}>
                    +5
                    </button>
                </div>
                <div>
                    <button id="Ten" onClick={() => setVal(val - 10)}>
                    -10
                    </button>
                    <button id="Ten" onClick={() => setVal(val + 10)}>
                    +10
                    </button>
                </div>
                <div>
                    <button id="reset" onClick={() => setVal(0)}>Reset</button></div>
                </div>
            
        </section>
    )
}

export default Display;

