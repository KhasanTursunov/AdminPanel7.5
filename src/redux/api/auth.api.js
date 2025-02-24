import { mainApi } from "./index";

const extendedApi = mainApi.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation({
      query: (body) => ({
        url: "/auth/login",
        method: "POST",
        body
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useLoginMutation } = extendedApi;
