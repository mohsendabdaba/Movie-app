import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { InputGroup, Input,InputGroupAddon } from 'reactstrap';

class Modalbtn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }
  render() {
      const closeBtn = <button className="close" onClick={this.toggle}>&times;</button>;

      return (
      <div>
        <Button className='button' color="success" onClick={this.toggle}> Add Movies {this.props.buttonLabel}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle} close={closeBtn}>Please Enter the following Data</ModalHeader>
         
          <ModalBody>

          <InputGroup className="inputmovie" >
        <InputGroupAddon addonType="prepend"></InputGroupAddon>
        <Input value={this.props.btn1} onChange={e1 => this.props.modal1(e1)} placeholder="Title Movie" />
      </InputGroup>

      <InputGroup  className="inputmovie" >
        <InputGroupAddon addonType="prepend"></InputGroupAddon>
        <Input  value={this.props.btn2} onChange={e2=> this.props.modal2(e2)} placeholder="link Movie" />
      </InputGroup>

    <select value={this.props.btn3} onChange={e3 => this.props.modal3(e3)}  >
    <option> choose the movie rate </option>
    <option> 1</option>
    <option> 2</option>
    <option> 3</option>
    <option> 4</option>
    <option> 5</option>
    </select>

          </ModalBody>

          <ModalFooter>
            <Button color="primary" onClick={this.props.modal}>Add Movie</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default  Modalbtn;