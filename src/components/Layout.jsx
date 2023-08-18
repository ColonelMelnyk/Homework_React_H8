import AppBar from './AppBar/AppBar';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

export const Layout = () => {
  return (
    <div 
    // className="wrapper"
    >
      <AppBar />
      <main 
      // className="main  "
      >
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
   
    </div>
  );
};