import React, { useRef, useState } from "react";
import GridLayout from 'react-grid-layout';
import _ from 'lodash';
import 'react-resizable/css/styles.css';
import 'react-grid-layout/css/styles.css';
import './index.css'

function getInitialLayout() {
  return [0, 1, 2, 3, 4].map(function (i, key, list) {
    return {
      i: i.toString(),
      x: i * 2,
      y: 0,
      w: 2,
      h: 2,
    };
  });
}

export default function AddRemoveLayout(props) {
  const [items, setItems] = useState(getInitialLayout());
  const [count, setCount] = useState(0);
  const [breakPoints, setBreakPoints] = useState();
  const [cols, setCols] = useState();
  const [layout, setLayout] = useState();
  const [savedLayout ,setSavedLayout] = useState(getInitialLayout());
  const ref = useRef();

  const onAddItem = () => {
    setItems((prevItems) => {
      return prevItems.concat({
        i: 'n' + count,
        x: (prevItems.length * 2) % (cols || 12),
        y: Infinity, // puts it at the bottom
        w: 2,
        h: 2,
      });
    });
    setCount((prevCount)=> prevCount+1);
  };

  const onLayoutChange = (layout) => {
    setLayout(layout);
  };

  const onRemoveItem = (i) => {
    setItems((prevItems) => {
      return _.reject(prevItems, { i: i });
    });
  };

  const onSave = () =>{
    console.log(ref.current.state.layout);
    setSavedLayout(ref.current.state.layout);
  }

  function createElement(el) {
    const removeStyle = {
      position: 'absolute',
      right: '2px',
      top: 0,
      cursor: 'pointer',
    };
    const i = el.add ? '+' : el.i;
    return (
      <div key={i} data-grid={el}>
        {el.add ? (
          <span className="add text" onClick={onAddItem} title="You can add an item by clicking here, too.">
            Add +
          </span>
        ) : (
          <span className="text">{i}</span>
        )}
        <span className="remove" style={removeStyle} onClick={() => onRemoveItem(i)}>
          x
        </span>
      </div>
    );
  }

  const onResetLayout = () => {
    setLayout(getInitialLayout());
  }

  return (
    <div style={{ background: 'gray' }}>
      <button onClick={onAddItem}>Add Item</button>
      <button onClick={onSave}>Save Layout</button>
      <button onClick={onResetLayout}>reset Layout</button>
      <div style={{ color: 'white' }}>
        Saved Layout: {savedLayout.map((widget)=><div>{JSON.stringify(widget)}</div>)}
      </div>
      <GridLayout ref={ref} onLayoutChange={onLayoutChange} layout={layout} width={1000}>
        {_.map(items, (el) => createElement(el))}
      </GridLayout>
    </div>
  );
}

AddRemoveLayout.defaultProps = {
  className: 'layout',
  cols: 12,
  rowHeight: 100,
};
