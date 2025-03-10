import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import ProfileStatus from "./ProfileStatus";

const mockStore = configureStore([]);

describe("ProfileStatus Component", () => {
  test("Отображает переданный статус", () => {
    const store = mockStore({ Auth: { isAuth: true } });

    render(
      <Provider store={store}>
        <ProfileStatus status="Hello World" />
      </Provider>
    );

    expect(screen.getByText("Hello World")).toBeInTheDocument();
  });

  test("Отображает 'No status', если статус пустой", () => {
    const store = mockStore({ Auth: { isAuth: false } });

    render(
      <Provider store={store}>
        <ProfileStatus status="" />
      </Provider>
    );

    expect(screen.getByText("No status")).toBeInTheDocument();
  });
});
