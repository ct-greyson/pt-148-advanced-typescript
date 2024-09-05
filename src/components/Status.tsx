import React from 'react'

// Union String Literal
// our status can only be equal to the following strings
interface StatusProp {
    status: "success" | "loading" | "error"
}

const Status = () => {
  const statusInput: StatusProp = {
    status: "success"
  }

  let message = ""

  if(statusInput.status === "success") {
    message = "Successfully loaded data!"
  } else if (statusInput.status === "loading"){
    message = "Loading..."
  } else if (statusInput.status === "error"){
    message = "ERROR!"
  }

  return (
    <div>Status: {message}</div>
  )
}

export default Status