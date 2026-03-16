import { Lightning, Utils } from '@lightningjs/sdk'
import Row from './components/row'
import { SimpleErrorResponse, SimpleSuccessResponse } from './models/models'
import { getChannelsData } from './network/channels'
import LoadingScreen from './components/loadingScreen'
import ErrorScreen from './components/errorScreen'

interface AppTemplateSpec extends Lightning.Component.TemplateSpec {
  Background: {
    LoadingScreen: typeof LoadingScreen
    ErrorScreen: typeof ErrorScreen
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

  _focusedComponent: Lightning.Component | null | undefined = undefined

  readonly Row = this.tag('Background.Row')!
  readonly LoadingScreen = this.tag('Background.LoadingScreen')!
  readonly ErrorScreen = this.tag('Background.ErrorScreen')!

  static override _template(): Lightning.Component.Template<AppTemplateSpec> {
    return {
      w: 1920,
      h: 1080,
      Background: {
        w: 1920,
        h: 1080,
        color: 0xff000000,
        rect: true,
        LoadingScreen: {
          alpha: 1,
          type: LoadingScreen,
        },
        ErrorScreen: {
          visible: false,
          type: ErrorScreen,
        },
        Row: {
          y: 400,
          x: 70,
          type: Row,
        },
      },
    }
  }

  override _getFocused(): Lightning.Component | null | undefined {
    return this._focusedComponent
  }

  override _init(): void {
    this.ErrorScreen.patch({ enterHandler: this._getChannelsDataAndCreateChannels })
    this._getChannelsDataAndCreateChannels()
  }

  static getFonts() {
    return [
      {
        family: 'Regular',
        url: Utils.asset('fonts/Roboto-Regular.ttf') as string,
      },
    ]
  }

  _getChannelsDataAndCreateChannels = async () => {
    this.ErrorScreen.patch({ visible: false })
    this.LoadingScreen.setSmooth('alpha', 1)
    const data = await getChannelsData()
    if (!(data as SimpleSuccessResponse)?.data || (data as SimpleErrorResponse)?.error) {
      this.ErrorScreen.patch({ visible: true })
      this._focusedComponent = this.ErrorScreen
    } else {
      this.Row.patch({ data: (data as SimpleSuccessResponse)?.data })
      this._focusedComponent = this.Row
    }
    this.LoadingScreen.setSmooth('alpha', 0)
    this._refocus()
  }
}
