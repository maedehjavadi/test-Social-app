import {
  Autocomplete,
  Box,
  Button,
  Stack,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import React, { FC } from "react";
import { useForm } from "react-hook-form";
import { FormProvider } from "../../components/hook-form";
import IconChecker from "../../components/IconChecker";
import {
  socialMediaDataForm,
  socialMediasTypeEnum,
} from "../../types/socialLinks/socialMedias";

interface socialFormProps {
  closeAddForm?: React.Dispatch<React.SetStateAction<boolean>>;
  closeEditForm?: React.Dispatch<React.SetStateAction<Record<string, boolean>>>;
  openEditForm?: Record<string, boolean>;
  keyId?: string;
  socialMediaType?: socialMediasTypeEnum | string;
  SocialMediaLink?: string;
  setRefresh?: React.Dispatch<React.SetStateAction<boolean>>;
}

const SocialForm: FC<socialFormProps> = (props) => {
  const {
    closeAddForm,
    closeEditForm,
    openEditForm,
    keyId,
    socialMediaType,
    SocialMediaLink,
  } = props;

  const [isPending, setIsPending] = React.useState<boolean>(false);
  const [modalStatus, setModalStatus] = React.useState<{
    title: string;
    buttonText: string;
  }>({ title: "", buttonText: "" });

  const [socialData, setSocialData] = React.useState<socialMediaDataForm>({
    type: { key: "", type: "" },
    urlLink: "",
  });

  // const { data } = useFetch(`http://localhost:5050/UserLinks/${keyId}`);

  React.useEffect(() => {
    // setSocialData({
    //   id: data.id as string,
    //   type: { key: data.type as string, type: data.type as string },
    //   urlLink: data.url as string,
    // });
    const url = `http://localhost:5050/UserLinks/${keyId}`;
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setSocialData({
          id: json.id,
          type: { key: json.type, type: json.type },
          urlLink: json.url,
        });
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, [SocialMediaLink, keyId, socialMediaType]);

  React.useLayoutEffect(() => {
    if (!!keyId) {
      setModalStatus({
        title: `Edit Social ${socialData?.type?.type || ""}`,
        buttonText: `Edit Social ${socialData?.type?.type}`,
      });
    } else {
      setModalStatus({
        title: `Add Social ${
          socialData?.type?.type ? socialData?.type?.type : ""
        }`,
        buttonText: `Submit Social ${
          socialData.type.type ? socialData?.type?.type : ""
        }`,
      });
    }
  }, [keyId, socialData]);

  const socialOptions = Object.keys(socialMediasTypeEnum).map((key) => ({
    key,
    type: socialMediasTypeEnum[key as socialMediasTypeEnum],
  }));

  const methods = useForm<socialMediaDataForm>({
    mode: "onChange",
    defaultValues: {
      // ...socialData,
      type: {
        key: keyId ? socialMediaType : "",
        type: keyId ? socialMediaType : "",
      },
      urlLink: keyId ? SocialMediaLink : "",
    },
  });

  const {
    register,
    setError,
    setValue,
    reset,
    handleSubmit,
    formState: { isValid, isDirty, errors },
  } = methods;

  const onSubmit = async (data: socialMediaDataForm) => {
    setIsPending(true);
    if (!!keyId) {
      await fetch(`http://localhost:5050/UserLinks/${keyId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: data.type.type,
          url: data.urlLink,
        }),
      }).then((res) => {
        // console.log(res);
        if (res.ok) {
          setIsPending(false);
          reset();
          closeEditForm!({ ...openEditForm, [keyId]: false });
        }
      });
    } else {
      await fetch("http://localhost:5050/UserLinks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: data.type.type,
          url: data.urlLink,
        }),
      }).then((res) => {
        if (res.ok) {
          setIsPending(false);
          reset();
          closeAddForm!(false);
        }
      });
    }
  };
  const theme = useTheme();

  return (
    <Stack
      sx={{
        width: !!keyId ? 772 : 804,
        bgcolor:
          theme.palette.mode === "dark"
            ? "background.primary"
            : "background.secondary",
        borderRadius: !!keyId ? 1 : 4,
        p: 2,
      }}
      spacing={2}
    >
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Typography color="primary" mb={2} variant="subtitle2">
          {modalStatus.title}
        </Typography>
        <Stack spacing={1} direction="row">
          <Stack sx={{ width: 252 }}>
            <Autocomplete
              {...register("type", {
                required: true,
              })}
              sx={{ width: 252 }}
              value={socialData?.type || ""}
              fullWidth
              autoComplete
              options={socialOptions}
              getOptionLabel={(option) => (option.type ? option.type : "")}
              onChange={(ev, val) => {
                if (val !== null) {
                  setSocialData({ ...socialData, type: { ...val } });
                  setValue(
                    "type",
                    { ...val },
                    { shouldDirty: true, shouldValidate: true }
                  );
                } else {
                  setSocialData({ ...socialData, type: { key: "", type: "" } });
                  setError("type", { type: "focus" });
                }
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="type"
                  fullWidth
                  helperText={errors.type?.message}
                />
              )}
              renderTags={(option) => {
                return option.map((item, i) => (
                  <Box
                    component="li"
                    sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                    key={i}
                  >
                    <IconChecker iconName={item.key} color="#000" />
                    <Typography variant="body1" component="span" ml={2}>
                      {item.key}
                    </Typography>
                  </Box>
                ));
              }}
              renderOption={(props, option) => (
                <Box
                  component="li"
                  sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                  {...props}
                >
                  <IconChecker iconName={option.key} color="#000" />
                  <Typography variant="body1" component="span" ml={2}>
                    {option.type}
                  </Typography>
                </Box>
              )}
            />
          </Stack>
          <TextField
            // name="urlLink"
            label="Link"
            variant="outlined"
            error={!!errors.urlLink}
            fullWidth
            placeholder="Link"
            helperText={errors.urlLink?.message}
            // required
            {...register("urlLink", {
              required: { value: true, message: "this field id Required" },
              pattern: {
                value:
                  /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
                message: "Please fill correct URL",
              },
            })}
          />
        </Stack>
        <Stack
          direction="row"
          alignItems="flex-end"
          justifyContent="flex-end"
          spacing={2}
          mt={2}
        >
          <Button
            variant="outlined"
            color="secondary"
            size="small"
            onClick={() => {
              if (keyId) {
                closeEditForm!({ ...openEditForm, [keyId]: false });
              } else {
                closeAddForm!(false);
              }
            }}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            color="secondary"
            size="small"
            type="submit"
            disabled={!keyId ? isPending || !isValid : isPending || !isDirty}
          >
            {modalStatus.buttonText}
          </Button>
        </Stack>
      </FormProvider>
    </Stack>
  );
};

export default SocialForm;
