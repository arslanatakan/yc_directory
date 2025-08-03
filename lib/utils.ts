import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric"
  });
}

export function parseServerActionResponse<T>(response: T){
  return JSON.parse(JSON.stringify(response));
}

// TODO: Make a formatNumber function 
// to decide whether we need to write 
// View or View-s 
// when a user number is singular or plural. 

// export function formatNumber()
