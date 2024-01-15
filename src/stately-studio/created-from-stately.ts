import { createMachine } from "xstate";

export const machine = createMachine(
  {
    /** @xstate-layout N4IgpgJg5mDOIC5QGEBOYCGAXSACAZqgPYC2uAyltmADYCeAdAJIQ1gDEAxjQJacDWAbQAMAXUSgADkVg8sPIgDsJIAB6IAjAE4ALAwBswrQCYtGgKw6NGgMzmtAGhB1NWhuYDsO4xoAcH8wBfQKc0TBwIAmIySmp6BgARMAAjIgBXRU4eRSh2VVgqHAYMfBxUAApzYWEASnYw6kjCUgpC2kYk1IysnJFxJBBpWXklFXUEYx8GG0MvDX1fC2NfHXMnFwQLDWmtYV8Vmy1dDR1hfWDQ9EaolticeM70zOzc7j4hMRUhuQVlAfHVr4GL47F5hBZzPodFpzGtnIgALQeNyGMwWQzCcy+ew6YIhECKIgQOAqBoRG4xNr0L4yH6jf6ImYMYzCbzGcy2Q6WLS+daIixAjRGayQ6pYnEXEBkvDNSlxRgsNg04a-MaabbIzxeXz6QyrYTGPkTYzuLw+fxBfHSprRVryxIpJ49KDKul-UAA04MDyzHQ2FlgrxGyam7x+AJ4wJAA */
    id: "Created from Stately",
    initial: "Idle",
    states: {
      Idle: {
        on: {
          click: {
            target: "Debouncing",
          }
        },
      },

      Debouncing: {
        after: {
          "500": "Idle"
        },

        on: {
          click: {
            target: "Debouncing",
            reenter: true
          }
        }
      }
    },
    types: { events: {} as { type: "next" } },
  },
  {
    actions: {},
    actors: {},
    guards: {},
    delays: {},
  },
);
