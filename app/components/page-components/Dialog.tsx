'use client'
import React from 'react'
import {
  Dialog,
  DialogHeader,
  DialogBody,
  Button
} from '../material-tailwind/material-tailwind'

interface Props {
  buttonText: string
}

function DialogDefault ({ buttonText }: Props) {
  const [open, setOpen] = React.useState(false)

  const handleOpen = () => { setOpen(!open) }

  return (
    <>
      <Button onClick={handleOpen} className="mt-10 text-xl bg-[rgba(255,146,56,1)]">{buttonText?.length > 0 ? buttonText : 'Get your free DEMO'}</Button>
      <Dialog open={open} handler={handleOpen} className='h-[90%]'>
        <DialogHeader>Get Started!</DialogHeader>
        <DialogBody className='h-[100%]'>
          <iframe src='https://share.hsforms.com/1tQorbEDyTy201OSxBDFzvw4mkp7' className='w-[100%] h-[90%]' />
        </DialogBody>
      </Dialog>
    </>
  )
}

export default DialogDefault
