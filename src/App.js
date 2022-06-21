import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <section className='container'>
        <h2 className='w-100 text-center my-2 border bg-warning text-white py-2'>
          Log in form
        </h2>
        <form className='w-50 bg-danger mx-auto'>
          <div className='row'>
            <section className='mb-2'>
              <label className='w-100'>
                Username
              </label>
              <input type='text' id='username-input'></input>
            </section>
          </div>
          <div className='row'>
            <section className='mb-2'>
              <label className='w-100'>
                Password
              </label>
              <input type='password' id='password-input'></input>
            </section>
          </div>
          <footer className='mb-2'>
            <button type='submit' id='login-button'>Log in</button>
          </footer>
        </form>

      </section>
    </>
  );
}

export default App;
