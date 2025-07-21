import { SignIn } from "@clerk/nextjs";
import { BackgroundBeams } from "@/components/ui/background-beams";

export default function Page() {
  return (
    <div className="flex justify-center items-center h-screen">
      <BackgroundBeams />
      <SignIn />
    </div>
  );
}
