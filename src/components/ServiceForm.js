import React, { useState, useEffect } from "react";

function ServiceForm({ addService, editService, updateService }) {
  const [serviceData, setServiceData] = useState({
    name: "",
    description: "",
    price: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    description: "",
    price: "",
  });

  useEffect(() => {
    if (editService) {
      setServiceData(editService);
    }
  }, [editService]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setServiceData({ ...serviceData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!serviceData.name) newErrors.name = "Name is required";
    if (!serviceData.description)
      newErrors.description = "Description is required";
    if (!serviceData.price || serviceData.price <= 0)
      newErrors.price = "Price must be greater than zero";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      if (editService) {
        updateService(serviceData);
      } else {
        addService(serviceData);
      }
      setServiceData({ name: "", description: "", price: "" });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="form-group">
        <label>Name</label>
        <input
          type="text"
          className="form-control"
          name="name"
          value={serviceData.name}
          onChange={handleChange}
          required
        />
        {errors.name && (
          <small className="form-text text-danger">{errors.name}</small>
        )}
      </div>
      <div className="form-group">
        <label>Description</label>
        <input
          type="text"
          className="form-control"
          name="description"
          value={serviceData.description}
          onChange={handleChange}
          required
        />
        {errors.description && (
          <small className="form-text text-danger">{errors.description}</small>
        )}
      </div>
      <div className="form-group">
        <label>Price</label>
        <input
          type="number"
          className="form-control"
          name="price"
          value={serviceData.price}
          onChange={handleChange}
          required
        />
        {errors.price && (
          <small className="form-text text-danger">{errors.price}</small>
        )}
      </div>
      <button type="submit" className="btn btn-primary">
        {editService ? "Update Service" : "Add Service"}
      </button>
    </form>
  );
}

export default ServiceForm;
