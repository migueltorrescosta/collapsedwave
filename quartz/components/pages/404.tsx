import { QuartzComponentConstructor } from "../types"

function NotFound() {
  return (
    <article class="popover-hint">
      <h1>404</h1>
      I have yet to write this page. I would be keen to hear how you would write it, either by reaching out directly, or by <a href="https://github.com/migueltorrescosta/collapsedwave/issues/new/choose">submitting a content request on GitHub</a>.
    </article>
  )
}

export default (() => NotFound) satisfies QuartzComponentConstructor
