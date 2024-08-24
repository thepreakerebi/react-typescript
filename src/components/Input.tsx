type InputProps = {
    value: string,
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Input = (props: InputProps) => {

    // const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     console.log(event);
    // }

  return (
    <div>
      <input type="text" value={props.value} onChange={props.handleChange} />
    </div>
  )
}

export default Input
