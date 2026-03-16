import Lightning from '@lightningjs/sdk/src/Lightning'
import CardTemplateSpec from './cardTemplateSpec'
import { cardDinmenions, textColor } from '../../constants'
import { Utils } from '@lightningjs/sdk'

class Card
  extends Lightning.Component<CardTemplateSpec>
  // eslint-disable-next-line prettier/prettier
  implements Lightning.Component.ImplementTemplateSpec<CardTemplateSpec> {
  __title = ''
  __subtitle = ''
  __thumbnailImage = ''
  _txLoadedOrFailed = false

  readonly Image = this.tag('Image')
  readonly Title = this.tag('Title')
  readonly Subtitle = this.tag('Subtitle')
  readonly Focus = this.tag('Focus')

  static override _template() {
    const width = cardDinmenions.width
    const height = cardDinmenions.height
    const gap = 10
    const titleFontSize = 25
    const subtitleFontSize = 20
    const focusWidth = 3

    return {
      w: width,
      h: height,
      Thumbnail: {
        w: width,
        h: height,
        color: 0xff2a2a2a,
        rect: true,
        shader: { type: Lightning.shaders.RoundedRectangle, radius: 20 },
        Focus: {
          alpha: 0,
          rect: true,
          x: -focusWidth,
          y: -focusWidth,
          w: width + focusWidth * 2,
          h: height + focusWidth * 2,
          color: textColor,
          shader: { type: Lightning.shaders.RoundedRectangle, radius: 22 },
        },
        Image: {
          w: width,
          h: height,
          shader: { type: Lightning.shaders.RoundedRectangle, radius: 20 },
          alpha: 0.01,
        },
      },
      Title: {
        y: height + gap,
        alpha: 0.5,
        text: {
          textColor: textColor,
          maxLines: 1,
          maxLinesSuffix: '...',
          wordWrap: true,
          wordWrapWidth: width,
          fontSize: titleFontSize,
        },
      },
      Subtitle: {
        y: height + gap * 2 + titleFontSize,
        alpha: 0.5,
        text: {
          textColor: textColor,
          maxLines: 1,
          maxLinesSuffix: '...',
          wordWrap: true,
          wordWrapWidth: width,
          fontSize: subtitleFontSize,
        },
      },
    }
  }

  set title(value: string) {
    this.__title = value
    this.Title.patch({ text: { text: this.__title } })
  }

  set subtitle(value: string) {
    this.__subtitle = value
    this.Subtitle.patch({ text: { text: this.__subtitle } })
  }

  set thumbnailImage(value: string) {
    this.__thumbnailImage = value
    this.Image.patch({ src: this.__thumbnailImage })
  }

  override _init(): void {
    const onTxLoadedHandler = () => {
      this._txLoadedOrFailed = true
      this.Image.setSmooth('alpha', 1)
      if (this.hasFocus()) this._focus()
    }

    const onTxErrorHandler = () => {
      this._txLoadedOrFailed = true
      this.Image.patch({ src: Utils.asset('images/placeholder.png') })
    }

    this.Image.on('txLoaded', onTxLoadedHandler)
    this.Image.on('txError', onTxErrorHandler)
  }

  override _focus() {
    this.setSmooth('scale', 1.05)
    this.Title.setSmooth('alpha', 1)
    this.Subtitle.setSmooth('alpha', 1)
    if (this._txLoadedOrFailed) this.Focus.setSmooth('alpha', 1)
  }

  override _unfocus() {
    this.setSmooth('scale', 1)
    this.Title.setSmooth('alpha', 0.5)
    this.Subtitle.setSmooth('alpha', 0.5)
    this.Focus.setSmooth('alpha', 0)
  }
}

export default Card
