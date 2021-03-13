import { useState } from 'react';

export default function useForm() {
  // contact page,  input fields
  const [inputValues, setInputvalue] = useState({
    name: '',
    email: '',
    message: '',
    subject: '',
  });

  function updateInputValues(e) {
    let { value } = e.target;

    if (e.target.type === 'number') value = parseInt(e.target.value);

    setInputvalue({
      ...inputValues,
      [e.target.name]: value,
    });
  }

  // submit form, properties
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  async function submitForm(e, input) {
    e.preventDefault();
    setSubmitMessage(null);
    setErrorMessage(null);
    setLoading(true);

    const body = {
      name: input.name,
      email: input.email,
      message: input.message,
      subject: input.subject,
    };

    // send data to the serverless function when submit
    const res = await fetch(
      `${process.env.GATSBY_SERVERLESS_BASE}/submitform`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      }
    );

    // check if everthing worked
    const text = JSON.parse(await res.text());

    if (res.status >= 400 && res.status < 600) {
      setLoading(false);
      setErrorMessage(`${text.message}`);
    } else {
      setLoading(false);
      setSubmitMessage(`
      Gelukt, uw bericht is verstuurd.
      Binnen 24 uur krijgt u een bericht terug.
      `);
      setInputvalue({
        name: '',
        email: '',
        message: '',
        subject: '',
      });
    }

    function clearSubmitMessage() {
      setSubmitMessage('');
    }
    setTimeout(clearSubmitMessage, 5000);
  }

  return {
    inputValues,
    updateInputValues,
    loading,
    errorMessage,
    submitMessage,
    submitForm,
  };
}
