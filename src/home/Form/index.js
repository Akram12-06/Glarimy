import React, { useState, useEffect } from 'react'
import './styles.css';

function Form() {

  const [gid, setGid] = useState('');
  const [pwd, setPwd] = useState('');
  const [gidError, setGidError] = useState('');
  const [pwdError, setPwdError] = useState('');
  const [note, setNote] = useState(true);
  const [valid, setValid] = useState(false);
  const default_note = `Please use your official email ID to log into Glarimy Assessments Portal`;
  const error_note = `A new password is sent to ${gid}. Use the new password to login`;

  useEffect(() => setGidError((gid == null || gid.trim().length < 1) ? 'Glarimy ID not found' : ''), [gid]);
  useEffect(() => setPwdError((pwd == null || pwd.trim().length < 1) ? 'Wrong password' : ''), [pwd]);
  useEffect(() => setValid(gidError === '' && pwdError === '' ? true : false), [gidError, pwdError])

  const onGidChange = e => setGid(e.target.value)
  const onPwdChange = e => setPwd(e.target.value)

  const onForgotPassword = e => {
    e.preventDefault();
    setNote(false);
  }

  const login = e => {
    e.preventDefault();
    console.log(valid?'Submitted':'Not submitted');
  }

  return (
    <div className="Form-container">
      <div className="Form-panel">
        <div className="Form-title">Login to GAP 2.0</div>
        <div className="Form-note">{note ? default_note : error_note}</div>
        <form onSubmit={login}>
          <div className='Form-group'>
            <div className="caption">Glarimy ID</div>
            <div><input type='text' placeholder='user@glarimy.com' className="Form-input" value={gid} onChange={onGidChange} /></div>
            <div className="error">{gidError}</div>
          </div>
          <div className='Form-group'>
            <div className="caption">Password</div>
            <div><input type='password' placeholder='Your password' className="Form-input" value={pwd} onChange={onPwdChange} /></div>
            <div className="error">{pwdError}</div>
            <div className="suggestion"><a href='http://localhost:3000' onClick={onForgotPassword} >Forgot password?</a></div>
            <div className="suggestion">Didn't receive the password? <a href='http://localhost:3000' onClick={onForgotPassword}>Send again!</a></div>
          </div>
          <div className='Form-group'>
            <button className="Form-button">Log in</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;