export function Loader() {
  return (
    <div className="flex h-full justify-center items-center gap-1">
      <span className="sr-only">Loading...</span>
      <div className="h-4 w-4 bg-accent-500 rounded-full animate-[bounce_.75s_infinite] [animation-delay:-0.3s]"></div>
      <div className="h-4 w-4 bg-accent-500 rounded-full animate-[bounce_.75s_infinite] [animation-delay:-0.15s]"></div>
      <div className="h-4 w-4 bg-accent-500 rounded-full animate-[bounce_.75s_infinite]"></div>
    </div>
  )
}
