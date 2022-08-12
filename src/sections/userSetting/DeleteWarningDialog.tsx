import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

interface DeleteDialogProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  keyId?: string;
  setRefresh?: React.Dispatch<React.SetStateAction<boolean>>;
}

const DeleteWarningDialog = (props: DeleteDialogProps) => {
  const { open, keyId, setOpen, setRefresh } = props;

  const handleDeleteSocialLink = async (keyId: string) => {
    const res = await fetch(`http://localhost:5050/UserLinks/${keyId}`, {
      method: "DELETE",
    });
    if (!res.ok) {
      const body = await res.json();
      throw new Error(body.data.error.message);
    } else {
      // setRefresh!(true);
      setOpen(false);
    }
  };
  return (
    <Dialog
      open={open}
      sx={{
        "& .MuiPaper-root": {
          backgroundColor: "background.main",
          p: 5,
          width: 355,
          height: 232,
          borderRadius: "9px",
        },
      }}
    >
      <DialogTitle
        sx={{
          p: 0,
        }}
      >
        <Typography variant="h6" color="primary">
          Are you sure?
        </Typography>
      </DialogTitle>
      <DialogContent>
        <Typography></Typography>
      </DialogContent>
      <DialogActions sx={{ p: 0 }}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="flex-end"
          spacing={1}
        >
          <Button
            color="secondary"
            variant="outlined"
            sx={{ color: "#ffa82e" }}
            size="small"
            onClick={() => setOpen(false)}
          >
            Cancel
          </Button>
          <Button
            color="secondary"
            variant="contained"
            // sx={{ color: "#fff" }}
            onClick={() => handleDeleteSocialLink(keyId as string)}
            size="small"
          >
            Delete
          </Button>
        </Stack>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteWarningDialog;
