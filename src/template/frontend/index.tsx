import * as Style from './styles'

type FrontendProps = {
  children: React.ReactNode
}

const Frontend = ({children}: FrontendProps) =>{
  return(
    <Style.Container>
      Teste Frontend {children}
    </Style.Container>
  )
}
export default Frontend