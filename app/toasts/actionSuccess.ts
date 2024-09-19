"use client"

import toast from "react-hot-toast"

export const successToast = () => {
  toast.success('Success, emssage sent!', {
    style: {
      borderRadius: '10px',
      background: '#333',
      color: '#fff',
    },
    iconTheme: {
      primary: '#3b82f6',
      secondary: '#FFFAEE',
    },
  });
}
