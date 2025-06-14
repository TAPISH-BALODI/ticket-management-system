import {react, useEffect} from 'react'

const Bstmt = () => {

  const styles = {
    container: {
      padding: 30
    },
    link: {
      color: 'black',
    }
  }

    useEffect(() => {
      window.location.replace('https://feemonk-react-web-two.vercel.app');
    }, [])
  
    
    return <div style={styles.container}>
      <h3>Redirecting...</h3>
    </div>
  }

  export default Bstmt