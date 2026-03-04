import * as React from "react"
import Button from "@mui/material/Button"
import {styled} from "@mui/material/styles"
import Dialog from "@mui/material/Dialog"
import DialogTitle from "@mui/material/DialogTitle"
import DialogContent from "@mui/material/DialogContent"
import IconButton from "@mui/material/IconButton"
import CloseIcon from "@mui/icons-material/Close"

const GlassDialog = styled(Dialog)(({theme}) => ({
  "& .MuiDialog-paper": {
    borderRadius: "16px",
    background: "rgba(0, 0, 0, 0.2)", // Semi-transparent white
    backdropFilter: "blur(10px)", // Blur effect
    maxWidth: "600px",
    transition: "all 0.4s ease-in-out",
    padding: "1%",
  },
}))

export default function CustomizedDialogs({title, firstletter, color}) {
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  return (
    <React.Fragment>
      {/* Trigger Button */}
      <Button
        onClick={handleClickOpen}
        className="my-animation myFont text-white duration-300 uppercase"
        sx={{
          padding: "0px",
          fontSize: "16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minWidth: "auto",
        }}
      >
        <div className="flex items-center">
          <span className="text-xl">{firstletter}</span>
          <div className="myFont lowercase text-sm">{title}</div>
        </div>
      </Button>

      {/* Glass Effect Modal */}
      <GlassDialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        {/* Header */}
        <DialogTitle className="text-center myFont md:text-left text-2xl font-semibold mb-2 text-white" sx={{position: "relative", padding: "1rem"}}>
          Me Contacter
          <IconButton aria-label="close" onClick={handleClose} className="absolute right-4 top-4 transition-all">
            <CloseIcon fontSize="medium" />
          </IconButton>
        </DialogTitle>

        {/* Content */}
        <DialogContent dividers className="p-6 flex flex-col space-y-4">
          <p className="myFont text-white text-lg font-medium">
            Mon téléphone: <span className="text-white">0699197324</span>
          </p>
          <p className="myFont text-white text-lg font-medium">
            Mon email:{" "}
            <span href="mailto:romain.flori-cantrelle@epitech.eu" className="myFont text-white hover:underline cursor-pointer">
              romain.flori-cantrelle@epitech.eu
            </span>
          </p>
        </DialogContent>
      </GlassDialog>
    </React.Fragment>
  )
}
