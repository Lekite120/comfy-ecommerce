import React from 'react'
import styled from 'styled-components'
const Contact = () => {
  return (
    <Wrapper>
      <div className='section-center'>
        <h3>Join our newsletter and get 20% off</h3>
        <div className='content'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            sint unde quaerat ratione soluta veniam provident adipisci cumque
            eveniet tempore?
          </p>
          <form className='contact-form'>
            <input
              type='email'
              className='form-input'
              placeholder='enter email'
            />
            <button type='submit' className='submit-btn'>
              subscribe
            </button>
          </form>
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  padding: 5rem 0;
  h3 {
    text-transform: none;
  }
  p {
    line-height: 2;
    max-width: 45em;
    color: var(--clr-grey-5);
  }
  .contact-form {
    width: 90vw;
    max-width: 500px;
    display: grid;
    grid-template-columns: 1fr auto;
  }

  .form-input,
  .submit-btn {
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border: 2px solid #222;
  }
  .form-input {
    border-right: none;
    color: hsl(209, 34%, 30%);
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }
  .submit-btn {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }
  .form-input::placeholder {
    color: #222;
    text-transform: capitalize;
  }
  .submit-btn {
    background:  hsl(22, 31%, 52%);
    text-transform: capitalize;
    letter-spacing: 1px;
    cursor: pointer;
    transition: 0.3s;
    color: #222;
  }
  .submit-btn:hover {
    color: #fff;
  }
  @media (min-width: 992px) {
    .content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      gap: 8rem;
      margin-top: 2rem;
    }
    p {
      margin-bottom: 0;
    }
  }
  @media (min-width: 1280px) {
    padding: 15rem 0;
  }
`

export default Contact