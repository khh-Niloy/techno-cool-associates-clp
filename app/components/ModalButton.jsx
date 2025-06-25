import { Button } from "../../components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../components/ui/dialog";

export function ModalButton() {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button
            variant="outline"
            className={
              "w-full rounded-md hover:bg-blue-600 bg-[#212121] duration-300 transition-all hover:text-white cursor-pointer"
            }
          >
            See more
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Content</DialogTitle>
            <DialogDescription>
              {/* Make changes to your profile here. Click save when you&apos;re
              done. */}
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              {/* <Label htmlFor="name-1">Name</Label> */}
              {/* <Input id="name-1" name="name" defaultValue="Pedro Duarte" /> */}
            </div>
            <div className="grid gap-3">
              {/* <Label htmlFor="username-1">Username</Label> */}
              {/* <Input id="username-1" name="username" defaultValue="@peduarte" /> */}
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button
                variant="outline"
                className="w-full hover:bg-red-500 hover:text-white"
              >
                Close
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
