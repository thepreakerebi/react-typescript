type ContainerProps = {
    styles: React.CSSProperties
}

const Container = (props: ContainerProps) => {
  return (
    <div style={props.styles}>
      Welcome Diana
    </div>
  )
}

export default Container
