'use client'

import { useEffect, useState } from 'react'

export default function ReadingProgress() {  
  const [completion, setCompletion] = useState(0)

  useEffect(() => {  
    const updateScrollCompletion = () => {  
      const currentProgress = window.scrollY  
      const scrollHeight = document.body.scrollHeight - window.innerHeight  
      if (scrollHeight) {  
        setCompletion(  
          Number((currentProgress / scrollHeight).toFixed(2)) * 100  
        )  
      }  
    }

    window.addEventListener('scroll', updateScrollCompletion)  
    return () => window.removeEventListener('scroll', updateScrollCompletion)  
  }, [])

  return (  
    <div   
      className="fixed top-0 left-0 w-full h-[2px] bg-white/10 z-[60]"  
      aria-hidden="true"  
    >  
      <div   
        className="h-full bg-white transition-all duration-150 ease-out"  
        style={{ width: `${completion}%` }}  
      />  
    </div>  
  )  
}  
