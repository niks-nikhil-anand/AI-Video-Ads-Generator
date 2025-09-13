import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Megaphone, Sparkles } from "lucide-react";

interface MyAdsEmptyStateProps {
  onCreateAds?: () => void;
  className?: string;
}

const MyAdsEmptyState: React.FC<MyAdsEmptyStateProps> = () => {
  return (
    <div className="bg-white text-black p-8">
      <h2 className="text-3xl font-bold mb-8 text-gray-900">My Ads</h2>
      <Card className="w-full  border-dashed border-2 border-gray-300 dark:border-gray-600">
        <CardContent className="flex flex-col items-center justify-center p-12 text-center">
          {/* Animated Icon Container */}
          <div className="relative mb-6">
            <div className="w-24 h-24 bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900/20 dark:to-blue-900/20 rounded-full flex items-center justify-center shadow-lg">
              <Megaphone className="w-12 h-12 text-purple-600 dark:text-purple-400" />
            </div>
            {/* Decorative Sparkles */}
            <Sparkles className="w-5 h-5 text-yellow-400 absolute -top-1 -right-1 animate-pulse" />
            <Sparkles className="w-4 h-4 text-blue-400 absolute -bottom-1 -left-1 animate-pulse delay-300" />
            <Sparkles className="w-3 h-3 text-purple-400 absolute top-2 -left-2 animate-pulse delay-700" />
          </div>

          {/* Main Content */}
          <div className="space-y-4 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              My Ads
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-sm">
              You don&apos;t have any ads created
            </p>
          </div>

          {/* Call to Action Button */}
          <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105">
            Create New Ads
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default MyAdsEmptyState;
