import Link from "next/link";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

export default function Pagination({
  prev, 
  next
}:{
  prev : {slug : string, title : string} | null, 
  next : {slug : string, title : string} | null
}) {

  return (
    <div className="flex justify-between mt-8">
      {prev ? (
        <Link href={prev.slug} className="inline-flex">
          <ChevronLeftIcon className="size-6"/>
          {prev.title}
        </Link>
      ) : (
        <div></div>
      )}
      {next ? (
        <Link href={next.slug} className="inline-flex">
          {next.title}
          <ChevronRightIcon className="size-6"/>
        </Link>
      ) : (
        <div></div>
      )}
    </div>
  )

}