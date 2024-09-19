import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

function ServiceList({ services, deleteService, onEdit }) {
  return (
    <div>
      <h2 className="my-4 text-center">Service List</h2>
      <ul className="list-group">
        {services.map(service => (
          <li
            key={service.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            {/* Left section with name and description */}
            <div className="service-content">
              <h5 className="text-truncate">{service.name}</h5>
              <p className="text-muted text-truncate">{service.description}</p>
            </div>

            {/* Price tag */}
            <span className="price-badge">
              ${Number(service.price).toFixed(2)}
            </span>

            {/* Action buttons (Edit/Delete) */}
            <div className="action-buttons d-flex align-items-center">
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip id={`edit-tooltip-${service.id}`}>Edit Service</Tooltip>}
              >
                <button
                  className="btn btn-outline-info btn-sm mr-2"
                  onClick={() => onEdit(service)}
                >
                  <FaEdit />
                </button>
              </OverlayTrigger>

              <OverlayTrigger
                placement="top"
                overlay={<Tooltip id={`delete-tooltip-${service.id}`}>Delete Service</Tooltip>}
              >
                <button
                  className="btn btn-outline-danger btn-sm"
                  onClick={() => deleteService(service.id)}
                >
                  <FaTrash />
                </button>
              </OverlayTrigger>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ServiceList;
