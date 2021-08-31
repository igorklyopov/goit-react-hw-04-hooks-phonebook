import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import Container from "./components/Container";
import ContactsList from "./components/ContactsList";
import ContactForm from "./components/ContactForm";
import Filter from "./components/Filter";
import Section from "./components/Section";

class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };

  componentDidMount() {
    const savedContacts = JSON.parse(localStorage.getItem("contacts"));

    if (savedContacts) {
      this.setState({ contacts: savedContacts });
    }
  }

  componentDidUpdate(prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }

    if (this.state.contacts.length === 0) {
      localStorage.removeItem("contacts");
    }
  }

  addContact = (name, number) => {
    const contactsItem = {
      id: uuidv4(),
      name,
      number,
    };

    const { contacts } = this.state;

    const duplicateContactName = contacts.find(
      (contact) => contact.name === contactsItem.name
    );
    const duplicateContactNumber = contacts.find(
      (contact) => contact.number === contactsItem.number
    );

    if (duplicateContactName) {
      alert(`${contactsItem.name} is already in contacts!`);
      return;
    }
    if (duplicateContactNumber) {
      alert(
        `${contactsItem.number} is already in contacts! (${duplicateContactNumber.name} has this number)`
      );
      return;
    }

    this.setState(({ contacts }) => ({
      contacts: [contactsItem, ...contacts],
    }));
  };

  onFilterChange = (e) => {
    this.setState({ filter: e.target.value });
  };

  getFilteredContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilterValue = filter.toLocaleLowerCase().trim();

    return contacts.filter((contact) =>
      contact.name.toLocaleLowerCase().includes(normalizedFilterValue)
    );
  };

  deleteContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== contactId
      ),
    }));
  };

  render() {
    const filteredContacts = this.getFilteredContacts();

    return (
      <Section>
        <Container>
          <h1 className="mainTitle">Phonebook</h1>
          <ContactForm onSubmitData={this.addContact} />
          <h2 className="title">Contacts</h2>
          <Filter onFilterChange={this.onFilterChange} />
          <ContactsList
            contacts={filteredContacts}
            onDeleteContactBtnClick={this.deleteContact}
          />
        </Container>
      </Section>
    );
  }
}

export default App;
