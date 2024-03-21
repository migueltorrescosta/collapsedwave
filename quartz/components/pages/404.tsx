import { i18n } from "../../i18n"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "../types"

const NotFound: QuartzComponent = ({ cfg }: QuartzComponentProps) => {
  return (
    <article class="popover-hint">
      <h1>404</h1>
      <p>I have yet to write this page. I would be keen to hear how you would write it, either by reaching out directly, or by <a href="https://github.com/migueltorrescosta/collapsedwave/issues/new/choose">submitting a content request on GitHub</a>.</p>
    </article>
  )
}

export default (() => NotFound) satisfies QuartzComponentConstructor
