import React from 'react'
import { Parser } from 'html-to-react'

export default function ReactTemplate({html,path}) {
  const rawHTML = `
  <div>
    <h1>The Second Example</h1>
    <p>The <strong>rat</strong> hates the <strong>cat</strong></p>
    <p><i>This is something special</i></p>
    <hr/>  
    <div>
      <img src="https://www.kindacode.com/wp-content/uploads/2021/06/pi-2.jpeg" width="1000"/>
    </div>
    <hr/>  
    <h4>Just Another Heading</h4>
  </div>
  `;
  
  return (
    <div >

    </div>
  )
}
