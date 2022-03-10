import './App.css';
import FunctionalComponent from '../../components/FunctionalComponent';
import ClassComponent from '../../components/ClassComponent';
import React from 'react';
// import Header from '../../components/Header';
import Header from '../../components/Header/Header';
import LoginForm from '../../components/LoginForm';

const lessons = [
  { 
    name: 'Java',
    sections: [
      { name : 'Java Lesson 1', content: 'Java Content 1'},
      { name: 'Java Lesson 2', content: 'Java Content 2'}
    ]
  },
  { 
    name: 'ReactJS',
    sections: [
      {name: 'ReactJS Lesson 1', content: 'React JS content 1'},
      {name: 'ReactJS Lesson 2', content: 'React JS content 2'}
    ]
  }
]

class App extends React.Component {
  state = {
    index: 0
  }

  constructor(props) {
    super(props);
    // constructor binding
    // this.handleLessonChange = this.handleLessonChange.bind(this);
  }

  // auto-binding "this"
  handleLessonChange = (index, header) => {
    console.log('handleLessonChange',this);
    const lessonIndex = lessons.findIndex(lesson => {
      return lesson.name === header;
    })
    lessonIndex !== -1 && this.setState({ index: lessonIndex, displayContent: ""});
  }
  
  render() {
    const lessonsName = lessons.map(lesson => lesson.name)
    const selectedLesson = lessons[this.state.index];
    const displayContent = this.state.displayContent;
    return (
      <React.Fragment>
        {/* <> */}
        <div className='container'>
          <Header 
            headers={[
              'About Us',
              'Contact Us'
            ]}
            lessons={lessonsName}
            // dynamic binding
            // handleLessonChange={this.handleLessonChange.bind(this)}
            handleLessonChange={this.handleLessonChange}
            displayLoginButton={true}
          />
          
          {/* <FunctionalComponent />
          <ClassComponent /> */}
          {/* <LoginForm /> */}
          <div className="row">
            <div className="col-3">
              <ul className="list-group">
              {selectedLesson.sections.map(({name, content})=> {
                return <li
                  class="list-group-item" style={{ cursor: 'pointer' }}
                  onClick={() =>{
                    this.setState({displayContent : content })
                  }}
                  >
                    {name}
                </li>
              })}
              </ul>
            </div>
            <div className="col-9">
              {displayContent || <span></span>}
            </div>
          </div>
        </div>
        {/* </> */}
      </React.Fragment>
    );
  }
}

export default App;
