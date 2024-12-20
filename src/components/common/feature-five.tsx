import { ChevronRight } from "lucide-react";
import { Button } from "../ui/button";

const FeatureFive = () => {
  return (
    <div className="w-full h-[40rem] md:h-[20rem] md:col-span-2 border border-white/15 rounded-xl relative overflow-hidden">
      <div className="flex flex-col items-start pt-4 md:pt-8">
        <h4 className=" text-2xl md:text-3xl px-4 md:px-8 text-white font-semibold">
          Blazing Fast
        </h4>
        <p className=" text-white/70 w-[84vw] md:w-[34rem] pl-4 md:pl-8 font-normal text-base mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
          ducimus quod. Nam quidem, accusamus quisquam ullam velit delectus
          aliquam atque illo exercitationem impedit nostrum. Ullam expedita
          laboriosam perferendis omnis voluptatem!
        </p>
        <Button
          variant="link"
          className=" hover:no-underline no-underline text-white w-fit px-4 md:px-8"
        >
          Explore marketplace
          <ChevronRight className=" ml-0" />
        </Button>
      </div>
    </div>
  );
};

export default FeatureFive;
