import React from 'react';

class Lesson extends React.Component {
  state = {}

  render() {
    // const {selectedLesson, displayContent} = this.props
    const { params, lessons } = this.props
    console.log("params", params);
    const filteredLesson = lessons.filter(lesson => lesson.name.toLowerCase() === params.params.lessonName)
    const selectedLesson = filteredLesson.length ? filteredLesson[0] : lessons[0];
    const displayContent = this.state.displayContent;
    return (<div className="row">
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
  </div>)
  }
}
export default Lesson