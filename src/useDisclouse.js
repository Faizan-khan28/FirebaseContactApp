import { useState } from "react";


export default function useDisclouse () {
    const [isOpen, SetOpen] = useState(false);

    let open = () => {
      SetOpen(true)
    }
  
    let close = () => {
      SetOpen(false)
    }
  
    
    return {isOpen, open, close}
}