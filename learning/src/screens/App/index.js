import './App.css';
import FunctionalComponent from '../../components/FunctionalComponent';
import ClassComponent from '../../components/ClassComponent';

function App() {
  return (
    <div className="">
      <FunctionalComponent />
      <ClassComponent />
      <div className='container'>
        <div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} defaultValue={""} />
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
