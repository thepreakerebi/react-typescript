type personProps = {
    name: {
        fName: string,
        lName: string
    }
}



const Person = (props: personProps) => {

    const {fName, lName} = props.name;

  return (
    <div>
      {fName} {lName}
    </div>
  )
}

export default Person
