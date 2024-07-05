import clsx from "clsx";
import { type Poem } from "@/app/_interfaces/poem";

export default function PoemCard( { poem } : { poem: Poem }) { 
  
  // TODO: Move color logic to a helper function
  var color = poem.color;

  if (color) {
    if (color === "red") {
      color = "bg-red-200";
    } else if (color === "blue") {
      color = "bg-blue-200";
    } else if (color === "green") {
      color = "bg-green-200";
    } else if (color === "yellow") {
      color = "bg-yellow-200";
    } else if (color === "silver") {
      color = "bg-neutral-200";
    }
  }

  return (
    <div className="card w-80 ">
      <div className="card-body grid  justify-items-center">
        <div className={clsx("w-full h-1", color)} />
        <h2 className="card-title">{poem.title}</h2>
        <p className="card-description">{poem.author.name} - {poem.date}</p>
        <div className={clsx("w-full h-1 my-4", color)} />
      </div>
    </div>
    )
}