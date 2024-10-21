import BottomTab from "@/components/BottomTab";

export default function Map() {
  return (
    <div className="h-screen w-full bg-black pb-[env(safe-area-inset-bottom)] pl-[env(safe-area-inset-left)] pr-[env(safe-area-inset-right)] pt-[env(safe-area-inset-top)]">
      <BottomTab />
    </div>
  );
}
