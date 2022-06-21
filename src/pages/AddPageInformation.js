import React from 'react'
import {useHistory} from 'react-router-dom'
import { Editor } from "../components/TextEditor";

const  AddPageInformation=()=> {
  const history=useHistory()
  console.log('displayName',history.location.state)
  return (
      <Editor displayName={history?.location?.state?.displayName} />
      
  )
}

export default AddPageInformation
