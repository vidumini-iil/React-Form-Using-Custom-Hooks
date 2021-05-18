export default function validateInfo(values) {
  let errors = {};
  const validateEmail =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!values.username.trim()) {
    errors.username = "Username is required!";
  }

  if (!values.email) {
    errors.email = "Email is required!";
  } else if (!validateEmail.test(values.email)) {
    errors.email = "Email is invalid!";
  }

  if (!values.password) {
    errors.password = "Password is required!";
  } else if (values.password.length < 4) {
    errors.password = "Password need to be 6 charactors";
  }

  if (!values.password2) {
    errors.password2 = "Passwoed id required";
  } else if (values.password2 !== values.password) {
    errors.password2 = "Password do not match";
  }

  return errors;
}
