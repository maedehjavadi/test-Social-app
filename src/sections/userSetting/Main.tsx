import AddIcon from "@mui/icons-material/Add";
import { Button, Grow, Stack, Typography } from "@mui/material";
import { useState } from "react";
import SocialForm from "./SocialForm";
import SocialLists from "./SocialLists";

const Main = () => {
  const [openForm, setOpenForm] = useState<boolean>(false);
  return (
    <Stack
      m={3}
      spacing={2}
      sx={{
        width: 852,
        mt: 6,
        p: 3,
        bgcolor: "background.main",
        borderRadius: 4,
      }}
    >
      <Typography variant="caption" color="disabled">
        Socials
      </Typography>
      <Button
        sx={{ width: 128, height: 28, p: 0 }}
        size="small"
        color="secondary"
        onClick={() => setOpenForm(true)}
        disabled={openForm}
      >
        <AddIcon sx={{ mr: 1 }} />
        ADD SOCIAL
      </Button>
      {openForm && (
        <Grow in={openForm}>
          <Stack justifyContent="center" alignItems="center">
            <SocialForm closeAddForm={setOpenForm} />
          </Stack>
        </Grow>
      )}
      <SocialLists />
    </Stack>
  );
};

export default Main;
