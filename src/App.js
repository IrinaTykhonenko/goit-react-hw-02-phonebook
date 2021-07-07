import { Component } from "react";
import Container from "./components/Container";
import ContactList from "./components/ContactList";
import ContactForm from "./components/ContactForm";
import Filter from "./components/Filter";
import initialContacts from "./components/ContactList/contacts.json";
import s from "./App.module.css";

class App extends Component {
  state = {
    contacts: initialContacts,
    filter: "",
  };

  handleChange = (event) => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  hasContacts = (name) => {
    return this.state.contacts.find((contact) => {
      return contact.name.toLowerCase() === name.toLowerCase();
    });
  };

  addContact = (contact) => {
    if (!this.hasContacts(contact.name)) {
      this.setState(({ contacts }) => ({ contacts: [contact, ...contacts] }));
    } else alert(`${contact.name} is already in contacts`);
  };

  findContact = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLocaleLowerCase();

    if (filter.length) {
      return contacts.filter((contact) =>
        contact.name.toLowerCase().includes(normalizedFilter)
      );
    } else {
      return contacts;
    }
  };

  deleteContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== contactId
      ),
    }));
  };

  render() {
    return (
      <Container>
        <div className="container">
          <h1 className={s.phonebook}>Phonebook</h1>
          <ContactForm onSubmit={this.addContact} />
        </div>
        <div>
          <h2 className={s.phonebook}>Contacts</h2>
          <Filter value={this.state.filter} onChange={this.handleChange} />
          <ContactList
            findContact={this.findContact}
            onDeleteContact={this.deleteContact}
          />
        </div>
      </Container>
    );
  }
}

export default App;
