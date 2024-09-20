import React, { useState } from "react";
import ServiceList from "./components/ServiceList";
import ServiceForm from "./components/ServiceForm";
import { Modal, Button } from "react-bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [services, setServices] = useState([]);
  const [editService, setEditService] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [addedService, setAddedService] = useState(null);

  const addService = (service) => {
    const newService = { id: Date.now(), ...service };
    setServices([...services, newService]);
    setAddedService(newService);
    setShowModal(true);
  };

  const updateService = (updatedService) => {
    setServices(
      services.map((service) =>
        service.id === updatedService.id ? updatedService : service
      )
    );
    setEditService(null);
  };

  const deleteService = (id) => {
    setServices(services.filter((service) => service.id !== id));
  };

  const handleEdit = (service) => {
    setEditService(service);
  };

  const handleCloseModal = () => setShowModal(false);

  return (
    <div className="App container">
      <h1 className="my-4 text-center">Healthcare Service Management</h1>
      <div className="card">
        <ServiceForm
          addService={addService}
          editService={editService}
          updateService={updateService}
        />
      </div>
      <div className="card">
        <ServiceList
          services={services}
          deleteService={deleteService}
          onEdit={handleEdit}
        />
      </div>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Service Added Successfully</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            <strong>{addedService?.name}</strong> has been added to the service
            list!
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleCloseModal}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default App;
