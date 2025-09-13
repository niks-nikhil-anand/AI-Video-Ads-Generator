import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Video, Users } from "lucide-react";
import Link from "next/link";

const CreativeAITools = () => {
  return (
    <div className="bg-white text-black p-8">
      <h2 className="text-3xl font-bold mb-8 text-gray-900">
        Creative AI Tools
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* AI Products Images Card */}
        <div className="bg-gray-100 rounded-2xl p-6 relative overflow-hidden border border-gray-200">
          <div className="mb-6 max-w-[200px]">
            <h3 className="text-xl font-bold mb-1 text-gray-900">
              AI Products
            </h3>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Images</h3>
            <p className="text-gray-600 text-sm mb-6 leading-relaxed">
              Generate high-quality, professional product images instantly with
              AI.
            </p>
            <Link href={"/creative-tools/product-image"}>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg text-sm font-medium cursor-pointer">
                Create Now
              </Button>
            </Link>
          </div>

          {/* Product showcase images */}
          <div className="absolute top-4 right-4 flex flex-col space-y-2">
            <div className="relative">
              <div className="relative w-40 h-40 rounded-lg overflow-hidden ">
                <Image
                  src="/productImages/product-image.png"
                  alt="Product showcase"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* AI Products Video Card */}

        <div className="bg-gray-100 rounded-2xl p-6 relative overflow-hidden border border-gray-200">
          <div className="mb-6 max-w-[200px]">
            <h3 className="text-xl font-bold mb-1 text-gray-900">
              AI Products
            </h3>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Video</h3>
            <p className="text-gray-600 text-sm mb-6 leading-relaxed">
              Create engaging product showcase videos using AI.
            </p>
            <Link href={"/creative-tools/product-video"}>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg text-sm font-medium cursor-pointer">
                Create Now
              </Button>
            </Link>
          </div>
          <div className="absolute top-4 right-4 flex flex-col space-y-2">
            <div className="relative">
              <div className="relative w-40 h-40 rounded-lg overflow-hidden ">
                <Image
                  src="/productImages/product-video.png"
                  alt="Product showcase"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* AI Products With Avatar Card */}
        <div className="bg-gray-100 rounded-2xl p-6 relative overflow-hidden border border-gray-200">
          <div className="mb-6 max-w-[200px]">
            <h3 className="text-xl font-bold mb-1 text-gray-900">
              AI Products
            </h3>
            <h3 className="text-xl font-bold mb-4 text-gray-900">
              With Avatar
            </h3>
            <p className="text-gray-600 text-sm mb-6 leading-relaxed">
              Bring your products to life with AI avatars.
            </p>
            <Link href={"/creative-tools/product-video"}>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg text-sm font-medium cursor-pointer">
                Create Now
              </Button>
            </Link>
          </div>
          <div className="absolute top-4 right-4 flex flex-col space-y-2">
            <div className="relative">
              <div className="relative w-40 h-40 rounded-lg overflow-hidden ">
                <Image
                  src="/productImages/product-avatar.png"
                  alt="Product showcase"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreativeAITools;
