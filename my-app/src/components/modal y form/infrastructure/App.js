import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const Modaluno = (props) => {
  const {
    Btn_name,
    class_name
  } = props;
  const [modal, setModal] = useState(false);
  const Activador = () => setModal(!modal);
  return (
    <div>
      <Form>
        <FormGroup>
          <Label for="exampleEmail">Usuario</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="Ingresa tu email" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleSelect">Selecciona</Label>
          <Input type="select" name="select" id="exampleSelect">
            <option>Opcion 1</option>
            <option>Opcion 2</option>
            <option>Opcion 3</option>
            <option>Opcion 4</option>
            <option>Opcion 5</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="exampleSelectMulti">Selector multiple</Label>
          <Input type="select" name="selectMulti" id="exampleSelectMulti" multiple>
            <option>Op. 1</option>
            <option>Op. 2</option>
            <option>Op. 3</option>
            <option>Op. 4</option>
            <option>Op. 5</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="exampleText">Descripción</Label>
          <Input type="textarea" name="text" id="exampleText" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleFile">Selecciona el archivo</Label>
          <Input type="file" name="file" id="exampleFile" />
          <FormText color="muted">
            Sube tu archivo en cualquier formato.
        </FormText>
        </FormGroup>
        <FormGroup tag="fieldset">
          <legend>Radio Buttons</legend>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" />{' '}
            Option one is this and that—be sure to include why it's great
          </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" />{' '}
            Option two can be something else and selecting it will deselect option one
          </Label>
          </FormGroup>
          <FormGroup check disabled>
            <Label check>
              <Input type="radio" name="radio1" disabled />{' '}
            Option three is disabled
          </Label>
          </FormGroup>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="checkbox" />{' '}
          Check me out
        </Label>
        </FormGroup>
        <Button color="danger" onClick={Activador}>{Btn_name}</Button>
      </Form>
      <Modal isOpen={modal} toggle={Activador} className={class_name}>
        <ModalHeader toggle={Activador}>Esta es la cabecera del modal</ModalHeader>
        <ModalBody>
          Este es un ejemplo de modal con reactstrap.
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={Activador}>Atrás</Button>{' '}
          <Button color="secondary" onClick={Activador}>Cancelar</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default Modaluno;