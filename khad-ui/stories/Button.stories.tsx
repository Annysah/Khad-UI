import React from 'react'
import { Meta, Story} from '@storybook/react'
import { Button, Props } from '../src/Button' 

const meta: Meta = {
    title: 'Button',
    component: Button,
    argTypes: {
        onClick: { action: 'clicked' },
        children: {
            defaultValue: 'Default',
            control: {
                type: 'text',
            },
        }
    }
}

export default meta

export const Template: Story<Props> = (args) => <Button {...args} />

export const Default = Template.bind({})

export const Secondary = Template.bind({})

Secondary.args = {
    variant: 'secondary',
    children: 'Secondary Button'
}


//export const Default = () => <Button variant='primary'>Click Me</Button>

//export const Secondary = () => <Button variant='secondary'>Click Me</Button>