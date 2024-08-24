type PersonListProps = {
    names: {
        fName: string,
        lName: string
    }[]
}


const PersonList = (props: PersonListProps) => {
  return (
    <div>
      {
        props.names.map((name, index) => (
            <h4 key={index}>{name.fName} {name.lName}</h4>
        ))
      }
    </div>
  )
}

export default PersonList
