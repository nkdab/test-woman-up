import './ErrorBox.less'

export function ErrorBox(props) {
  const {errorText} = props;
  return <div className="error-box"> {errorText} </div>
}