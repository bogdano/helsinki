const Person = ({name, number}) => <tr><td>{name}</td><td>{number}</td></tr>
const Persons = ({personsToShow}) => (
  <table><tbody>
    {personsToShow.map(person => (<Person key={person.name} name={person.name} number={person.number} />))}
  </tbody></table>
)
export default Persons