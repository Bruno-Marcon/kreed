import * as Style from "./styles"
import Logo from "../../molecules/logo"
import Menu from "../../molecules/menu"
import Button from "../../atoms/Button"

const Header = () =>{
  return(
    <Style.Box>
      <Logo/>
      <Menu/>
      <Button/>
    </Style.Box>
  )
}
export default Header