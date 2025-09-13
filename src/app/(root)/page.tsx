import React from "react";
import CreativeAITools from "@/components/shared/creative-ai-tools";
import MyAdsEmptyState from "@/components/shared/my-ads";

const Page = () => {
  const handleCreateAds = () => {
    // Navigate to ads creation page or open modal
    console.log("Creating new ads...");
  };
  return (
    <>
      <CreativeAITools />
      <MyAdsEmptyState onCreateAds={handleCreateAds} />
    </>
  );
};

export default Page;
