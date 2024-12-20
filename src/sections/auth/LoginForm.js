import { useState } from "react";
import * as Yup from "yup";
import { Link as RouterLink, useNavigate, useNavigation } from "react-router-dom";
// form
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
// @mui
import { Link, Stack, Alert, IconButton, InputAdornment, Button } from "@mui/material";
// import { LoadingButton } from "@mui/lab";
// components
import FormProvider, { RHFTextField } from "../../components/hook-form";
import { Eye, EyeSlash } from "phosphor-react";
import { useDispatch, useSelector } from "react-redux";
import { LoginUser } from "../../redux/slices/auth";

// ----------------------------------------------------------------------

export default function AuthLoginForm() {

  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const {isLoading} = useSelector((state) => state.auth);
  const navigate = useNavigate()

  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .required("Email is required")
      .email("Email must be a valid email address"),
    password: Yup.string().required("Password is required"),
  });

  const defaultValues = {
    email: "demo@gmail.com",
    password: "demo1234",
  };

  const methods = useForm({
    resolver: yupResolver(LoginSchema),
    defaultValues,
  });

  const {
    reset,
    setError,
    handleSubmit,
    formState: { errors },
  } = methods;

  // const onSubmit = async (data) => {
  //   try {
  //     console.log(data)
  //   dispatch(LoginUser(data))
   
     

  //   } catch (error) {
  //     console.error(error);
  //     reset();
  //     setError("afterSubmit", {
  //       ...error,
  //       message: error.message,
  //     });
  //   }
  // };


  const onSubmit = async (data) => {
    try {
      const res = await dispatch(LoginUser(data));
      if (res.success) {
        reset();
        navigate("/app");
      }
    } catch (error) {
      console.error(error);
      setError("afterSubmit", { message: error.error || "Login failed" });
    }
  };
  


  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        {!!errors.afterSubmit && (
          <Alert severity="error">{errors.afterSubmit.message}</Alert>
        )}

        <RHFTextField name="email" label="Email address" />

        <RHFTextField
          name="password"
          label="Password"
          type={showPassword ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setShowPassword(!showPassword)}
                  edge="end"
                >
                  {showPassword ? <Eye /> : <EyeSlash />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Stack>

      <Stack alignItems="flex-end" sx={{ my: 2 }}>
        <Link component={RouterLink} to="/auth/reset-password" variant="body2" color="inherit" underline="always">
          Forgot password?
        </Link>
      </Stack>

      <Button
        fullWidth
        color="inherit"
        size="large"
        type="submit"
        variant="contained"
        sx={{
          bgcolor: "text.primary",
          color: (theme) =>
            theme.palette.mode === "light" ? "common.white" : "grey.800",
          "&:hover": {
            bgcolor: "text.primary",
            color: (theme) =>
              theme.palette.mode === "light" ? "common.white" : "grey.800",
          },
        }}
      >
        Login
      </Button>
    </FormProvider>
  );
}
