import Button from "./components/Button"
import ParentComponent from "./components/ParentComponent"
import PersonDisplay from "./components/PersonDisplay"
import Status from "./components/Status"
import { Person, ProfileProps } from "./interfaces/Person"

// Type Alias
// Person - name (string), age (number), email (string)

// type Person = {
//   name: string,
//   age: number,
//   email?: string
// }

// Interface
// for all intents and purposes, same thing as a type alias - still a custom type in TypeScript
// INTERCHANGABLE WITH TYPE ALIAS!!! don't worry about which you pick!
// interface Person {
//   name: string,
//   age: number,
//   email?: string,
// }

// interface ProfileProps {
//   person: Person
//   message: string
// }

function App() {

  const student: Person = {
    name: "Sally",
    age: 25,
    email: "sally@email.com"
  }

  const profileData: ProfileProps = {
    person: student,
    message: "Howdy!"
  }

  const handleClick = () => {
    console.log("Button clicked!")
  }

  return (
    <>
      {/* passing props of type ProfileProps into our PersonDisplay component */}
      <PersonDisplay {...profileData} />
      <Status />
      <ParentComponent>
        {/* everything we put inside our ParentComponent tags are considered our children props! */}
        <Status />
        <h3>Testing!</h3>
        <p> Still Testing !</p>
      </ParentComponent>
      <Button buttonClick={handleClick} />
    </>
  )
}

export default App
