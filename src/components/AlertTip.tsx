import {createRoot} from "react-dom/client";
import {Icon} from "./Icon";
import './alert.scss'

const Alert = (props: any) => {
  let iconName = 'color-success'
  switch (props.alertType) {
    case 'success':
      iconName = 'color-success'
      break
    case 'warning':
      iconName = 'warning'

      break
    case 'error':
      iconName='MPIS-Error'

  }
  return (
    <div className='alert'>
      <Icon name={iconName}></Icon>
      <p>{props.content}</p>
    </div>
  )
}

const alertTip = (content: string, alertType:string) => {
  const component = <Alert content={content} alertType={alertType}/>
  const div = document.createElement('div')
  document.body.append(div)
  const root = createRoot(div)
  root.render(component)
  setTimeout(() => {
    root.unmount()
  }, 2000)
  setTimeout(() => {
    const alertElement = document.querySelector('.alert') as HTMLElement
    // @ts-ignore
    alertElement.style = "transform: translate(-50%,100%); animation: alertAnimation1 .3s ease-in;"
  }, 1700)
}

export {alertTip}