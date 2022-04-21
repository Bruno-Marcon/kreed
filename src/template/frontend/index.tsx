import * as Style from './styles'
import Header from "../../organisms/header"

type FrontendProps = {
  children: React.ReactNode
}

const Frontend = ({children}: FrontendProps) =>{
  return(
    <Style.Container>
      <Header></Header>
    </Style.Container>
  )
}
export default Frontend