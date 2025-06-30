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

export function ModalButton({ text = "See more" }) {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button
            variant="outline"
            className={`${
              text == "See more" ? "w-full" : ""
            } rounded-lg hover:bg-blue-600 py-5 bg-[#212121] duration-300 transition-all hover:text-white cursor-pointer`}
          >
            {text}
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogDescription>
              <div
                className="object-cover rounded-2xl w-full h-[10rem] mb-2 bg-black/10"
                // src={e.image}
                // alt="Shoes"
              />
              <DialogTitle className={"text-black"}>Diakin</DialogTitle>
              <DialogDescription className="text-black">
                Product info
              </DialogDescription>

              <div
                className="object-cover rounded-2xl w-full h-[10rem] mb-2 mt-10 bg-black/10"
                // src={e.image}
                // alt="Shoes"
              />
              <DialogTitle className={"text-black"}>LG</DialogTitle>
              <DialogDescription className="text-black">
                Product info
              </DialogDescription>

              <div
                className="object-cover rounded-2xl w-full h-[10rem] mb-2 mt-10 bg-black/10"
                // src={e.image}
                // alt="Shoes"
              />
              <DialogTitle className={"text-black"}>LG</DialogTitle>
              <DialogDescription className="text-black">
                Product info
              </DialogDescription>
            </DialogDescription>
          </DialogHeader>
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
