import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { LayoutDashboard, Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function Sidebar() {
  const navigate = useNavigate();
  return (
    <div className={cn("pb-12, border-r")}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className=" px-4 text-lg font-semibold tracking-tight mb-5">
            Blood Donation
          </h2>
          <div className="space-y-1">
            <Button
              onClick={() => {
                navigate("/");
              }}
              variant="secondary"
              className="w-full justify-start"
            >
              <LayoutDashboard className="mr-2 h-4 w-4" />
              Dashboard
            </Button>
            <Button
              onClick={() => {
                navigate("/add-donor");
              }}
              variant="ghost"
              className="w-full justify-start"
            >
              <Plus className="mr-2 h-4 w-4" />
              Add Donor
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
