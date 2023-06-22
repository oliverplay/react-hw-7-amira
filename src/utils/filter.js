export default function filterFunction(contacts, filter) {
  return contacts.filter(contact => {
    const contactName = contact.name.toLowerCase();
    const contactNumber = contact.phone;
    const filterText = filter.toLowerCase();

    return (
      contactName.includes(filterText) || contactNumber.includes(filterText)
    );
  });
}
