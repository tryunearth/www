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
    <>
      <img
        src="/images/heart-hands.png"
        alt="thanks!"
        className={styles.heart}
      />

      <hr className={styles.hr} />

      <div
        className="author"
        style={{ margin: "0 auto", fontSize: "85%", opacity: 0.5 }}
      >
        <div
          className="avatar"
          style={{
            backgroundImage:
              'url("https://ouch-cdn2.icons8.com/Gk6MLJNFj3wuaqf-Mr_v-uu6mVXczpfDGVoIdCdUtNo/rs:fit:64:64/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy91aS1lbGVt/LzQ3MS8yY2ViNGVi/MC1mZDVhLTQxODEt/YTNlZi1iMDFmZDQx/MTVmMzMucG5n.png")',
          }}
        />
        <a href="https://icons8.com/illustrations/style--3d-hands-fun-and-wild">
          3D Hands Fun&amp;Wild
        </a>{" "}
        by{" "}
        <a href="https://icons8.com/illustrations/author/5c07e68d82bcbc0092519bb6">
          Icons8
        </a>
      </div>
    </>
  );
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
