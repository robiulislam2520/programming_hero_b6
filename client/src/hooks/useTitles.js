import { useEffect } from 'react';

const useTitles = (title) => {
  useEffect(()=>{
    document.title = `${title} - Doctors Portal`
  }, [title])
}

export default useTitles;