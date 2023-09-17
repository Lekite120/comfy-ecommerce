import React from 'react'

function AuthWrapper({children}) {
    if(loading){
        return(
            <Wrapper>
                loading
            </Wrapper>
        )
    }
    if(error){
        return(
            <Wrapper>
                {error.message}
            </Wrapper>
        )
    }
  return (
    <div>{children}</div>
  )
}

export default AuthWrapper