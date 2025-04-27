import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";


export const determinePath = (path: string, router: AppRouterInstance) => {
  ///const router = useRouter();
  switch (path) {
    case "/dashboard/journal/createjournal":
      router.push("/dashboard/journal");
      break;
    case "/dashboard/journal":
      router.push("/dashboard/journal");
      break;

    case "/dashboard/journal/editjournal":
      router.push("/dashboard/journal");
      break;

    case "/dashboard/stories":
      router.push("/dashboard/stories");
      break;

    case "/dashboard/stories/createstory":
      router.push("/dashboard/stories");
      break;

    case "/dashboard/stories/editstory":
      router.push("/dashboard/stories");
      break;

    case "/dashboard/locations":
      router.push("/dashboard/locations");
      break;

    case "/dashboard/locations/createlocation":
      router.push("/dashboard/locations");
      break;

    case "/dashboard/locations/editlocation":
      router.push("/dashboard/locations");
      break;
  }
};
