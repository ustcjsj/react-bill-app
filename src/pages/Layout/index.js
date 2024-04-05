import { Outlet } from 'react-router-dom';
import {Button} from 'antd-mobile';
const Layout = () => {
  return <div>
    <Button color="primary">Primary</Button>
    <div className="purple">
      <Button color="primary" >jubu</Button>
    </div>
    <h1>Layout</h1>]
    <Outlet />
  </div>
}
export default Layout;