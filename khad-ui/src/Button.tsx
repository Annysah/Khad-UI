import React, { HTMLAttributes, ReactNode } from 'react'

export interface Props extends HTMLAttributes<HTMLButtonElement> {
    /**Provide a text for a button */
    children: ReactNode

    /** Choose any of these variants to work with */
    variant: 'primary' | 'secondary'
}

/** This is a Button component */
export const Button = ({children, variant='primary', ...props}: Props) => {
  return (
    <button {...props} style={{
            backgroundColor: variant === 'primary' ? 'blue' : 'gray', 
            //border: variant === 'primary' ? 'none' : 'blue',
            border: 'none',
            color: 'white',
            borderRadius: '5px',
            padding: '12px 14px',
            fontSize: '16px',
            cursor: 'pointer'
        }}>
        {children}
    </button>
  )
}
