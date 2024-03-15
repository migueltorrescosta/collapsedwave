import { QuartzComponentConstructor } from "../types"

function NotFound() {
  return (
    <article class="popover-hint">
      <h1>404</h1>
      I have yet to write this page. I'd be keen to hear how you would write up this page. Feel free to reach out directly, or <a href="https://github.com/migueltorrescosta/collapsedwave/issues/new/choose">submit a content request</a>.
    </article>
  )
}

export default (() => NotFound) satisfies QuartzComponentConstructor
