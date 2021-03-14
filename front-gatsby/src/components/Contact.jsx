import React from 'react';
import useForm from '../utils/useForm';
import styled from 'styled-components';
import CurveDown from './curves/CurveDown';
import { breakpoint } from '../styles/breakpoints';

export default function Contact() {
  const {
    inputValues,
    updateInputValues,
    errorMessage,
    loading,
    submitMessage,
    submitForm,
  } = useForm();

  return (
    <ContactStyles id='contact'>
      <CurveDown fillColor='var(--blue' />
      <div className='outline'>
        <div className='contact'>
          <h3>Contact</h3>
          <h2 lang='en'>Enthousiast geworden.</h2>
          <form onSubmit={(e) => submitForm(e, inputValues)}>
            <input
              type='text'
              name='name'
              placeholder='* Uw naam'
              value={inputValues.name}
              onChange={(e) => updateInputValues(e)}
              required
              className='input-name'
            />
            <input
              type='email'
              name='email'
              placeholder='* Uw email'
              value={inputValues.email}
              onChange={(e) => updateInputValues(e)}
              className='input-email'
              required
            />
            <input
              type='text'
              name='subject'
              placeholder='* Onderwerp'
              className='input-subject'
            />
            <textarea
              name='message'
              cols='30'
              rows='10'
              placeholder='* Uw bericht'
              value={inputValues.message}
              onChange={(e) => updateInputValues(e)}
              required
              className='input-message'
            />
            <div className='submit'>
              <div className='submit-text'>
                <p>* Verplichte velden</p>
                <div className='submit-info'>
                  {errorMessage ? <p>Error: {errorMessage}</p> : ''}
                  {submitMessage ? <p>{submitMessage}</p> : ''}
                </div>
              </div>
              <button
                type='submit'
                disabled={loading}
                className='button red-button'
              >
                {loading ? 'Wordt verstuurd...' : 'Versturen'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </ContactStyles>
  );
}

const ContactStyles = styled.section`
  background-color: var(--dark-blue);

  .outline {
    outline: 2px solid var(--dark-blue);
  }
  .contact {
    max-width: 700px;
    margin: 0 auto;
    padding: 0 1.2rem;
  }

  form {
    margin-top: 4rem;
  }

  input,
  textarea {
    width: 100%;
    display: block;
    padding: 1rem;
    background-color: var(--blue);
    border: var(--border-width) solid var(--light-blue);
    border-radius: var(--border-radius);
    color: var(--white);
    font-size: 1.8rem;

    &::placeholder {
      color: #444d66;
      font-weight: bold;
      font-size: 1.6rem;
    }
  }

  input {
    margin: 2rem 0;
  }

  .input-subject {
    display: none;
  }

  .project-type {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 2rem;

    p {
      color: var(--white);
    }

    .button {
      margin-left: 1rem;
    }
  }

  .submit {
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;

    button {
      height: 50%;
    }

    p {
      color: var(--white);
      font-size: 1.5rem;
    }

    .submit-info {
      p {
        padding-top: 1rem;
      }
    }
  }

  @media ${breakpoint.sm} {
    .contact {
      margin: 3rem 0 0;
    }
  }
`;
