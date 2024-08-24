import { personProps } from "./Person.types";



const Person = (props: personProps) => {

    const {fName, lName} = props.name;

  return (
    <div>
      {fName} {lName}
    </div>
  )
}

export default Person
