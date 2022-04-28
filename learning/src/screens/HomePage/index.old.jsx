import { Component } from "react";
import {ONE_HOUR, ONE_SEC} from "../../constants/time"
export default class HomePage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showModal: true,
      time: new Date()
    }
    console.log("Constructor");
  }

  // mostly replace by constructor
  // static getDerivedStateFromProps(props) {
  //   return {
  //     showModal: props.showModal
  //   }
  // }

  // define whether component to be render
  shouldComponentUpdate() {
    return !this.state.stopRendering
  }

  // Avoid update state, usually use when we can to do sth when props or state change
  componentDidUpdate(oldProps, oldStates) {
    // alert("Component already update") 
    // if(oldStates.showModal === this.state.showModal) {
    //   this.setState({ showModal: true })
    // }
   

  }


  closeModal = () => {
    this.setState({ showModal: false})
  }
  
  componentDidMount() {
    console.log("componentDidMount");
    // setTimeout(() => {
    //   this.setState({ showModal: true })
    // }, 3 * ONE_SEC);

    this.intervalId =  setInterval(() => {
      console.log("Running timer",  new Date().toLocaleTimeString())
      this.setState({ time: new Date() });
    }, ONE_SEC);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId)
  }

  render() {
    const { showModal, time } = this.state

    return (
      <div>
        <div className="modal fade show" style={{ display: showModal ? "block": "none" }} tabIndex={-1}>
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Promotion</h5>
                  <button onClick={()=> {
                    this.closeModal()
                  }} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                </div>
                <div className="modal-body">
                  <p>Discount 20% for product ABC!!!!</p>
                </div>
                <div className="modal-footer">
                  {/* <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button> */}
                  <button onClick={this.closeModal} type="button" className="btn btn-primary">Close</button>
                </div>
              </div>
            </div>
          </div>  
          <div>
          <button onClick={()=>this.setState((oldState) => {
            return { stopRendering: !oldState.stopRendering }
          })} type="button" className="btn btn-primary">Toggle Render</button>
          
          Timer {time.toLocaleTimeString()}
          </div>
      </div>
    )
  }
}