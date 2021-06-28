import './ErrorBox.less'

export function ErrorBox({error}) {
  return <div className="error-box"> {{error}} </div>
}