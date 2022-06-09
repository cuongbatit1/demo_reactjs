import { screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ListUserScreenNew from "../ScreenPage/ListUserScreenNew/ListUserScreenNew";
import { render } from "../setupTests";
import { isNotNull, timeout, toInitials } from "../utils/Utils";

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

// test("test LoginScreen with event onmouse icon show password", async () => {
//   const { container } = render(<LoginScreen />);
//   fireEvent.mouseDown(screen.getByRole("button", { name: /toggle password visibility/i }));
// });

test("test ListUserScreenNew with click sign in success", async () => {
  const { container } = render(<ListUserScreenNew />);

  // const elEmail = screen.getByRole("textbox", {
  //   name: /email/i,
  // });
  // const elPassword = container.querySelector("#outlined-adornment-password");
  // expect(elEmail.value).toBe("admin@gmail.com");
  // expect(elPassword.value).toBe("123456");

  // // fireEvent.change(elEmail, { target: { value: "wewerrer" } });
  // fireEvent.click(
  //   screen.getByRole("button", {
  //     name: /Sign in/i,
  //   })
  // );
  // // await screen.findByRole();
  // // await screen.findAllByRole("textbox", {
  // //   name: /email/i,
  // // });
  // await container.querySelector("#outlined-adornment-password");
  // // await waitFor(() => {
  // //   expect(
  // //     screen.getByRole("textbox", {
  // //       name: /email/i,
  // //     }).value
  // //   ).toBe("admin@gmail.com");
  // // });
  // await waitFor(() => {
  //   expect(container.querySelector("#outlined-adornment-password").value).toBe("123456");
  // });
});

test("test Utils", async () => {
  await timeout(1000);
  toInitials("fullname AAA");
  isNotNull("AAA");
  console.log("aaaaaa");
});
