import css from '../index.module.css'
export default function Home() {
  return (
    <section>
        <h1 className={css.home_title}>Phonebook Home Page<span role="img" aria-label="Greeting icon">💁‍♀️</span></h1>
    </section>
  );
}
