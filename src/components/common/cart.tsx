import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import useCart from "@/hooks/use-cart";
import { cn } from "@/lib/utils";
import { ShoppingBag } from "lucide-react";
import Image from "next/image";
import { Checkbox } from "../ui/checkbox";
import { Separator } from "../ui/separator";
import CartItem from "./cart-item";
import Currency from "./currency";
import PrimaryButton from "./primarybutton";

export function Cart() {
  const cart = useCart();
  const items = useCart((state) => state.items);

  const totalPrice = items.reduce((total, item) => {
    const price = parseFloat(item.price.replace("$", "").trim());
    return total + (isNaN(price) ? 0 : price);
  }, 0);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <div
          className="cursor-pointer group relative h-12 aspect-square flex items-center justify-center"
          role="button"
          aria-label="Shopping cart with items"
        >
          <ShoppingBag className="opacity-70 group-hover:opacity-100 h-5 w-5" />
          <span
            className={cn(
              "absolute top-[0.35rem] right-[0.35rem] rounded-full bg-[#0096FA] text-white flex items-center justify-center text-[10px]",
              `${cart.items.length <= 10 ? " h-4 w-4 aspect-square" : "h-4 w-4"}`
            )}
            aria-live="polite"
          >
            {cart.items.length}
          </span>
        </div>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Cart</SheetTitle>
        </SheetHeader>
        <Separator className="mt-4 opacity-15" orientation="horizontal" />
        {cart.items.length === 0 && (
          <div className="flex flex-col w-full items-center h-full justify-between">
            <div className="flex flex-col w-full items-center h-full justify-center">
              <div className=" w-full h-[10rem] relative">
                <Image
                  fill
                  className=" object-contain"
                  src="/assets/empty-cart.webp"
                  alt="Empty cart"
                  quality={100}
                />
              </div>

              <p className=" text-white/70 text-sm">No items in cart</p>
            </div>
            <div className=" h-1/2 flex flex-col items-center w-full justify-end pb-12">
              <Separator className="mb-4 opacity-15" orientation="horizontal" />
              <div className=" w-full flex items-center justify-between text-white">
                <p>Total</p>
                <h4 className=" font-medium text-xl">$0.00</h4>
              </div>
              <Separator className="mt-4 opacity-15" orientation="horizontal" />

              <SheetClose className="mt-4" asChild>
                <div className="w-full">
                  <PrimaryButton>Close</PrimaryButton>
                </div>
              </SheetClose>
            </div>
          </div>
        )}
        <div className="flex flex-col w-full items-center h-full justify-between">
          <div className=" w-full h-full overflow-y-scroll">
            <ul className="py-4">
              {cart.items.map((item) => (
                <CartItem key={item.id} data={item} />
              ))}
            </ul>
          </div>
          <div className=" h-fit flex flex-col items-center w-full justify-end pb-12">
            <Separator className="mb-4 opacity-15" orientation="horizontal" />
            <div className=" w-full flex items-center justify-between text-white">
              <p className=" text-base">Total</p>
              <Currency value={totalPrice} />
            </div>
            <Separator className="mt-4 opacity-15" orientation="horizontal" />
            <div className="flex items-center space-x-2 w-full text-white mt-4 mb-2">
              <Checkbox id="terms" />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Accept terms and conditions
              </label>
            </div>
            <SheetClose className="mt-4" asChild>
              <div className="w-full">
                <PrimaryButton>Checkout</PrimaryButton>
              </div>
            </SheetClose>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
