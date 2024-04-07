import { Outlet } from 'react-router-dom';
import { Button } from 'antd-mobile';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setBillListAsync } from '../../store/modules/billStore';
const Layout = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setBillListAsync())
  }, [dispatch])
  useState()
  
  return <div>
    <Button color="primary">Primary</Button>
    <div className="purple">
      <Button color="primary" >jubu</Button>
    </div>
    <h1>Layout</h1>
    <Outlet />
  </div>
}
export default Layout;