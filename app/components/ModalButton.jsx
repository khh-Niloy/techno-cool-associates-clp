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

export function ModalButton({ image, model, BrandedProduct, productName }) {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button
            variant="outline"
            className={`w-full rounded-lg hover:bg-blue-600 py-5 bg-[#212121] duration-300 transition-all hover:text-white cursor-pointer`}
          >
            See more
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <div
              className="object-cover rounded-2xl w-full h-[10rem] mb-2 bg-black/10"
              // src={e.image}
              // alt="Shoes"
            />
            <h1 className="text-xl font-semibold">{productName}</h1>
            {BrandedProduct.map((e) => (
              <DialogDescription className="border border-black/10 p-3 rounded-md">
                <DialogTitle className={"text-black text-2xl"}>
                  {e?.brand}
                </DialogTitle>
                <h1 className="mt-2 text-black">Models:</h1>
                <div className="flex gap-3 text-black">
                  {model.map((e, index) => (
                    <h1 key={index}>{e}</h1>
                  ))}
                </div>
                <DialogDescription className="text-black">
                  <h1 className="mt-2 text-lg font-semibold">Features:</h1>
                  <ul>
                    {e?.coreFeatures.map((e) => (
                      <li className="list-decimal list-inside">{e}</li>
                    ))}
                  </ul>
                  <h1 className="mt-2 text-lg font-semibold">Capabilities</h1>
                  <ul>
                    {e?.capabilities.map((e) => (
                      <li className="list-decimal list-inside">{e}</li>
                    ))}
                  </ul>
                </DialogDescription>
              </DialogDescription>
            ))}
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
