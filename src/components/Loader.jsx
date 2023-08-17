import { RotatingTriangles } from 'react-loader-spinner';
export const Loader = () => {
  return <div style={styles.container}>
 <RotatingTriangles 
  visible={true}
  height="80"
  width="80"
  ariaLabel="rotating-triangels-loading"
  wrapperStyle={{}}
  wrapperClass="rotating-triangels-wrapper"
  flex = "1"
  alignSelf = "center"
/>
  </div>
 
};

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
      },
  };