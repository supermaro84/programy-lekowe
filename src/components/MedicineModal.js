import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const ModalExample = (props) => {
  const { buttonLabel, className, properties, values } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="danger" onClick={toggle}>
        {buttonLabel}
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>{buttonLabel}</ModalHeader>
        <ModalBody>
          <ol>
            {properties.map((property) => {
              return <li>{property}</li>;
            })}
          </ol>
          <ol>
            {values.map((value) => {
              let data = "";
              if (typeof value === "boolean")
                value ? (data = "TAK") : (data = "NIE");
              else data = value;
              return <li>{data}</li>;
            })}
          </ol>
        </ModalBody>
        <ModalFooter></ModalFooter>
      </Modal>
    </div>
  );
};

export default ModalExample;
