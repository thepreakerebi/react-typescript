type StatusProps = {
    status: 'loading' | 'success' | 'error'
}


const Status = (props: StatusProps) => {

    const {status} = props;

  return (
    <div>
      {status === "loading"
        ? "loading..."
        : status === "success"
        ? "Data fetched successfully"
        : status === "error"
        ? "Error fetching data"
        : 'Nothing to show'}
    </div>
  );
}

export default Status
