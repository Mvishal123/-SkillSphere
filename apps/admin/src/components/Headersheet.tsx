import { Sheet, SheetContent, SheetTrigger } from "ui";
import { Menu, Moon, Sun } from "lucide-react";
import { Button } from "ui";
import{ useRouter } from "next/navigation";

interface props {
  mode: string;
  setMode: React.Dispatch<React.SetStateAction<any>>;
}
const Headersheet = (props: props) => {
    const router = useRouter();
    const admin = true;

  return (
    <div className="lg:hidden flex">
      <Sheet>
        <SheetTrigger>
          <Menu className="w-12 h-10" />
        </SheetTrigger>
        <SheetContent side={"left"} className="w-[300px]">
          <div className="mb-10">
            <h1 className="text-5xl text-center font-extrabold">SkillShare</h1>
          </div>
          <div >
            {!admin ? (
              <div className="flex flex-col gap-2">
                <Button variant={"ghost"}>About</Button>
                <Button variant={"ghost"}>Why us</Button>
                <Button variant={"ghost"}>Courses</Button>
              </div>
            ) : (
              <div className="flex flex-col gap-2">
                <Button variant={"ghost"} onClick={() => router.push("/admin")}>Home</Button>
                <Button variant={"ghost"} onClick={() => router.push("/admin/addcourse")}>Add course</Button>
                <Button variant={"ghost"} onClick={() => router.push("/admin/courses")}>Courses</Button>
                <Button variant={"ghost"} onClick={() => router.push("/admin/dashboard")}>Dashboard</Button>
              </div>
            )}
          </div>
          <div className="w-full mt-10">
            <Button
              className="w-full"
              onClick={() => {
                props.mode === "dark"
                  ? props.setMode("light")
                  : props.setMode("dark");
              }}
              variant={"outline"}
            >
              {props.mode === "dark" ? (
                <Moon color="black" />
              ) : (
                <Sun color="black" />
              )}
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Headersheet;
