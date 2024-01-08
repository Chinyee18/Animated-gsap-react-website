"use strict";

const CloseBtn = ({onClick}) => {
  return (
    <button className="closeBtn" onClick={onClick}></button>
  )
}

if (!customElements.get('closeBtn')) { customElements.define('closeBtn', CloseBtn); }