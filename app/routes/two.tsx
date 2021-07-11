import type { LoaderFunction } from "remix";
import { useRouteData } from "remix";

export let loader: LoaderFunction = async () => {
  return { message: "this is awesome 😎" };
};

export default function Two() {
  return (
    <div>
      <h2>It's another page!</h2>
      <p>
        <a href="/">I've had enough</a>
      </p>
    </div>
  );
}
