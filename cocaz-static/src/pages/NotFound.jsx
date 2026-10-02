import { Link } from "react-router-dom";
import { ArrowRight } from "@phosphor-icons/react";
import { FlagRule, Script, Sheet } from "../components/ui";

const NotFound = () => (
  <Sheet>
    <section className="grid min-h-[80svh] place-items-center px-5 pb-16 pt-32 text-center">
      <div>
        <p className="num text-[clamp(6rem,20vw,13rem)] font-bold leading-none text-ink/10">404</p>
        <FlagRule className="mx-auto -mt-2" />
        <h1 className="mt-8 text-3xl sm:text-5xl">
          This page is <Script className="text-[1.2em]">off script</Script>
        </h1>
        <p className="mx-auto mt-4 max-w-md text-[0.9375rem] text-ink-mute">The page you are looking for does not exist or has moved.</p>
        <Link to="/" className="btn-ink group mt-8">
          Back to home
          <ArrowRight size={14} className="transition-transform duration-300 ease-brand group-hover:translate-x-1" aria-hidden="true" weight="bold" />
        </Link>
      </div>
    </section>
  </Sheet>
);

export default NotFound;
