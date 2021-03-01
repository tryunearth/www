import { useState, useEffect } from 'react'

import styles from '../styles/modules/SubscribeForm.module.css'

const SubscribeForm = () => {
  const [email, setEmail] = useState('')
  const [isEmpty, setIsEmpty] = useState(true)
  const [hasSubscribed, setHasSubscribed] = useState(false)

  useEffect(() => {
    const handleVisibilityChange = () => {
      switch (document.visibilityState) {
        case 'visible':
          setHasSubscribed(true)
          break
        case 'hidden':
          setHasSubscribed(false)
          break
      }
    }

    document.addEventListener('visibilitychange', handleVisibilityChange, true)

    return document.removeEventListener(
      'visibilitychange',
      handleVisibilityChange,
    )
  }, [])

  const handleSubmit = () => {
    window.open('https://tinyletter.com/tryunearth', 'tl-recaptcha-popup')
    return true
  }

  const handleInput = (e) => {
    const value = e.target.value

    setEmail(value)
    setIsEmpty(!value.length)
  }

  const SuccessMessage = (
    <img
      src='https://ouch-cdn.icons8.com/preview/356/cf5ff481-c369-4f0a-bd7f-59656dfbba08.png'
      alt='thanks!'
      className={styles.heart}
    />
  )
  const Form = (
    <form
      className={styles.form}
      action='https://tinyletter.com/tryunearth'
      method='post'
      target='tl-recaptcha-popup'
      onSubmit={handleSubmit}
    >
      <input
        className={styles.emailInput}
        type='email'
        name='email'
        id='tlemail'
        placeholder='Enter email address'
        value={email}
        onChange={handleInput}
      />
      <input type='hidden' value='1' name='embed' />
      <input
        className={styles.submit}
        type='submit'
        value='Join the Waitlist'
        disabled={isEmpty}
      />
    </form>
  )

  return hasSubscribed ? SuccessMessage : Form
}

export default SubscribeForm
