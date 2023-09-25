import { useSelector } from 'react-redux';
import { Outlet } from 'react-router';

function AuthRoutes({ allowListedRoles }) {
    const {role} = useSelector((state) => state.auth);
  return (
    <>
      {allowListedRoles.find((givenRole) => givenRole == role) ? < Outlet/> : <div>denied</div>}
    </>
  );
}

export default AuthRoutes;