import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import {
  Button,
  Grow,
  Link as MuiLink,
  Skeleton,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import IconChecker from "../../components/IconChecker";
import useFetch from "../../hooks/useFetch";
import DeleteWarningDialog from "./DeleteWarningDialog";
import SocialForm from "./SocialForm";

const ListItem = styled(Stack)(({ theme }) => ({
  width: 804,
  borderRadius: "16px",
  transition: " box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
  boxShadow:
    " rgb(0 0 0 / 20%) 0px 2px 1px -1px, rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px",
}));
const ButtonStyle = styled(Button)(({ theme }) => ({
  height: 32,
  paddingInline: 0.7,
  paddingBottom: 1,
  paddingTop: 1,
}));

const SocialLists = () => {
  const [id, setId] = useState<string>("");
  const [openDeleteDialog, setOpenDeleteDialog] = useState<boolean>(false);
  const [openForm, setOpenForm] = useState<Record<string, boolean>>({});

  const { data, isPending } = useFetch("http://localhost:5050/UserLinks");

  const handleOpenForm = (key: string) => {
    setOpenForm({ ...openForm, [key]: true });
  };

  return (
    <>
      <Stack spacing={2} justifyContent="center" alignItems="center">
        {isPending &&
          [...Array(4)].map((_item, i) => (
            <Typography
              component="div"
              variant="h2"
              key={i}
              sx={{ width: "100%" }}
            >
              <Skeleton
                variant="rectangular"
                sx={{ borderRadius: 1, bgcolor: "background.secondary" }}
              />
            </Typography>
          ))}
        {data?.length > 0 &&
          data.map((item) => (
            <ListItem
              p={2}
              key={item?.id}
              sx={{ bgcolor: "background.secondary" }}
            >
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="center"
                  spacing={1}
                >
                  <IconChecker iconName={item?.type} color="primary" />
                  <Typography variant="body1" color="primary">
                    {item?.type}
                  </Typography>
                  <Typography variant="caption" color="primary">
                    link:
                  </Typography>
                  <Link href={item?.url as any}>
                    <MuiLink component="button" variant="body2" color="#ffa82e">
                      {item?.url}
                    </MuiLink>
                  </Link>
                </Stack>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="flex-end"
                  spacing={1}
                >
                  <ButtonStyle
                    variant="text"
                    color="warning"
                    size="small"
                    sx={{ color: "#ffa82e" }}
                    disabled={openForm[item?.id as string]}
                    onClick={() => handleOpenForm(item?.id as string)}
                  >
                    <EditIcon sx={{ mr: 1, width: 20, height: 20 }} />
                    <Typography variant="body1">Edit</Typography>
                  </ButtonStyle>
                  <ButtonStyle
                    variant="text"
                    size="small"
                    color="error"
                    sx={{ color: "#f44336" }}
                    onClick={() => {
                      setOpenDeleteDialog(true);
                      setId(item?.id as string);
                    }}
                  >
                    <DeleteIcon sx={{ mr: 1, width: 20, height: 20 }} />
                    <Typography variant="body1">Delete</Typography>
                  </ButtonStyle>
                </Stack>
              </Stack>

              {openForm[item?.id as string] && (
                <Grow in={openForm[item?.id as string]}>
                  <Stack justifyContent="center" alignItems="center" mt={2}>
                    <SocialForm
                      closeEditForm={setOpenForm}
                      keyId={item.id}
                      socialMediaType={item.type}
                      SocialMediaLink={item.url}
                      openEditForm={openForm}
                      // setRefresh={setRefresh}
                    />
                  </Stack>
                </Grow>
              )}
            </ListItem>
          ))}
      </Stack>
      {openDeleteDialog && (
        <DeleteWarningDialog
          setOpen={setOpenDeleteDialog}
          // setRefresh={setRefresh}
          open={openDeleteDialog}
          keyId={id}
        />
      )}
    </>
  );
};

export default SocialLists;
