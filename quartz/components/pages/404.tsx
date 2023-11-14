import { QuartzComponentConstructor } from "../types"

function NotFound() {
  return (
    <article class="popover-hint">
      <h1>404</h1>
      <p>This page does not yet exist. If it should exist, feel free to <a href="https://github.com/migueltorrescosta/collapsedwave/issues/new/choose">submit a content request</a></p>
    </article>
  )
}

export default (() => NotFound) satisfies QuartzComponentConstructor
