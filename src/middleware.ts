import { clerkMiddleware } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export default clerkMiddleware((auth) => {
  // Placeholder middleware function
});

export const config = {
  matcher: ["/((?!_next|[^?]*\\.(?:html?|css|js|png|svg|ico)).*)"],
};
