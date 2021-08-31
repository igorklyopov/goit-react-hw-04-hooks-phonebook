import PropTypes from "prop-types";
import React, { Component } from "react";
import Button from "../Button";
import style from "../ContactForm/ContactForm.module.css";

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  static propTypes = {
    onSubmitData: PropTypes.func.isRequired,
  };

  onInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onFormSubmit = (e) => {
    e.preventDefault();

    this.props.onSubmitData(this.state.name, this.state.number);

    this.reset();
  };

  reset = () => {
    this.setState({ name: "", number: "" });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form className={style.contactForm} onSubmit={this.onFormSubmit}>
        <label className={style.inputNameLabel}>
          <span className={style.inputLabelText}>Name</span>
          <input
            className={style.inputName}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я ]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов, не должно начинаться или оканчиваться пробелом. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            value={name}
            onChange={this.onInputChange}
          />
        </label>
        <label className={style.inputTelNumberLabel}>
          <span className={style.inputLabelText}>Number</span>
          <input
            className={style.inputTelNumber}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять из цифр и может содержать пробелы, тире, круглые скобки, и может начинаться с +, не должен начинаться или оканчиваться пробелом"
            required
            value={number}
            onChange={this.onInputChange}
          />
        </label>
        <Button type="submit">Add contact</Button>
      </form>
    );
  }
}

export default ContactForm;
