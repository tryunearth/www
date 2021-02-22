import styles from '../styles/SubscribeForm.module.css'

const SubscribeForm = () => {
  return (
    <form
      className={styles.form}
      action='https://tinyletter.com/tryunearth'
      method='post'
      target='popupwindow'
      onSubmit={() => {
        const windowObject = window.open(
          'https://tinyletter.com/tryunearth',
          'popupwindow', // TODO: compatible on mobile?
          'scrollbars=yes,width=800,height=600',
        )
        return true
      }}
    >
      <input
        className={styles.emailInput}
        type='email'
        name='email'
        id='tlemail'
        placeholder='Enter email address'
      />
      <input type='hidden' value='1' name='embed' />
      <input className={styles.submit} type='submit' value='Request Access' />
    </form>
  )
}

export default SubscribeForm
