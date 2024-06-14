import React from 'react'

const LanguageMenu = () => {
  return (
    <div className="krds-drop-wrap">
      <button type="button" className="btn btn-txt ico-arr-down xsm drop-btn">
        Language
      </button>
      <div className="drop-menu">
        <div className="drop-in">
          <ul className="drop-list">
            <li>
              <a href="#" className="item-link ico-go" target="_blank">
                한국어
              </a>
            </li>
            <li>
              <a href="#" className="item-link ico-go" target="_blank">
                English
              </a>
            </li>
            <li>
              <a href="#" className="item-link ico-go" target="_blank">
                中文
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default LanguageMenu
