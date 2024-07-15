import React from "react";
import { useDispatch } from "react-redux";
import { addEmployee } from "../Store/reducer";
import { useState } from "react";
import "../index.css";
import statesMock from "../Mocks/states.json";
import departmentsMock from "../Mocks/departments.json";
import { Modal } from "my-modale-by-moi-meme";

export default function Form() {
  const [showModal, setShowModal] = useState(false);

  const initialState = {
    firstName: "",
    lastName: "",
    birthDate: "",
    startDate: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    department: "",
  };
  const [data, setData] = useState(initialState);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addEmployee(data));
    setShowModal(true);
    setData(initialState);
  };

  return (
    <div className="formContainer">
      <h1>Create Employee</h1>
      <form className="form" onSubmit={handleSubmit} >
        <label htmlFor="firstName">First Name</label>
        <input
          required="required"
          type="text"
          id="firstName"
          value={data.firstName}
          onChange={(e) => setData({ ...data, firstName: e.target.value })}
        />
        <label htmlFor="lastName">Last Name</label>
        <input
          required="required"
          type="text"
          id="lastName"
          value={data.lastName}
          onChange={(e) => setData({ ...data, lastName: e.target.value })}
        />
        <label htmlFor="birthDate">Birth Date</label>
        <input
          required="required"
          type="date"
          id="birthDate"
          value={data.birthDate}
          onChange={(e) => setData({ ...data, birthDate: e.target.value })}
        />
        <label htmlFor="startDate">Start Date</label>
        <input
          required="required"
          type="date"
          id="startDate"
          value={data.startDate}
          onChange={(e) => setData({ ...data, startDate: e.target.value })}
        />
        <div className="adressContainer">
          <label htmlFor="street">Street</label>
          <input
            required="required"
            type="text"
            id="street"
            value={data.street}
            onChange={(e) => setData({ ...data, street: e.target.value })}
          />
          <label htmlFor="city">City</label>
          <input
            required="required"
            type="text"
            id="city"
            value={data.city}
            onChange={(e) => setData({ ...data, city: e.target.value })}
          />
          <label htmlFor="state">State</label>
          <select
            required="required"
            id="state"
            value={data.state}
            onChange={(e) => setData({ ...data, state: e.target.value })}
          >
            {statesMock.map((state) => (
              <option key={state.abbreviation} value={state.name}>
                {state.name}
              </option>
            ))}
          </select>
          <label htmlFor="zip">Zip</label>
          <input
            required="required"
            type="number"
            id="zip"
            value={data.zip}
            onChange={(e) => setData({ ...data, zip: e.target.value })}
          />
        </div>
        <label htmlFor="department">Department</label>
        <select
          required="required"
          id="department"
          value={data.department}
          onChange={(e) => setData({ ...data, department: e.target.value })}
        >
          {departmentsMock.map((department) => (
            <option key={department.id} value={department.name}>
              {department.name}
            </option>
          ))}
        </select>
        <button type="submit">SAVE</button>
      </form>
      <Modal show={showModal} onClose={() => setShowModal(false)}>
        <h1>Employee created successfully!</h1>
      </Modal>
    </div>
  );
}
