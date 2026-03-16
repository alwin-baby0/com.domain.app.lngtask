import Lightning from '@lightningjs/sdk/src/Lightning'
import CardTemplateSpec from './cardTemplateSpec'

class Card
  extends Lightning.Component<CardTemplateSpec>
  // eslint-disable-next-line prettier/prettier
  implements Lightning.Component.ImplementTemplateSpec<CardTemplateSpec> {
  __title = ''
  __subtitle = ''
  __thumbnailImage = ''

  readonly Thumbnail = this.tag('Thumbnail')
  readonly Title = this.tag('Title')
  readonly Subtitle = this.tag('Subtitle')

  static override _template() {
    const width = 280
    const height = 420
    const gap = 10
    const titleFontSize = 25
    const subtitleFontSize = 20

    return {
      Thumbnail: {
        w: width,
        h: height,
        color: 0xbbffffff,
        rect: true,
        shader: { type: Lightning.shaders.RoundedRectangle, radius: 20 },
      },
      Title: {
        y: height + gap,
        text: {
          maxLines: 1,
          maxLinesSuffix: '...',
          wordWrap: true,
          wordWrapWidth: width,
          fontSize: titleFontSize,
        },
      },
      Subtitle: {
        y: height + gap * 2 + 25,
        text: {
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
    this.Thumbnail.patch({ src: this.__thumbnailImage })
  }

  override _focus() {
    this.patch({
      scale: 1.15,
    })
  }

  override _unfocus() {
    this.patch({
      scale: 1,
    })
  }
}

export default Card
