import { screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LoginScreen from "../ScreenPage/LoginScreen/LoginScreen";
import { act } from "react-dom/test-utils";
import { render } from "../setupTests";

jest.mock("../utils/Utils");

// const axiosMock = new MockAdapter(axios);
afterEach(() => {
  console.log("afterEach");
  // axiosMock.reset();
});

// test("test LoginScreen", () => {
//   const { container } = render(<LoginScreen />);
//   const linkElement = screen.getByText(/Login/i);
//   expect(linkElement).toBeInTheDocument();
//   expect(
//     screen.getByRole("button", {
//       name: /Sign in/i,
//     })
//   ).toBeInTheDocument();
//   expect(
//     screen.getByRole("button", {
//       name: /Sign in/i,
//     })
//   ).not.toHaveAttribute("disabled");

//   expect(
//     screen.getByRole("textbox", {
//       name: /email/i,
//     })
//   ).toBeInTheDocument();

//   expect(container.querySelector("#outlined-adornment-password")).toBeInTheDocument();

//   expect(screen.getByRole("button", { name: /toggle password visibility/i })).toBeInTheDocument();
// });

test("test LoginScreen with event onmouse and click icon show password", async () => {
  const { container } = render(<LoginScreen />);
  const btnShowPass = screen.getByRole("button", { name: /toggle password visibility/i });
  const elPassword = container.querySelector("#outlined-adornment-password");
  const elLinkDontHave = screen.getByRole("link", {
    name: /don't have an account\?/i,
    hidden: true,
  });
  const elLinkGotoAbout = screen.getByRole("link", {
    name: /go to about/i,
    hidden: true,
  });
  expect(elLinkDontHave).toBeInTheDocument();
  expect(elLinkGotoAbout).toBeInTheDocument();
  fireEvent.click(elLinkDontHave);
  expect(elPassword.type).toBe("password");
  fireEvent.mouseDown(btnShowPass);
  fireEvent.click(btnShowPass);
  expect(elPassword.type).toBe("text");
  fireEvent.click(btnShowPass);
  expect(elPassword.type).toBe("password");
});

test("test LoginScreen with click check box remember", async () => {
  const { container } = render(<LoginScreen />);
  const checkbox = screen.getByRole("checkbox", {
    name: /select all desserts/i,
  });
  expect(checkbox).toBeInTheDocument();
  expect(checkbox).not.toBeChecked();
  fireEvent.click(checkbox);
  expect(checkbox).toBeChecked();
  fireEvent.click(checkbox);
  expect(checkbox).not.toBeChecked();
});

test("test LoginScreen with onblur email password", async () => {
  const { container } = render(<LoginScreen />);
  const elEmail = screen.getByRole("textbox", {
    name: /email/i,
  });
  const elPassword = container.querySelector("#outlined-adornment-password");
  // entering data in the userEvent
  // userEvent.type(elEmail, "typing some value into the input");
  fireEvent.change(elEmail, { target: { value: "" } });
  // invoking blur functiuonality.
  fireEvent.blur(elEmail);
  expect(elEmail.value).toBe("");
  fireEvent.change(elPassword, { target: { value: "" } });
  // invoking blur functiuonality.
  fireEvent.blur(elPassword);
  expect(elPassword.value).toBe("");
});

test("test LoginScreen with click sign in success", async () => {
  const { container } = render(<LoginScreen />);

  const elEmail = screen.getByRole("textbox", {
    name: /email/i,
  });
  const elPassword = container.querySelector("#outlined-adornment-password");

  const btnSignIn = screen.getByRole("button", {
    name: /Sign in/i,
  });
  expect(elEmail.value).toBe("admin@gmail.com");
  expect(elPassword.value).toBe("123456");

  // fireEvent.change(elEmail, { target: { value: "wewerrer" } });

  userEvent.click(btnSignIn);

  await waitFor(() => {
    expect(elEmail.value).toBe("");
  });
  await waitFor(() => {
    expect(elPassword.value).toBe("");
  });
});

test("test LoginScreen with empty email and password", async () => {
  const { container } = render(<LoginScreen />);

  const elEmail = screen.getByRole("textbox", {
    name: /email/i,
  });
  const elPassword = container.querySelector("#outlined-adornment-password");

  const btnSignIn = screen.getByRole("button", {
    name: /Sign in/i,
  });
  expect(elEmail.value).toBe("admin@gmail.com");
  expect(elPassword.value).toBe("123456");

  fireEvent.change(elEmail, { target: { value: "" } });
  fireEvent.change(elPassword, { target: { value: "" } });

  userEvent.click(btnSignIn);

  await waitFor(() => {
    expect(elEmail.value).toBe("");
  });
  await waitFor(() => {
    expect(elPassword.value).toBe("");
  });
});
