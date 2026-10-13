"use client";
import { useState } from "react";
export default function CopyEmail() {
 const [copied,setCopied] = useState(false);
 async function copyEmail(){
  try { await navigator.clipboard.writeText("akhaelk@gmail.com"); setCopied(true); window.setTimeout(()=>setCopied(false),2000); }
  catch { window.location.href="mailto:akhaelk@gmail.com"; }
 }
 return <button type="button" onClick={copyEmail} className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-zinc-200 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-indigo-400" aria-live="polite">{copied ? "Email copied" : "Copy email"}</button>;
}
