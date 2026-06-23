export {}

interface TurnstileObject {  
  render: (container: HTMLElement | null, options: {  
    sitekey: string  
    callback: (token: string) => void  
    ["expired-callback"]?: () => void  
    theme?: "light" | "dark" | "auto"  
  }) => string  
  reset: (widgetId: string) => void  
  remove: (widgetId: string) => void  
}

declare global {  
  interface Window {  
    turnstile?: TurnstileObject  
  }  
}  
