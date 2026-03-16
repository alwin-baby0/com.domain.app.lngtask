import { Lightning, Utils } from '@lightningjs/sdk'
import Row from './components/row'

interface AppTemplateSpec extends Lightning.Component.TemplateSpec {
  Background: {
    Row: typeof Row
  }
}

export class App
  extends Lightning.Component<AppTemplateSpec>
  // eslint-disable-next-line prettier/prettier
  implements Lightning.Component.ImplementTemplateSpec<AppTemplateSpec> {
  /*
   * The following properties exist to make it more convenient to access elements
   * below in a type-safe way. They are optional.
   *
   * See https://lightningjs.io/docs/#/lightning-core-reference/TypeScript/Components/TemplateSpecs?id=using-a-template-spec
   * for more information.
   */

  readonly Row = this.tag('Background.Row')!

  static override _template(): Lightning.Component.Template<AppTemplateSpec> {
    return {
      w: 1920,
      h: 1080,
      Background: {
        w: 1920,
        h: 1080,
        color: 0xff000000,
        rect: true,
        Row: {
          y: 400,
          x: 70,
          type: Row,
        },
      },
    }
  }

  override _getFocused(): Lightning.Component | null | undefined {
    return this.tag('Background.Row')
  }

  override _init(): void {
    this._getDataAndUpdateRow()
  }

  _getDataAndUpdateRow = async () => {
    const res = await fetch('../static/data/rowData.json')
    const data = await res.json()
    this.Row.patch({ data: data })
    this._refocus()
  }

  static getFonts() {
    return [
      {
        family: 'Regular',
        url: Utils.asset('fonts/Roboto-Regular.ttf') as string,
      },
    ]
  }
}
