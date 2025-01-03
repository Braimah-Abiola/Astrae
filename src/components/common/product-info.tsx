import { Product } from "@/types";
import {
  Briefcase,
  Building2,
  FileCode,
  Globe,
  LayoutList,
  Loader,
} from "lucide-react";
import { Button } from "../ui/button";
import FeaturesAccordion from "./features-accordion";
import SimilarProducts from "./similar-products";

const ProductInfo = (data: Product) => {
  const date = data.createdAt;
  const formattedDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const formattedTime = date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });
  return (
    <div>
      <div className=" container py-20">
        <div className="flex flex-col md:flex-row items-start justify-between gap-20 w-full">
          <div className=" w-full flex flex-col items-start">
            <p
              className=" text-base text-white/70 mt-2 md:mt-2 text-start"
              style={{ whiteSpace: "pre-wrap" }}
            >
              {data.detailedDescription}
            </p>

            <FeaturesAccordion />
          </div>
          <div className=" md:w-1/2 flex flex-col items-start">
            <div className=" w-full flex flex-col items-start">
              <h2 className="font-semibold text-2xl tracking-tighter text-white">
                Pages
              </h2>

              <div className="gap-y-3 gap-x-3 flex flex-wrap w-fit mt-4">
                {data.pages.split(",").map((page) => (
                  <Button
                    key={page.trim()}
                    className=" px-2 md:px-3 w-fit"
                    size="sm"
                  >
                    <Globe className="mr-2 h-5 w-5" />
                    {page.trim()}
                  </Button>
                ))}
              </div>
            </div>

            <div className=" w-full flex flex-col items-start mt-12">
              <h2 className="font-semibold text-2xl tracking-tighter text-white">
                Category
              </h2>

              {data.category === "MARKETING_PAGE" ? (
                <Button size="sm" className="mt-4 w-fit px-3">
                  <Briefcase className=" h-5 w-5 mr-3" />
                  Marketing Page
                </Button>
              ) : data.category === "STARTUP_LANDING_PAGE" ? (
                <Button size="sm" className="mt-4 w-fit px-3">
                  <Building2 className=" h-5 w-5 mr-3" />
                  Startup Landing Page
                </Button>
              ) : data.category === "SAAS_LANDING_PAGE" ? (
                <Button size="sm" className="mt-4 w-fit px-3">
                  <LayoutList className=" h-5 w-5 mr-3" />
                  SaaS Landing Page
                </Button>
              ) : data.category === "SAAS_WAITLIST" ? (
                <Button size="sm" className="mt-4 w-fit px-3">
                  <Loader className=" h-5 w-5 mr-3" />
                  SaaS Waitlist
                </Button>
              ) : data.category === "AGENCY_WEBSITE" ? (
                <Button size="sm" className="mt-4 w-fit px-3">
                  <Briefcase className=" h-5 w-5 mr-3" />
                  Agency Website
                </Button>
              ) : data.category === "DEV_PORTFOLIO" ? (
                <Button size="sm" className="mt-4 w-fit px-3">
                  <FileCode className=" h-5 w-5 mr-3" />
                  Dev Portfolio
                </Button>
              ) : null}
            </div>

            <div className=" w-full flex flex-col items-start mt-12">
              <p className="text-sm text-white/70">
                Added {formattedDate} at {formattedTime}
              </p>
            </div>
          </div>
        </div>
      </div>
      <SimilarProducts id={data.id} />
      <div className="mt-20" />
    </div>
  );
};

export default ProductInfo;
