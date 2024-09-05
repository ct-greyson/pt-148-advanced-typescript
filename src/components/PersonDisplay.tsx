import React from "react";
import { ProfileProps } from "../interfaces/Person";

// setting up our component to take in ProfileProps data exclusively
// typing our component
// const PersonDisplay: React.FC<ProfileProps> = (props) => {
//   return (
//     <>
//         <h1>Profile Data</h1>
//         <h2>Name: {props.person.name}</h2>
//         <p>Age: {props.person.age}</p>
//         <p>Email: {props.person.email}</p>
//         <p>Message: {props.message}</p>
//     </>
//   )
// }

//Destructuring the properties we want to use from ProfileProps
const PersonDisplay = ({
  person: { name, age, email },
  message,
}: ProfileProps) => {
  return (
    <>
      <h1>Profile Data</h1>
      <h2>Name: {name}</h2>
      <p>Age: {age}</p>
      <p>Email: {email}</p>
      <p>Message: {message}</p>
    </>
  );
};

export default PersonDisplay;
