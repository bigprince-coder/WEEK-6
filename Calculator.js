import App from './App'
import './App.css'
import './Calculator.css'
import React from 'react'
import Button from './Button.js'
import { useState } from 'react'

function KeyPadComponent (props) {
  const [text1, setText] = useState('')
  const [showPicture, setShowPicture] = useState(false)
  const ClickHandle = e => {
    const value = e.target.innerText
    if (value == 'C') {
      setText('')
    } else if (value == '=') {
      setText(eval(text1))
    } else if (value == 'CE') {
      setText(text1.slice(0, -1))
    } else setText(text1 + value)
  }

  const showPictureToggle = () => {
    setShowPicture(prev => !prev)
  }

  const squareNumber = () => {
    const number = parseFloat(text1)
    if (!isNaN(number)) {
      const squared = number * number
      setText(squared.toString())
    }
  }

  return (
    <div className='Calculator'>
      <div className='screen-row'>
        <input type='text' readOnly value={text1} />
      </div>

      <div>
        <Button label='(' ClickHandle={ClickHandle} />
        <Button label='CE' ClickHandle={ClickHandle} />
        <Button label=')' ClickHandle={ClickHandle} />
        <Button label='C' ClickHandle={ClickHandle} />
      </div>

      <div>
        <Button label='1' ClickHandle={ClickHandle} />
        <Button label='2' ClickHandle={ClickHandle} />
        <Button label='3' ClickHandle={ClickHandle} />
        <Button label='+' ClickHandle={ClickHandle} />
      </div>
      <div>
        <Button label='4' ClickHandle={ClickHandle} />
        <Button label='5' ClickHandle={ClickHandle} />
        <Button label='6' ClickHandle={ClickHandle} />
        <Button label='-' ClickHandle={ClickHandle} />
      </div>
      <div>
        <Button label='7' ClickHandle={ClickHandle} />
        <Button label='8' ClickHandle={ClickHandle} />
        <Button label='9' ClickHandle={ClickHandle} />
        <Button label='*' ClickHandle={ClickHandle} />
      </div>
      <div>
        <Button label='.' ClickHandle={ClickHandle} />
        <Button label='0' ClickHandle={ClickHandle} />
        <Button label='=' ClickHandle={ClickHandle} />
        <Button label='/' ClickHandle={ClickHandle} />
      </div>
      <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
        <Button
          style={{
            width: '100%'
          }}
          label='show me'
          ClickHandle={showPictureToggle}
        />
        <Button
          style={{
            width: '100%'
          }}
          label='square'
          ClickHandle={squareNumber}
        />
      </div>
      {showPicture && (
        <img
          src='/mypic.jpg'
          alt='My Picture'
          style={{
            width: '200px',
            height: '150px'
          }}
        />
      )}
    </div>
  )
}
export default KeyPadComponent
