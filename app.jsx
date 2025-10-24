import React, { useState, useEffect } from "react";
import { supabase } from "./supabaseClient";

export default function Contacts() {
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchContacts = async () => {
    setLoading(true);
    const { data, error } = await supabase.from("contacts").select("*");
    if (error) {
      alert("Error fetching contacts: " + error.message);
    } else {
      setContacts(data);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  const addContact = async () => {
    if (!name || !phone) {
      alert("Please fill out all fields");
      return;
    }
    const { error } = await supabase
      .from("contacts")
      .insert([{ name, phone }]);
    if (error) {
      alert("Error adding contact: " + error.message);
    } else {
      setName("");
      setPhone("");
      fetchContacts();
    }
  };

  const deleteContact = async (id) => {
    const { error } = await supabase.from("contacts").delete().eq("id", id);
    if (error) {
      alert("Error deleting contact: " + error.message);
    } else {
      fetchContacts();
    }
  };

  return (
    <div>
      <h2>Supabase React Contacts</h2>
      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <button onClick={addContact}>Add Contact</button>

      {loading ? (
        <p>Loading contacts...</p>
      ) : (
        <ul>
          {contacts.map((contact) => (
            <li key={contact.id}>
              {contact.name} - {contact.phone}{" "}
              <button onClick={() => deleteContact(contact.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
