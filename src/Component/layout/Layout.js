import React from 'react';
import './layout.css';

export default function Layout({ children }) {
  return (
    <div className="layoutWrapper">
      {Array.isArray(children) ? (
        children.map((child) => (
          <div className="childWrapper">
            <div className="childNameWrapper">{child.name}</div>
            {child}
          </div>
        ))
      ) : (
        <div className="childWrapper">
          <div className="childNameWrapper">{children.name}</div>
          {children}
        </div>
      )}
    </div>
  );
}
