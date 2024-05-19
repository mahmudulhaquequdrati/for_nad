import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axios from "axios";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Login() {
  const [input, setInput] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = () => {
    axios.post("http://localhost:8800/api/auth/login", input).then((res) => {
      localStorage.setItem("u_token", res.data.token);
      navigate(location?.state?.from || "/");
    });
  };
  return (
    <div className="h-screen flex items-center justify-center">
      <Card className="w-[25rem]">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-2xl">Login to Your account</CardTitle>
          <CardDescription>Enter your email and password</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="relative mb-4">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                below
              </span>
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="email@example.com"
              onChange={(e) => setInput({ ...input, username: e.target.value })}
              value={input.username}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="******"
              onChange={(e) => setInput({ ...input, password: e.target.value })}
              value={input.password}
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button type="button" onClick={handleSubmit} className="w-full">
            Login
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
